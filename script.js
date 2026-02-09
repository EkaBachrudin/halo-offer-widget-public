// Data structure for categories, chips, and cards
const categoryData = {
    video: {
        chips: [
            { id: 'netflix', label: 'Netflix', color: '#E50914', iconFile: 'netflix.svg' },
            { id: 'hotstar', label: 'Disney+ Hotstar', color: '#0D1E45', iconFile: 'disney_hotstar.svg' },
            { id: 'vidio', label: 'Vidio', color: '#ED0226', iconFile: 'video.svg' },
            { id: 'wetv', label: 'WeTV', color: '#FF9500', iconFile: 'video.svg' },
            { id: 'prime', label: 'Prime Video', color: '#00A8E1', iconFile: 'prime_video.svg' }
        ],
        cards: {
            netflix: [
                { name: 'Netflix Mobile', duration: '31 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp213.000', finalPrice: 'Rp186.000', promo: 'Promo' },
                { name: 'Netflix Basic', duration: '31 Hari', extra: 'Extra 4 GB', originalPrice: 'Rp256.000', finalPrice: 'Rp226.000', promo: 'Promo' },
                { name: 'Netflix Standard', duration: '62 Hari', extra: 'Extra 6 GB', originalPrice: 'Rp450.000', finalPrice: 'Rp396.000', promo: 'Promo' },
                { name: 'Netflix Premium', duration: '31 Hari', extra: 'Extra 8 GB', originalPrice: 'Rp360.000', finalPrice: 'Rp360.000', promo: null },
                { name: 'Netflix Mobile', duration: '93 Hari', extra: 'Extra 6 GB', originalPrice: 'Rp639.000', finalPrice: 'Rp546.000', promo: 'Best Deal' }
            ],
            hotstar: [
                { name: 'Hotstar Mobile', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp35.000', finalPrice: 'Rp30.000', promo: 'Promo' },
                { name: 'Hotstar Premium', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp60.000', finalPrice: 'Rp55.000', promo: 'Promo' },
                { name: 'Hotstar Yearly', duration: '365 Hari', extra: 'Extra 10 GB', originalPrice: 'Rp420.000', finalPrice: 'Rp360.000', promo: 'Best Deal' },
                { name: 'Hotstar Mobile 6M', duration: '180 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp210.000', finalPrice: 'Rp180.000', promo: null }
            ],
            vidio: [
                { name: 'Vidio Platinum', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'Vidio Platinum 3M', duration: '90 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp90.000', finalPrice: 'Rp75.000', promo: 'Promo' },
                { name: 'Vidio Yearly', duration: '365 Hari', extra: 'Extra 15 GB', originalPrice: 'Rp300.000', finalPrice: 'Rp250.000', promo: 'Best Deal' }
            ],
            wetv: [
                { name: 'WeTV VIP', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp35.000', finalPrice: 'Rp30.000', promo: 'Promo' },
                { name: 'WeTV VIP 3M', duration: '90 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp105.000', finalPrice: 'Rp90.000', promo: null },
                { name: 'WeTV Yearly', duration: '365 Hari', extra: 'Extra 8 GB', originalPrice: 'Rp350.000', finalPrice: 'Rp300.000', promo: 'Best Deal' }
            ],
            prime: [
                { name: 'Prime Video Monthly', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp60.000', finalPrice: 'Rp55.000', promo: 'Promo' },
                { name: 'Prime Video 3M', duration: '90 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp180.000', finalPrice: 'Rp150.000', promo: null },
                { name: 'Prime Yearly', duration: '365 Hari', extra: 'Extra 15 GB', originalPrice: 'Rp600.000', finalPrice: 'Rp500.000', promo: 'Best Deal' }
            ]
        }
    },
    games: {
        chips: [
            { id: 'mobile-legends', label: 'Mobile Legends', color: '#D3242A', iconFile: 'mobile_lagend.svg' },
            { id: 'pubg', label: 'PUBG Mobile', color: '#F7A607', iconFile: 'garena.svg' },
            { id: 'freefire', label: 'Free Fire', color: '#FF6B00', iconFile: 'free_fire.svg' },
            { id: 'genshin', label: 'Genshin Impact', color: '#00A8E1', iconFile: 'roblox.svg' }
        ],
        cards: {
            'mobile-legends': [
                { name: 'Weekly Pass', duration: '7 Hari', extra: 'Extra 500 MB', originalPrice: 'Rp28.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'Monthly Pass', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp150.000', finalPrice: 'Rp130.000', promo: 'Promo' },
                { name: 'Twilight Pass', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp280.000', finalPrice: 'Rp250.000', promo: null },
                { name: 'Starlight Member', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp100.000', finalPrice: 'Rp90.000', promo: 'Best Deal' }
            ],
            pubg: [
                { name: 'UC Pack 60', duration: '7 Hari', extra: 'Extra 500 MB', originalPrice: 'Rp15.000', finalPrice: 'Rp12.000', promo: 'Promo' },
                { name: 'UC Pack 325', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp75.000', finalPrice: 'Rp65.000', promo: null },
                { name: 'Royale Pass', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp150.000', finalPrice: 'Rp130.000', promo: 'Best Deal' }
            ],
            freefire: [
                { name: 'FF Diamond 70', duration: '7 Hari', extra: 'Extra 300 MB', originalPrice: 'Rp10.000', finalPrice: 'Rp8.500', promo: 'Promo' },
                { name: 'FF Diamond 140', duration: '15 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp20.000', finalPrice: 'Rp17.000', promo: null },
                { name: 'Membership Mingguan', duration: '7 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Best Deal' }
            ],
            genshin: [
                { name: 'Welkin Moon', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp79.000', finalPrice: 'Rp70.000', promo: 'Promo' },
                { name: 'Genesis Crystal', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp159.000', finalPrice: 'Rp140.000', promo: null },
                { name: 'Blessing Bundle', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp300.000', finalPrice: 'Rp260.000', promo: 'Best Deal' }
            ]
        }
    },
    music: {
        chips: [
            { id: 'spotify', label: 'Spotify', color: '#1DB954', iconFile: 'spotify.svg' },
            { id: 'joox', label: 'JOOX', color: '#FF5200', iconFile: 'langit_musik.svg' },
            { id: 'apple-music', label: 'Apple Music', color: '#FA243C', iconFile: 'youtube.svg' },
            { id: 'youtube-music', label: 'YouTube Music', color: '#FF0000', iconFile: 'smule.svg' }
        ],
        cards: {
            spotify: [
                { name: 'Spotify Individual', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp55.000', finalPrice: 'Rp50.000', promo: 'Promo' },
                { name: 'Spotify Duo', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp85.000', finalPrice: 'Rp75.000', promo: null },
                { name: 'Spotify Family', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp140.000', finalPrice: 'Rp120.000', promo: 'Best Deal' }
            ],
            joox: [
                { name: 'JOOX VIP', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'JOOX VIP 3M', duration: '90 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp90.000', finalPrice: 'Rp75.000', promo: 'Best Deal' }
            ],
            'apple-music': [
                { name: 'Apple Music Individual', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp65.000', finalPrice: 'Rp60.000', promo: 'Promo' },
                { name: 'Apple Music Family', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp105.000', finalPrice: 'Rp95.000', promo: 'Best Deal' }
            ],
            'youtube-music': [
                { name: 'YT Music Individual', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp55.000', finalPrice: 'Rp50.000', promo: 'Promo' },
                { name: 'YT Music Family', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp95.000', finalPrice: 'Rp85.000', promo: 'Best Deal' }
            ]
        }
    },
    others: {
        chips: [
            { id: 'canva', label: 'Canva', color: '#00C4CC', iconFile: 'gpt.svg' },
            { id: 'linkedin', label: 'LinkedIn Learning', color: '#0077B5', iconFile: 'linkedin.svg' },
            { id: 'adobe', label: 'Adobe CC', color: '#FF0000', iconFile: 'zoom.svg' },
            { id: 'norton', label: 'Norton', color: '#FFEB3B', iconFile: 'norton.svg' },
            { id: 'kompas', label: 'Kompas', color: '#FF5722', iconFile: 'kompas.svg' }
        ],
        cards: {
            canva: [
                { name: 'Canva Pro', duration: '30 Hari', extra: 'Extra 2 GB', originalPrice: 'Rp60.000', finalPrice: 'Rp50.000', promo: 'Promo' },
                { name: 'Canva Pro 6M', duration: '180 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp360.000', finalPrice: 'Rp300.000', promo: 'Best Deal' }
            ],
            linkedin: [
                { name: 'LinkedIn Learning', duration: '30 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp200.000', finalPrice: 'Rp180.000', promo: 'Promo' },
                { name: 'LinkedIn Annual', duration: '365 Hari', extra: 'Extra 10 GB', originalPrice: 'Rp2.400.000', finalPrice: 'Rp2.000.000', promo: 'Best Deal' }
            ],
            adobe: [
                { name: 'Adobe CC Single', duration: '30 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp350.000', finalPrice: 'Rp320.000', promo: 'Promo' },
                { name: 'Adobe CC Full', duration: '30 Hari', extra: 'Extra 10 GB', originalPrice: 'Rp600.000', finalPrice: 'Rp550.000', promo: 'Best Deal' }
            ],
            norton: [
                { name: 'Norton Basic', duration: '30 Hari', extra: 'Extra 1 GB', originalPrice: 'Rp50.000', finalPrice: 'Rp45.000', promo: 'Promo' },
                { name: 'Norton Premium', duration: '365 Hari', extra: 'Extra 5 GB', originalPrice: 'Rp500.000', finalPrice: 'Rp450.000', promo: 'Best Deal' }
            ],
            kompas: [
                { name: 'Kompas Digital', duration: '30 Hari', extra: 'Extra 500 MB', originalPrice: 'Rp30.000', finalPrice: 'Rp25.000', promo: 'Promo' },
                { name: 'Kompas Yearly', duration: '365 Hari', extra: 'Extra 3 GB', originalPrice: 'Rp300.000', finalPrice: 'Rp250.000', promo: 'Best Deal' }
            ]
        }
    }
};

// Slider Configuration
const sliderConfig = {
    cardsPerView: 3,
    cardWidth: 280,
    gap: 24
};

// Current state
let currentCategory = 'video';
let currentChip = 'netflix';
let currentOffset = 0;
let totalCards = 0;
let maxOffset = 0;

// Elements
const slider = document.getElementById('cardsSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagination = document.getElementById('pagination');
const tabs = document.querySelectorAll('.tab-item');
let filterChipsContainer;

// Calculate slide width
const slideWidth = sliderConfig.cardWidth + sliderConfig.gap;

// Render chips based on selected category
function renderSubCategory(category) {
    const data = categoryData[category];
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
            renderCards(currentCategory, currentChip);
        });

        chipsContainer.appendChild(chip);
    });

    // Set first chip as active
    currentChip = data.chips[0]?.id || '';
}

// Render cards based on selected category and chip
function renderCards(category, chip) {
    const data = categoryData[category];
    if (!data || !data.cards[chip]) return;

    const cards = data.cards[chip];
    totalCards = cards.length;

    // Update max offset
    maxOffset = slideWidth * Math.max(0, totalCards - sliderConfig.cardsPerView);

    slider.innerHTML = '';

    cards.forEach(cardData => {
        const card = document.createElement('div');
        card.className = 'package-card';

        const promoHtml = cardData.promo ? `
            <div class="promo-ribbon">
                <div class="ribbon-content">${cardData.promo}</div>
                <div class="ribbon-tail"></div>
            </div>
        ` : '';

        const originalPriceHtml = cardData.originalPrice !== cardData.finalPrice
            ? `<span class="price-original">${cardData.originalPrice}</span>`
            : '';

        card.innerHTML = `
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
    const currentSlide = Math.round(currentOffset / (slideWidth * sliderConfig.cardsPerView));
    const dots = pagination.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
        dot.style.width = index === currentSlide ? '32px' : '8px';
    });
}

// Go to specific slide
function goToSlide(index) {
    currentOffset = index * slideWidth * sliderConfig.cardsPerView;
    currentOffset = Math.min(currentOffset, maxOffset);
    updateSlider();
}

// Previous button
prevBtn.addEventListener('click', () => {
    currentOffset = Math.max(0, currentOffset - slideWidth * sliderConfig.cardsPerView);
    updateSlider();
});

// Next button
nextBtn.addEventListener('click', () => {
    currentOffset = Math.min(maxOffset, currentOffset + slideWidth * sliderConfig.cardsPerView);
    updateSlider();
});

// Update background image based on category
function updateBackground(category) {
    const widgetBg = document.querySelector('.widget-bg');
    // Remove all bg- classes
    widgetBg.classList.remove('bg-video', 'bg-games', 'bg-music', 'bg-others');
    // Add the appropriate bg- class
    widgetBg.classList.add(`bg-${category}`);
}

// Tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Reset slider position
        currentOffset = 0;

        // Update active state based on selected tab
        const tabName = tab.dataset.tab;
        currentCategory = tabName;

        // Update background image
        updateBackground(tabName);

        // Render new chips and cards
        renderSubCategory(tabName);
        renderCards(tabName, currentChip);
    });
});

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
    maxOffset = slideWidth * Math.max(0, totalCards - sliderConfig.cardsPerView);

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

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;
const sliderContainer = document.querySelector('.cards-container');

sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && !nextBtn.disabled) {
            nextBtn.click();
        } else if (diff < 0 && !prevBtn.disabled) {
            prevBtn.click();
        }
    }
}

// Modal Elements (initialized after DOM is ready)
let modal, modalBackdrop, modalClose, modalSubscribeBtn;
let modalTitle, modalPrice, modalValidity, modalExtra, modalPromoBadge;

// Initialize modal elements
function initModalElements() {
    modal = document.getElementById('subscriptionModal');
    modalBackdrop = document.getElementById('modalBackdrop');
    modalClose = document.getElementById('modalClose');
    modalSubscribeBtn = document.getElementById('modalSubscribeBtn');
    modalTitle = document.getElementById('modalTitle');
    modalPrice = document.getElementById('modalPrice');
    modalValidity = document.getElementById('modalValidity');
    modalExtra = document.getElementById('modalExtra');
    modalPromoBadge = document.getElementById('modalPromoBadge');

    // Close modal on backdrop click
    modalBackdrop.addEventListener('click', closeModal);

    // Close modal on close button click
    modalClose.addEventListener('click', closeModal);

    // Expandable sections functionality
    document.querySelectorAll('.expandable-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.closest('.expandable-section');
            section.classList.toggle('active');
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
    modalPrice.textContent = cardData.finalPrice;
    modalValidity.textContent = cardData.duration;
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
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// Event delegation for subscribe buttons
slider.addEventListener('click', (e) => {
    if (e.target.classList.contains('subscribe-trigger')) {
        const card = e.target.closest('.package-card');
        const cardIndex = Array.from(slider.children).indexOf(card);
        const chipData = categoryData[currentCategory];
        const currentCards = chipData.cards[currentChip];
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
    document.addEventListener('DOMContentLoaded', initModalElements);
} else {
    initModalElements();
}

// Initial render
updateBackground(currentCategory);
renderSubCategory(currentCategory);
renderCards(currentCategory, currentChip);
