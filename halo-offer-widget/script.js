/**
 * Halo Offer Widget - Drupal/Twig Friendly Version
 *
 * Pendekatan: Server-side rendering (Twig) + Client-side interaction (JavaScript)
 * - HTML di-generate oleh Twig (server-side)
 * - JavaScript hanya menangani show/hide, slider navigation, dan modal interactions
 * - Data disimpan di data attribute untuk akses JavaScript
 */

(function() {
    'use strict';

    // ========================
    // CONFIGURATION
    // ========================
    const config = {
        cardsPerView: 3,
        cardWidth: 280,
        gap: 24
    };

    // ========================
    // STATE
    // ========================
    let state = {
        currentCategory: 'video',
        currentChip: 'netflix',
        currentOffset: 0,
        totalCards: 0,
        maxOffset: 0
    };

    // ========================
    // DOM ELEMENTS
    // ========================
    const elements = {
        widget: document.querySelector('[data-hoffer-widget]'),
        tabsContainer: document.querySelector('[data-hoffer-tabs]'),
        chipsContainers: document.querySelectorAll('[data-hoffer-chips]'),
        slider: document.querySelector('[data-hoffer-slider]'),
        background: document.querySelector('[data-hoffer-background]'),
        prevBtn: document.getElementById('hofferPrevBtn'),
        nextBtn: document.getElementById('hofferNextBtn'),
        pagination: document.getElementById('hofferPagination'),
        navArrows: document.querySelector('.hoffer-nav-arrows'),
        sliderContainer: document.querySelector('.hoffer-cards-container'),
        modal: document.getElementById('hofferSubscriptionModal'),
        modalBackdrop: document.getElementById('hofferModalBackdrop'),
        modalClose: document.getElementById('hofferModalClose'),
        modalSubscribeBtn: document.getElementById('hofferModalSubscribeBtn'),
        modalTitle: document.getElementById('hofferModalTitle'),
        modalTitlePrice: document.querySelector('.hoffer-modal-title-price'),
        modalTitleValidity: document.querySelector('.hoffer-modal-title-validity'),
        modalExtra: document.getElementById('hofferModalExtra'),
        modalPromoBadge: document.getElementById('hofferModalPromoBadge'),
        modalDetails: document.getElementById('hofferModalDetails'),
        modalTerms: document.getElementById('hofferModalTerms')
    };

    // ========================
    // UTILITY FUNCTIONS
    // ========================
    function getCardWidth() {
        const card = document.querySelector('.hoffer-package-card');
        return card ? card.offsetWidth : config.cardWidth;
    }

    function getSlideWidth() {
        return getCardWidth() + config.gap;
    }

    function getActiveCardGroup() {
        return document.querySelector(`.hoffer-card-group[data-category="${state.currentCategory}"][data-chip="${state.currentChip}"]`);
    }

    // ========================
    // CATEGORY TAB HANDLING
    // ========================
    function initCategoryTabs() {
        const tabs = elements.tabsContainer.querySelectorAll('.hoffer-tab-item');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.dataset.category;
                const background = this.dataset.background;

                // Update active state on tabs
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Update state
                state.currentCategory = category;
                state.currentOffset = 0;

                // Update background
                updateBackground(background);

                // Show/hide chips containers
                updateChipsVisibility(category);

                // Get first chip of this category and activate it
                const chipsContainer = document.querySelector(`[data-hoffer-chips][data-category="${category}"]`);
                const firstChip = chipsContainer?.querySelector('.hoffer-chip');
                if (firstChip) {
                    activateChip(firstChip.dataset.chip);
                }
            });
        });
    }

    function updateBackground(backgroundPath) {
        if (elements.background && backgroundPath) {
            elements.background.style.backgroundImage = `url('${backgroundPath}')`;
        }
    }

    function updateChipsVisibility(category) {
        elements.chipsContainers.forEach(container => {
            if (container.dataset.category === category) {
                container.classList.add('hoffer-active');
            } else {
                container.classList.remove('hoffer-active');
            }
        });
    }

    // ========================
    // CHIP FILTER HANDLING
    // ========================
    function initChips() {
        document.querySelectorAll('.hoffer-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                const chipId = this.dataset.chip;
                activateChip(chipId);
            });
        });
    }

    function activateChip(chipId) {
        state.currentChip = chipId;
        state.currentOffset = 0;

        // Update active state on chips within current category
        const currentChipsContainer = document.querySelector(`[data-hoffer-chips][data-category="${state.currentCategory}"]`);
        if (currentChipsContainer) {
            currentChipsContainer.querySelectorAll('.hoffer-chip').forEach(chip => {
                chip.classList.toggle('active', chip.dataset.chip === chipId);
            });
        }

        // Show/hide card groups
        updateCardGroupsVisibility();
        updateSlider();
    }

    function updateCardGroupsVisibility() {
        const cardGroups = document.querySelectorAll('.hoffer-card-group');

        cardGroups.forEach(group => {
            const matchesCategory = group.dataset.category === state.currentCategory;
            const matchesChip = group.dataset.chip === state.currentChip;

            if (matchesCategory && matchesChip) {
                group.classList.add('hoffer-active');
            } else {
                group.classList.remove('hoffer-active');
            }
        });

        // Update total cards count
        const activeGroup = getActiveCardGroup();
        state.totalCards = activeGroup ? activeGroup.querySelectorAll('.hoffer-package-card').length : 0;
    }

    // ========================
    // SLIDER NAVIGATION
    // ========================
    function updateSlider() {
        const slideWidth = getSlideWidth();
        const containerWidth = elements.sliderContainer?.offsetWidth || 900;

        // Calculate cards per view based on container width
        if (containerWidth < 600) {
            config.cardsPerView = 1;
        } else if (containerWidth < 900) {
            config.cardsPerView = 2;
        } else {
            config.cardsPerView = 3;
        }

        // Update max offset
        state.maxOffset = slideWidth * Math.max(0, state.totalCards - config.cardsPerView);

        // Apply transform
        elements.slider.style.transform = `translateX(-${state.currentOffset}px)`;

        // Update navigation buttons
        if (elements.prevBtn) elements.prevBtn.disabled = state.currentOffset <= 0;
        if (elements.nextBtn) elements.nextBtn.disabled = state.currentOffset >= state.maxOffset;

        // Update pagination
        updatePagination();

        // Show/hide navigation arrows
        updateNavigationVisibility();
    }

    function updatePagination() {
        if (!elements.pagination) return;

        const totalSlides = Math.ceil(state.totalCards / config.cardsPerView);
        const currentSlide = Math.round(state.currentOffset / (getSlideWidth() * config.cardsPerView));

        elements.pagination.innerHTML = '';

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'hoffer-pagination-dot' + (i === currentSlide ? ' active' : '');
            dot.style.width = i === currentSlide ? '32px' : '8px';
            dot.style.height = '8px';
            dot.addEventListener('click', () => goToSlide(i));
            elements.pagination.appendChild(dot);
        }
    }

    function updateNavigationVisibility() {
        const isMobile = window.innerWidth <= 768;

        if (elements.navArrows) {
            if (state.totalCards <= 3 || isMobile) {
                elements.navArrows.style.display = 'none';
            } else {
                elements.navArrows.style.display = 'flex';
            }
        }

        if (elements.pagination) {
            if (isMobile || (state.totalCards <= 3 && !isMobile)) {
                elements.pagination.style.display = 'none';
            } else {
                elements.pagination.style.display = 'flex';
            }
        }
    }

    function goToSlide(index) {
        const slideWidth = getSlideWidth();
        state.currentOffset = index * slideWidth * config.cardsPerView;
        state.currentOffset = Math.min(state.currentOffset, state.maxOffset);
        updateSlider();
    }

    function slidePrev() {
        const slideWidth = getSlideWidth();
        state.currentOffset = Math.max(0, state.currentOffset - slideWidth * config.cardsPerView);
        updateSlider();
    }

    function slideNext() {
        const slideWidth = getSlideWidth();
        state.currentOffset = Math.min(state.maxOffset, state.currentOffset + slideWidth * config.cardsPerView);
        updateSlider();
    }

    // ========================
    // TOUCH/SWIPE SUPPORT
    // ========================
    let touchState = {
        startX: 0,
        currentX: 0,
        startOffset: 0,
        isDragging: false
    };

    function initTouchSupport() {
        const container = elements.sliderContainer;
        if (!container) return;

        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });
        container.addEventListener('touchcancel', handleTouchCancel, { passive: true });
    }

    function handleTouchStart(e) {
        touchState.startX = e.touches[0].clientX;
        touchState.currentX = touchState.startX;
        touchState.startOffset = state.currentOffset;
        touchState.isDragging = true;
        elements.slider.style.transition = 'none';
    }

    function handleTouchMove(e) {
        if (!touchState.isDragging) return;

        touchState.currentX = e.touches[0].clientX;
        const diff = touchState.startX - touchState.currentX;

        let newOffset = touchState.startOffset + diff;

        // Add resistance at boundaries
        if (newOffset < 0) {
            newOffset = diff * 0.3;
        } else if (newOffset > state.maxOffset) {
            const beyondEnd = newOffset - state.maxOffset;
            newOffset = state.maxOffset + (beyondEnd * 0.3);
        }

        elements.slider.style.transform = `translateX(-${newOffset}px)`;
    }

    function handleTouchEnd(e) {
        if (!touchState.isDragging) return;

        touchState.isDragging = false;
        elements.slider.style.transition = 'transform 0.5s ease';

        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchState.startX - touchEndX;
        const slideWidth = getSlideWidth();
        const draggedOffset = touchState.startOffset + diff;

        let targetSlide = Math.round(draggedOffset / slideWidth);

        // Velocity-based snap
        const velocity = diff / (Date.now() - e.timeStamp);
        if (Math.abs(velocity) > 0.5) {
            if (velocity > 0) {
                targetSlide = Math.ceil(draggedOffset / slideWidth);
            } else {
                targetSlide = Math.floor(draggedOffset / slideWidth);
            }
        }

        let finalOffset = targetSlide * slideWidth;
        finalOffset = Math.max(0, Math.min(finalOffset, state.maxOffset));

        const cardIndex = Math.round(finalOffset / slideWidth);
        state.currentOffset = cardIndex * slideWidth;
        state.currentOffset = Math.max(0, Math.min(state.currentOffset, state.maxOffset));

        updateSlider();
    }

    function handleTouchCancel() {
        if (!touchState.isDragging) return;

        touchState.isDragging = false;
        elements.slider.style.transition = 'transform 0.5s ease';
        updateSlider();
    }

    // ========================
    // MODAL HANDLING
    // ========================
    function initModal() {
        if (!elements.modal) return;

        // Close handlers
        if (elements.modalBackdrop) {
            elements.modalBackdrop.addEventListener('click', closeModal);
        }
        if (elements.modalClose) {
            elements.modalClose.addEventListener('click', closeModal);
        }
        if (elements.modalSubscribeBtn) {
            elements.modalSubscribeBtn.addEventListener('click', closeModal);
        }

        // Expandable sections
        document.querySelectorAll('.hoffer-expandable-header').forEach(header => {
            header.addEventListener('click', function() {
                const section = this.closest('.hoffer-expandable-section');
                const isCurrentlyActive = section.classList.contains('active');

                // Close all
                document.querySelectorAll('.hoffer-expandable-section').forEach(s => {
                    s.classList.remove('active');
                });

                // Toggle current
                if (!isCurrentlyActive) {
                    section.classList.add('active');
                }
            });
        });

        // Card click delegation
        if (elements.slider) {
            elements.slider.addEventListener('click', handleCardClick);
        }
    }

    function handleCardClick(e) {
        const card = e.target.closest('.hoffer-package-card');
        if (!card) return;

        const cardData = {
            name: card.dataset.name || '',
            duration: card.dataset.duration || '',
            extra: card.dataset.extra || '',
            originalPrice: card.dataset.originalPrice || '',
            finalPrice: card.dataset.finalPrice || '',
            promo: card.dataset.promo || '',
            details: card.dataset.details || '',
            terms: card.dataset.terms || ''
        };

        openModal(cardData);
    }

    function openModal(cardData) {
        if (!elements.modal) return;

        // Update content
        if (elements.modalTitle) elements.modalTitle.textContent = cardData.name;
        if (elements.modalTitlePrice) elements.modalTitlePrice.textContent = cardData.finalPrice;
        if (elements.modalTitleValidity) elements.modalTitleValidity.textContent = cardData.duration;
        if (elements.modalExtra) elements.modalExtra.textContent = cardData.extra;

        // Show/hide promo badge
        if (elements.modalPromoBadge) {
            if (cardData.promo) {
                elements.modalPromoBadge.textContent = cardData.promo;
            } else {
                elements.modalPromoBadge.style.display = 'none';
            }
        }

        // Update Details section (supports HTML content)
        if (elements.modalDetails) {
            if (cardData.details) {
                elements.modalDetails.innerHTML = cardData.details;
            } else {
                // Default content if no data provided
                elements.modalDetails.innerHTML = `
                    <ul class="hoffer-detail-list">
                        <li>Akses unlimited ke semua konten premium</li>
                        <li>Kualitas streaming Ultra HD 4K</li>
                        <li>Simultan hingga 4 perangkat</li>
                        <li>Download offline tanpa batas</li>
                    </ul>
                `;
            }
        }

        // Update Terms section (supports HTML content)
        if (elements.modalTerms) {
            if (cardData.terms) {
                elements.modalTerms.innerHTML = cardData.terms;
            } else {
                // Default content if no data provided
                elements.modalTerms.innerHTML = `
                    <ul class="hoffer-terms-list">
                        <li>Paket berlaku sesuai masa aktif yang dipilih</li>
                        <li>Kuota internet berlaku 24 jam</li>
                        <li>Tidak dapat diubah atau ditukar dengan paket lain</li>
                        <li>Pembayaran non-refundable setelah aktivasi</li>
                    </ul>
                `;
            }
        }

        // Reset expandable sections
        document.querySelectorAll('.hoffer-expandable-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show modal
        elements.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!elements.modal) return;

        elements.modal.classList.remove('active');
        document.body.style.overflow = '';

        // Reset expandable sections
        document.querySelectorAll('.hoffer-expandable-section').forEach(section => {
            section.classList.remove('active');
        });
    }

    // ========================
    // KEYBOARD NAVIGATION
    // ========================
    function initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Modal close on Escape
            if (e.key === 'Escape' && elements.modal?.classList.contains('active')) {
                closeModal();
                return;
            }

            // Slider navigation
            if (e.key === 'ArrowLeft' && elements.prevBtn && !elements.prevBtn.disabled) {
                slidePrev();
            } else if (e.key === 'ArrowRight' && elements.nextBtn && !elements.nextBtn.disabled) {
                slideNext();
            }
        });
    }

    // ========================
    // WINDOW RESIZE HANDLER
    // ========================
    function initResizeHandler() {
        window.addEventListener('resize', () => {
            // Recalculate
            const slideWidth = getSlideWidth();
            state.maxOffset = slideWidth * Math.max(0, state.totalCards - config.cardsPerView);

            // Reset position if needed
            if (state.currentOffset > state.maxOffset) {
                state.currentOffset = Math.max(0, state.maxOffset);
            }

            updateSlider();
        });
    }

    // ========================
    // INITIALIZATION
    // ========================
    function init() {
        // Initialize all components
        initCategoryTabs();
        initChips();
        initTouchSupport();
        initModal();
        initKeyboardNavigation();
        initResizeHandler();

        // Navigation buttons
        if (elements.prevBtn) {
            elements.prevBtn.addEventListener('click', slidePrev);
        }
        if (elements.nextBtn) {
            elements.nextBtn.addEventListener('click', slideNext);
        }

        // Initial setup
        updateCardGroupsVisibility();
        updateSlider();

        // Set initial background from first tab
        const firstTab = elements.tabsContainer?.querySelector('.hoffer-tab-item[data-background]');
        if (firstTab) {
            updateBackground(firstTab.dataset.background);
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
