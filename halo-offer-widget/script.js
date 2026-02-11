// Data structure for categories, chips, and cards
// Array format for easy API integration
const categoryData = [
    {
        category: 'video',
        label: 'Video',
        iconFile: 'moves.svg',
        background: "assets/backgrounds/video.png",
        chips: [
            { id: 'netflix', label: 'Netflix', color: '#E50914', iconFile: 'netflix.svg' },
            { id: 'hotstar', label: 'Disney+ Hotstar', color: '#0D1E45', iconFile: 'disney_hotstar.svg' },
            { id: 'vidio', label: 'Vidio', color: '#ED0226', iconFile: 'video.svg' },
            { id: 'wetv', label: 'WeTV', color: '#FF9500', iconFile: 'video.svg' },
            { id: 'prime', label: 'Prime Video', color: '#00A8E1', iconFile: 'prime_video.svg' }
        ],
        cards: [
            { chipId: 'netflix', items: [
                { name: 'Netflix Mobile', duration: '31 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp213.000', finalPrice: 'Rp186.000', promo: 'Promo' },
                { name: 'Netflix Basic', duration: '31 Hari', extra: 'Extra 4 GB', originalPrice: 'Rp256.000', finalPrice: 'Rp226.000', promo: 'Promo' },
                { name: 'Netflix Standard', duration: '62 Hari', extra: 'Extra 6 GB', originalPrice: 'Rp450.000', finalPrice: 'Rp396.000', promo: 'Promo' },
                { name: 'Netflix Premium', duration: '31 Hari', extra: 'Extra 8 GB', originalPrice: 'Rp360.000', finalPrice: 'Rp360.000', promo: null },
                { name: 'Netflix Mobile', duration: '93 Hari', extra: 'Extra 6 GB', originalPrice: 'Rp639.000', finalPrice: 'Rp546.000', promo: 'Best Deal' }
            ]},
            { chipId: 'hotstar', items: [
                { name: 'Hotstar Mobile', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp35.000', finalPrice: 'Rp30.000', promo: 'Promo' },
                { name: 'Hotstar Premium', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp60.000', finalPrice: 'Rp55.000', promo: 'Promo' },
                { name: 'Hotstar Yearly', duration: '365 Hari', extra: 'Extra 10 GB', originalPrice: 'Rp420.000', finalPrice: 'Rp360.000', promo: 'Best Deal' },
                { name: 'Hotstar Mobile 6M', duration: '180 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp210.000', finalPrice: 'Rp180.000', promo: null }
            ]},
            { chipId: 'vidio', items: [
                { name: 'Vidio Platinum', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'Vidio Platinum 3M', duration: '90 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp90.000', finalPrice: 'Rp75.000', promo: 'Promo' },
                { name: 'Vidio Yearly', duration: '365 Hari', extra: 'Extra 15 GB', originalPrice: 'Rp300.000', finalPrice: 'Rp250.000', promo: 'Best Deal' }
            ]},
            { chipId: 'wetv', items: [
                { name: 'WeTV VIP', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp35.000', finalPrice: 'Rp30.000', promo: 'Promo' },
                { name: 'WeTV VIP 3M', duration: '90 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp105.000', finalPrice: 'Rp90.000', promo: null },
                { name: 'WeTV Yearly', duration: '365 Hari', extra: 'Extra 8 GB', originalPrice: 'Rp350.000', finalPrice: 'Rp300.000', promo: 'Best Deal' }
            ]},
            { chipId: 'prime', items: [
                { name: 'Prime Video Monthly', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp60.000', finalPrice: 'Rp55.000', promo: 'Promo' },
                { name: 'Prime Video 3M', duration: '90 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp180.000', finalPrice: 'Rp150.000', promo: null },
                { name: 'Prime Yearly', duration: '365 Hari', extra: 'Extra 15 GB', originalPrice: 'Rp600.000', finalPrice: 'Rp500.000', promo: 'Best Deal' }
            ]}
        ]
    },
    {
        category: 'games',
        label: 'Games',
        iconFile: 'games.svg',
        background: "assets/backgrounds/games.png",
        chips: [
            { id: 'mobile-legends', label: 'Mobile Legends', color: '#D3242A', iconFile: 'mobile_lagend.svg' },
            { id: 'pubg', label: 'PUBG Mobile', color: '#F7A607', iconFile: 'garena.svg' },
            { id: 'freefire', label: 'Free Fire', color: '#FF6B00', iconFile: 'free_fire.svg' },
            { id: 'genshin', label: 'Genshin Impact', color: '#00A8E1', iconFile: 'roblox.svg' }
        ],
        cards: [
            { chipId: 'mobile-legends', items: [
                { name: 'Weekly Pass', duration: '7 Hari', extra: 'Extra 500 MB', originalPrice: 'Rp28.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'Monthly Pass', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp150.000', finalPrice: 'Rp130.000', promo: 'Promo' },
                { name: 'Twilight Pass', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp280.000', finalPrice: 'Rp250.000', promo: null },
                { name: 'Starlight Member', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp100.000', finalPrice: 'Rp90.000', promo: 'Best Deal' }
            ]},
            { chipId: 'pubg', items: [
                { name: 'UC Pack 60', duration: '7 Hari', extra: 'Extra 500 MB', originalPrice: 'Rp15.000', finalPrice: 'Rp12.000', promo: 'Promo' },
                { name: 'UC Pack 325', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp75.000', finalPrice: 'Rp65.000', promo: null },
                { name: 'Royale Pass', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp150.000', finalPrice: 'Rp130.000', promo: 'Best Deal' }
            ]},
            { chipId: 'freefire', items: [
                { name: 'FF Diamond 70', duration: '7 Hari', extra: 'Extra 300 MB', originalPrice: 'Rp10.000', finalPrice: 'Rp8.500', promo: 'Promo' },
                { name: 'FF Diamond 140', duration: '15 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp20.000', finalPrice: 'Rp17.000', promo: null },
                { name: 'Membership Mingguan', duration: '7 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Best Deal' }
            ]},
            { chipId: 'genshin', items: [
                { name: 'Welkin Moon', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp79.000', finalPrice: 'Rp70.000', promo: 'Promo' },
                { name: 'Genesis Crystal', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp159.000', finalPrice: 'Rp140.000', promo: null },
                { name: 'Blessing Bundle', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp300.000', finalPrice: 'Rp260.000', promo: 'Best Deal' }
            ]}
        ]
    },
    {
        category: 'music',
        label: 'Music',
        iconFile: 'musics.svg',
        background: "assets/backgrounds/music.png",
        chips: [
            { id: 'spotify', label: 'Spotify', color: '#1DB954', iconFile: 'spotify.svg' },
            { id: 'joox', label: 'JOOX', color: '#FF5200', iconFile: 'langit_musik.svg' },
            { id: 'apple-music', label: 'Apple Music', color: '#FA243C', iconFile: 'youtube.svg' },
            { id: 'youtube-music', label: 'YouTube Music', color: '#FF0000', iconFile: 'smule.svg' }
        ],
        cards: [
            { chipId: 'spotify', items: [
                { name: 'Spotify Individual', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp55.000', finalPrice: 'Rp50.000', promo: 'Promo' },
                { name: 'Spotify Duo', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp85.000', finalPrice: 'Rp75.000', promo: null },
                { name: 'Spotify Family', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp140.000', finalPrice: 'Rp120.000', promo: 'Best Deal' }
            ]},
            { chipId: 'joox', items: [
                { name: 'JOOX VIP', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'JOOX VIP 3M', duration: '90 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp90.000', finalPrice: 'Rp75.000', promo: 'Best Deal' }
            ]},
            { chipId: 'apple-music', items: [
                { name: 'Apple Music Individual', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp65.000', finalPrice: 'Rp60.000', promo: 'Promo' },
                { name: 'Apple Music Family', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp105.000', finalPrice: 'Rp95.000', promo: 'Best Deal' }
            ]},
            { chipId: 'youtube-music', items: [
                { name: 'YT Music Individual', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp55.000', finalPrice: 'Rp50.000', promo: 'Promo' },
                { name: 'YT Music Family', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp95.000', finalPrice: 'Rp85.000', promo: 'Best Deal' }
            ]}
        ]
    },
    {
        category: 'others',
        label: 'Layanan Lainnya',
        iconFile: 'others.svg',
        background: "assets/backgrounds/others.png",
        chips: [
            { id: 'canva', label: 'Canva', color: '#00C4CC', iconFile: 'gpt.svg' },
            { id: 'adobe', label: 'Adobe CC', color: '#FF0000', iconFile: 'zoom.svg' },
            { id: 'norton', label: 'Norton', color: '#FFEB3B', iconFile: 'norton.svg' },
            { id: 'kompas', label: 'Kompas', color: '#FF5722', iconFile: 'kompas.svg' }
        ],
        cards: [
            { chipId: 'canva', items: [
                { name: 'Canva Pro', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp60.000', finalPrice: 'Rp50.000', promo: 'Promo' },
                { name: 'Canva Pro 6M', duration: '180 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp360.000', finalPrice: 'Rp300.000', promo: 'Best Deal' }
            ]},
            { chipId: 'adobe', items: [
                { name: 'Adobe CC Single', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp350.000', finalPrice: 'Rp320.000', promo: 'Promo' },
                { name: 'Adobe CC Full', duration: '30 Hari', extra: 'Extra 10 GB', originalPrice: 'Rp600.000', finalPrice: 'Rp550.000', promo: 'Best Deal' }
            ]},
            { chipId: 'norton', items: [
                { name: 'Norton Basic', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp50.000', finalPrice: 'Rp45.000', promo: 'Promo' },
                { name: 'Norton Premium', duration: '365 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp500.000', finalPrice: 'Rp450.000', promo: 'Best Deal' }
            ]},
            { chipId: 'kompas', items: [
                { name: 'Kompas Digital', duration: '30 Hari', extra: 'Extra 500 MB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'Kompas Yearly', duration: '365 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp300.000', finalPrice: 'Rp250.000', promo: 'Best Deal' }
            ]}
        ]
    }
];

// Slider Configuration
const sliderConfig = {
    cardsPerView: 3,
    cardWidth: 280,
    gap: 24
};

// Get actual card width from DOM
function getCardWidth() {
    const card = document.querySelector('.package-card');
    return card ? card.offsetWidth : sliderConfig.cardWidth;
}

// Current state - using category index for array-based approach
let currentCategoryIndex = 0;
let currentChip = 'netflix';
let currentOffset = 0;
let totalCards = 0;
let maxOffset = 0;

// Helper function to get current category data
function getCurrentCategory() {
    return categoryData[currentCategoryIndex];
}

// Elements
const slider = document.getElementById('cardsSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagination = document.getElementById('pagination');
const navArrows = document.querySelector('.nav-arrows');

// Calculate slide width dynamically
function getSlideWidth() {
    return getCardWidth() + sliderConfig.gap;
}

// Render tabs dynamically from categoryData array
function renderTabs() {
    const tabsContainer = document.querySelector('.category-tabs');
    tabsContainer.innerHTML = '';

    categoryData.forEach((item, index) => {
        const tab = document.createElement('div');
        tab.className = 'tab-item' + (index === 0 ? ' active' : '');
        tab.dataset.index = index;

        tab.innerHTML = `
            <div class="tab-icon">
                <img src="assets/category-icons/${item.iconFile}" alt="${item.label}">
            </div>
            <span class="tab-label">${item.label}</span>
            <div class="tab-indicator"></div>
        `;

        tabsContainer.appendChild(tab);
    });

    // Re-attach tab event listeners
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Reset slider position
            currentOffset = 0;

            // Update current category index
            currentCategoryIndex = parseInt(tab.dataset.index);

            // Update background image
            updateBackground(currentCategoryIndex);

            // Render new chips and cards
            renderSubCategory(currentCategoryIndex);
            renderCards(currentCategoryIndex, currentChip);
        });
    });
}

// Render chips based on selected category index
function renderSubCategory(categoryIndex) {
    const data = categoryData[categoryIndex];
    if (!data) return;

    const chipsContainer = document.querySelector('.filter-chips');
    chipsContainer.innerHTML = '';

    data.chips.forEach((chipData, index) => {
        const chip = document.createElement('div');
        chip.className = 'chip' + (index === 0 ? ' active' : '');
        chip.dataset.filter = chipData.id;

        chip.innerHTML = `
            <div class="chip-icon">
                <img src="assets/sub-category-icons/${chipData.iconFile}" alt="${chipData.label}">
            </div>
            <span class="chip-label">${chipData.label}</span>
        `;

        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentChip = chipData.id;
            currentOffset = 0;
            renderCards(currentCategoryIndex, currentChip);
        });

        chipsContainer.appendChild(chip);
    });

    // Set first chip as active
    currentChip = data.chips[0]?.id || '';
}

// Render cards based on selected category index and chip
function renderCards(categoryIndex, chip) {
    const data = categoryData[categoryIndex];
    if (!data) return;

    const cardGroup = data.cards.find(c => c.chipId === chip);
    if (!cardGroup) return;

    const cards = cardGroup.items;
    totalCards = cards.length;

    // Update max offset
    maxOffset = getSlideWidth() * Math.max(0, totalCards - sliderConfig.cardsPerView);

    slider.innerHTML = '';

    cards.forEach(cardData => {
        const card = document.createElement('div');
        card.className = 'package-card';

        const promoHtml = cardData.promo ? `
            <div class="promo-ribbon">
                <div class="ribbon-content">${cardData.promo}</div>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.339844H2V9.33984C0.895431 9.33984 0 8.44441 0 7.33984V0.339844Z" fill="#FF0025"/>
                    <path d="M0 0H8L5.12873 0.628091C2.13432 1.28312 0 3.93478 0 7V0Z" fill="#001A41"/>
                </svg>

            </div>
        ` : '';

        const originalPriceHtml = cardData.originalPrice !== cardData.finalPrice
            ? `<span class="price-original">${cardData.originalPrice}</span>`
            : '';

        card.innerHTML = `
            <img src="assets/components/halo-offer-bg-card.svg" alt="" class="package-card-halo">
            <div class="package-card-bg"></div>
            ${promoHtml}
            <div class="package-card-content">
                <div class="package-detail">
                    <h3 class="package-name">${cardData.name}</h3>
                    <p class="package-duration">${cardData.duration}</p>
                    <p class="package-extra">${cardData.extra}</p>
                </div>
                <div class="package-price">
                    ${originalPriceHtml}
                    <span class="price-final">${cardData.finalPrice}</span>
                </div>
                <button class="package-btn subscribe-trigger">Berlangganan</button>
            </div>
        `;

        slider.appendChild(card);
    });

    updateSlider();
    initPagination();
}

// Initialize pagination dots
function initPagination() {
    const totalSlides = Math.ceil(totalCards / sliderConfig.cardsPerView);
    pagination.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'pagination-dot' + (i === 0 ? ' active' : '');
        dot.style.width = i === 0 ? '32px' : '8px';
        dot.style.height = '8px';
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
    }
}

// Update slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentOffset}px)`;

    // Update navigation buttons
    prevBtn.disabled = currentOffset <= 0;
    nextBtn.disabled = currentOffset >= maxOffset;

    // Update pagination
    const currentSlide = Math.round(currentOffset / (getSlideWidth() * sliderConfig.cardsPerView));
    const dots = pagination.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
        dot.style.width = index === currentSlide ? '32px' : '8px';
    });

    // Show/hide arrows based on total cards and screen size
    if (navArrows) {
        const isMobile = window.innerWidth <= 768;
        if (totalCards <= 3 || isMobile) {
            navArrows.style.display = 'none';
        } else {
            navArrows.style.display = 'flex';
        }
    }

    // Hide pagination in desktop when total cards <= 3, always hide on mobile
    const isMobile = window.innerWidth <= 768;
    if (pagination) {
        if (isMobile || (totalCards <= 3 && !isMobile)) {
            pagination.style.display = 'none';
        } else {
            pagination.style.display = 'flex';
        }
    }
}

// Go to specific slide
function goToSlide(index) {
    currentOffset = index * getSlideWidth() * sliderConfig.cardsPerView;
    currentOffset = Math.min(currentOffset, maxOffset);
    updateSlider();
}

// Previous button
prevBtn.addEventListener('click', () => {
    currentOffset = Math.max(0, currentOffset - getSlideWidth() * sliderConfig.cardsPerView);
    updateSlider();
});

// Next button
nextBtn.addEventListener('click', () => {
    currentOffset = Math.min(maxOffset, currentOffset + getSlideWidth() * sliderConfig.cardsPerView);
    updateSlider();
});

// Update background image based on category index
function updateBackground(categoryIndex) {
    const data = categoryData[categoryIndex];
    if (!data?.background) return;

    const widgetBg = document.querySelector('.widget-bg');
    // Set background image directly from categoryData
    widgetBg.style.backgroundImage = `url('${data.background}')`;
}

// Handle window resize
function handleResize() {
    const containerWidth = document.querySelector('.cards-container').offsetWidth;

    if (containerWidth < 600) {
        sliderConfig.cardsPerView = 1;
    } else if (containerWidth < 900) {
        sliderConfig.cardsPerView = 2;
    } else {
        sliderConfig.cardsPerView = 3;
    }

    // Recalculate max offset
    maxOffset = getSlideWidth() * Math.max(0, totalCards - sliderConfig.cardsPerView);

    // Reset position if needed
    if (currentOffset > maxOffset) {
        currentOffset = Math.max(0, maxOffset);
    }

    updateSlider();
    initPagination();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevBtn.click();
    } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextBtn.click();
    }
});

// Touch/Swipe support for mobile with real-time drag
let touchStartX = 0;
let touchCurrentX = 0;
let touchStartOffset = 0;
let isDragging = false;
const sliderContainer = document.querySelector('.cards-container');

sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchCurrentX = touchStartX;
    touchStartOffset = currentOffset;
    isDragging = true;

    // Disable transition during drag for immediate feedback
    slider.style.transition = 'none';
}, { passive: true });

sliderContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    touchCurrentX = e.touches[0].clientX;
    const diff = touchStartX - touchCurrentX;

    // Calculate new offset with resistance at boundaries
    let newOffset = touchStartOffset + diff;

    // Add resistance when going beyond boundaries
    if (newOffset < 0) {
        newOffset = diff * 0.3; // 30% resistance at start
    } else if (newOffset > maxOffset) {
        const beyondEnd = newOffset - maxOffset;
        newOffset = maxOffset + (beyondEnd * 0.3); // 30% resistance at end
    }

    // Apply the transform directly for real-time feedback
    slider.style.transform = `translateX(-${newOffset}px)`;
}, { passive: true });

sliderContainer.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;

    // Re-enable transition for smooth snap
    slider.style.transition = 'transform 0.5s ease';

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    const velocity = diff / (Date.now() - e.timeStamp); // Calculate swipe velocity

    // Determine which slide to snap to
    const slideWidth = getSlideWidth();
    const draggedOffset = touchStartOffset + diff;

    // Calculate target slide based on drag distance and velocity
    let targetSlide = Math.round(draggedOffset / slideWidth);

    // Apply velocity-based snap for fast swipes
    if (Math.abs(velocity) > 0.5) {
        if (velocity > 0) {
            targetSlide = Math.ceil(draggedOffset / slideWidth);
        } else {
            targetSlide = Math.floor(draggedOffset / slideWidth);
        }
    }

    // Calculate final offset
    let finalOffset = targetSlide * slideWidth;

    // Constrain within bounds
    finalOffset = Math.max(0, Math.min(finalOffset, maxOffset));

    // Snap to nearest card boundary
    const cardIndex = Math.round(finalOffset / slideWidth);
    currentOffset = cardIndex * slideWidth;
    currentOffset = Math.max(0, Math.min(currentOffset, maxOffset));

    updateSlider();
});

sliderContainer.addEventListener('touchcancel', () => {
    if (!isDragging) return;
    isDragging = false;

    // Re-enable transition and snap back to current position
    slider.style.transition = 'transform 0.5s ease';
    updateSlider();
});

// Modal Elements (initialized after DOM is ready)
let modal, modalBackdrop, modalClose, modalSubscribeBtn;
let modalTitle, modalTitlePrice, modalTitleValidity, modalExtra, modalPromoBadge;

// Initialize modal elements
function initModalElements() {
    modal = document.getElementById('subscriptionModal');
    modalBackdrop = document.getElementById('modalBackdrop');
    modalClose = document.getElementById('modalClose');
    modalSubscribeBtn = document.getElementById('modalSubscribeBtn');
    modalTitle = document.getElementById('modalTitle');
    modalTitlePrice = document.querySelector('.modal-title-price');
    modalTitleValidity = document.querySelector('.modal-title-validity');
    modalExtra = document.getElementById('modalExtra');
    modalPromoBadge = document.getElementById('modalPromoBadge');

    // Close modal on backdrop click
    modalBackdrop.addEventListener('click', closeModal);

    // Close modal on close button click
    modalClose.addEventListener('click', closeModal);

    // Expandable sections functionality (accordion behavior)
    document.querySelectorAll('.expandable-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.closest('.expandable-section');
            const isCurrentlyActive = section.classList.contains('active');

            // Close all expandable sections
            document.querySelectorAll('.expandable-section').forEach(s => {
                s.classList.remove('active');
            });

            // Toggle current section (only if it wasn't active)
            if (!isCurrentlyActive) {
                section.classList.add('active');
            }
        });
    });

    // Subscribe button in modal
    modalSubscribeBtn.addEventListener('click', () => {
        alert('Terima kasih! Berlangganan berhasil diproses.');
        closeModal();
    });
}

// Open modal function
function openModal(cardData) {
    // Update modal content
    modalTitle.textContent = cardData.name;
    modalTitlePrice.textContent = cardData.finalPrice;
    modalTitleValidity.textContent = cardData.duration;
    modalExtra.textContent = cardData.extra;

    // Show/hide promo badge
    if (cardData.promo) {
        modalPromoBadge.style.display = 'inline-block';
        modalPromoBadge.textContent = cardData.promo;
    } else {
        modalPromoBadge.style.display = 'none';
    }

    // Reset expandable sections
    document.querySelectorAll('.expandable-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Reset expandable sections
    document.querySelectorAll('.expandable-section').forEach(section => {
        section.classList.remove('active');
    });
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// Event delegation for package card clicks
slider.addEventListener('click', (e) => {
    const card = e.target.closest('.package-card');
    if (card) {
        const cardIndex = Array.from(slider.children).indexOf(card);
        const categoryData = getCurrentCategory();
        const cardGroup = categoryData.cards.find(c => c.chipId === currentChip);
        const currentCards = cardGroup.items;
        const cardData = currentCards[cardIndex];

        if (cardData) {
            openModal(cardData);
        }
    }
});

// Initialize
window.addEventListener('resize', handleResize);
handleResize();

// Initialize modal elements after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initModalElements();
        // Initial render
        renderTabs();
        updateBackground(currentCategoryIndex);
        renderSubCategory(currentCategoryIndex);
        renderCards(currentCategoryIndex, currentChip);
    });
} else {
    initModalElements();
    // Initial render
    renderTabs();
    updateBackground(currentCategoryIndex);
    renderSubCategory(currentCategoryIndex);
    renderCards(currentCategoryIndex, currentChip);
}
