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
        currentSlide: 0,  // Track current slide index explicitly
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
        modalDataPlan: document.getElementById('hofferModalDataPlan'),
        modalPromoBadge: document.getElementById('hofferModalPromoBadge'),
        modalDetails: document.getElementById('hofferModalDetails'),
        modalTerms: document.getElementById('hofferModalTerms')
    };

    // Get the active slider based on current category and chip
    function getActiveSlider() {
        const activeGroup = getActiveCardGroup();
        return activeGroup ? activeGroup.querySelector('[data-hoffer-slider]') : null;
    }

    // ========================
    // UTILITY FUNCTIONS
    // ========================
    function getCardWidth() {
        // Get card from active slider to ensure correct width
        const activeSlider = getActiveSlider();
        if (activeSlider) {
            const card = activeSlider.querySelector('.hoffer-package-card');
            if (card) return card.offsetWidth;
        }
        // Fallback to any card in DOM
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
                state.currentSlide = 0;

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
        state.currentSlide = 0;

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

        // Total slides = number of positions we can slide to
        const totalSlides = Math.max(1, state.totalCards - config.cardsPerView + 1);
        state.maxOffset = slideWidth * (totalSlides - 1);

        // Apply transform to active slider (reset all sliders first, then apply to active)
        const allSliders = document.querySelectorAll('[data-hoffer-slider]');
        const activeSlider = getActiveSlider();

        allSliders.forEach(slider => {
            if (slider === activeSlider) {
                // Apply current offset to active slider
                slider.style.transform = `translateX(-${state.currentOffset}px)`;
            } else {
                // Reset inactive sliders to 0
                slider.style.transform = 'translateX(0)';
            }
        });

        // Update navigation buttons - slide 1 card at a time
        const isAtFirstSlide = state.currentSlide <= 0;
        const isAtLastSlide = state.currentSlide >= totalSlides - 1 || state.totalCards <= config.cardsPerView;

        if (elements.prevBtn) elements.prevBtn.disabled = isAtFirstSlide;
        if (elements.nextBtn) elements.nextBtn.disabled = isAtLastSlide;

        // Update pagination
        updatePagination();

        // Show/hide navigation arrows
        updateNavigationVisibility();
    }

    function updatePagination() {
        if (!elements.pagination) return;

        // Total slides = number of positions we can slide to
        const totalSlides = Math.max(1, state.totalCards - config.cardsPerView + 1);

        elements.pagination.innerHTML = '';

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'hoffer-pagination-dot' + (i === state.currentSlide ? ' active' : '');
            dot.style.width = i === state.currentSlide ? '32px' : '8px';
            dot.style.height = '8px';
            dot.addEventListener('click', () => goToSlide(i));
            elements.pagination.appendChild(dot);
        }
    }

    function updateNavigationVisibility() {
        const isMobile = window.innerWidth <= 768;
        const totalSlides = Math.max(1, state.totalCards - config.cardsPerView + 1);

        if (elements.navArrows) {
            // Hide arrows if items <= 3 or only 1 slide position available or on mobile
            if (state.totalCards <= 3 || totalSlides <= 1 || isMobile) {
                elements.navArrows.style.display = 'none';
            } else {
                elements.navArrows.style.display = 'flex';
            }
        }

        if (elements.pagination) {
            // Hide pagination if items <= 3 or only 1 slide position or on mobile
            if (state.totalCards <= 3 || isMobile || totalSlides <= 1) {
                elements.pagination.style.display = 'none';
            } else {
                elements.pagination.style.display = 'flex';
            }
        }
    }

    function goToSlide(index) {
        // Total slides = number of positions we can slide to
        // e.g., 9 cards - 3 visible + 1 = 7 possible positions
        const totalSlides = Math.max(1, state.totalCards - config.cardsPerView + 1);
        state.currentSlide = Math.max(0, Math.min(index, totalSlides - 1));

        // Offset = slide index × slide width (move 1 card at a time)
        const slideWidth = getSlideWidth();
        state.currentOffset = state.currentSlide * slideWidth;
        updateSlider();
    }

    function slidePrev() {
        state.currentSlide = Math.max(0, state.currentSlide - 1);
        const slideWidth = getSlideWidth();
        state.currentOffset = state.currentSlide * slideWidth;
        updateSlider();
    }

    function slideNext() {
        const totalSlides = Math.max(1, state.totalCards - config.cardsPerView + 1);
        state.currentSlide = Math.min(state.currentSlide + 1, totalSlides - 1);
        const slideWidth = getSlideWidth();
        state.currentOffset = state.currentSlide * slideWidth;
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
        const activeSlider = getActiveSlider();
        if (activeSlider) activeSlider.style.transition = 'none';
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

        const activeSlider = getActiveSlider();
        if (activeSlider) {
            activeSlider.style.transform = `translateX(-${newOffset}px)`;
        }
    }

    function handleTouchEnd(e) {
        if (!touchState.isDragging) return;

        touchState.isDragging = false;
        const activeSlider = getActiveSlider();
        if (activeSlider) activeSlider.style.transition = 'transform 0.5s ease';

        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchState.startX - touchEndX;
        const slideWidth = getSlideWidth();
        const totalSlides = Math.max(1, state.totalCards - config.cardsPerView + 1);
        const draggedOffset = touchState.startOffset + diff;

        // Calculate target slide based on dragged offset (1 card per slide)
        let targetSlide = Math.round(draggedOffset / slideWidth);

        // Velocity-based snap
        const velocity = diff / (Date.now() - e.timeStamp);
        if (Math.abs(velocity) > 0.5) {
            if (velocity > 0) {
                targetSlide = Math.min(targetSlide + 1, totalSlides - 1);
            } else {
                targetSlide = Math.max(targetSlide - 1, 0);
            }
        }

        // Clamp target slide to valid range
        targetSlide = Math.max(0, Math.min(targetSlide, totalSlides - 1));
        state.currentSlide = targetSlide;
        state.currentOffset = state.currentSlide * slideWidth;

        updateSlider();
    }

    function handleTouchCancel() {
        if (!touchState.isDragging) return;

        touchState.isDragging = false;
        const activeSlider = getActiveSlider();
        if (activeSlider) activeSlider.style.transition = 'transform 0.5s ease';
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

        // Card click delegation - add to all sliders
        document.querySelectorAll('[data-hoffer-slider]').forEach(slider => {
            slider.addEventListener('click', handleCardClick);
        });
    }

    function handleCardClick(e) {
        const card = e.target.closest('.hoffer-package-card');
        if (!card) return;

        // Parse data-extra as JSON
        let extraData = [];
        try {
            extraData = card.dataset.extra ? JSON.parse(card.dataset.extra) : [];
        } catch (error) {
            console.warn('Failed to parse data-extra JSON:', error);
            // Fallback to simple string format if JSON parsing fails
            extraData = [{ key: 'INTERNET', value: card.dataset.extra || '' }];
        }

        const cardData = {
            name: card.dataset.name || '',
            duration: card.dataset.duration || '',
            extra: extraData,
            originalPrice: card.dataset.originalPrice || '',
            finalPrice: card.dataset.finalPrice || '',
            promo: card.dataset.promo || '',
            details: card.dataset.details || '',
            terms: card.dataset.terms || '',
            href: card.dataset.href || '#'
        };

        openModal(cardData);
    }

    function openModal(cardData) {
        if (!elements.modal) return;

        // Update subscribe button href
        if (elements.modalSubscribeBtn) {
            elements.modalSubscribeBtn.href = cardData.href;
        }

        elements.modalPromoBadge.style.display = 'flex';
        // Update content
        if (elements.modalTitle) elements.modalTitle.textContent = cardData.name;
        if (elements.modalTitlePrice) elements.modalTitlePrice.textContent = cardData.finalPrice;
        if (elements.modalTitleValidity) elements.modalTitleValidity.textContent = cardData.duration;

        // Render dynamic data plan rows
        renderDataPlanRows(cardData.extra);

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
                elements.modalDetails.innerHTML = `-`;
            }
        }

        // Update Terms section (supports HTML content)
        if (elements.modalTerms) {
            if (cardData.terms) {
                elements.modalTerms.innerHTML = cardData.terms;
            } else {
                // Default content if no data provided
                elements.modalTerms.innerHTML = `-`;
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

    // Render dynamic data plan rows in modal
    function renderDataPlanRows(extraData) {
        if (!elements.modalDataPlan) return;

        // Clear existing content
        elements.modalDataPlan.innerHTML = '';

        // If no data provided, show default row
        if (!extraData || extraData.length === 0) {
            extraData = [{ icon: 'assets/components/globe.svg', key: 'INTERNET', value: '-' }];
        }

        // Render each data row - icon is now provided directly in the data
        extraData.forEach(item => {
            const iconSrc = item.icon || 'assets/components/globe.svg';
            const rowHtml = `
                <div class="hoffer-data-plan-row">
                    <div class="hoffer-data-plan-label">
                        <img src="${iconSrc}" alt="icon-offer">
                        <span>${item.key}</span>
                    </div>
                    <span class="hoffer-data-plan-value">${item.value}</span>
                </div>
            `;
            elements.modalDataPlan.innerHTML += rowHtml;
        });
    }

    // Get display text for card from extra data
    function getExtraDisplayText(extraData) {
        if (!extraData || extraData.length === 0) return '';

        // If multiple items, show as "Value 1 + Value 2"
        if (extraData.length === 1) {
            return extraData[0].value;
        } else if (extraData.length === 2) {
            return `${extraData[0].value} + ${extraData[1].value}`;
        } else {
            return `${extraData[0].value} + ${extraData.length - 1} more`;
        }
    }

    // Initialize card displays based on data-extra attribute
    function initCardDisplays() {
        document.querySelectorAll('.hoffer-package-card').forEach(card => {
            const extraElement = card.querySelector('.hoffer-package-extra');
            if (!extraElement) return;

            let extraData = [];
            try {
                extraData = card.dataset.extra ? JSON.parse(card.dataset.extra) : [];
            } catch (error) {
                // If parsing fails, use the text content as-is
                return;
            }
        });
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
            const totalSlides = Math.max(1, state.totalCards - config.cardsPerView + 1);
            state.maxOffset = slideWidth * (totalSlides - 1);

            // Recalculate current slide based on current offset
            state.currentSlide = Math.round(state.currentOffset / slideWidth);

            // Reset position if needed
            if (state.currentSlide > totalSlides - 1) {
                state.currentSlide = Math.max(0, totalSlides - 1);
            }

            // Recalculate offset based on slide position
            state.currentOffset = state.currentSlide * slideWidth;

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
        initCardDisplays();
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
