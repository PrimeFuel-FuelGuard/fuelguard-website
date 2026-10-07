import { i18n } from '../i18n.js';
import { initializeAboutAmbientSound } from './about-ambient-sound.js';

const MEMBERS = [
    { id: 1, firstName: 'Diego', lastName: 'Campoblanco', initials: 'DC', roleKey: 'teamMembers.role', subRole: 'Lead Architect & IoT • u202414313', badge: './assets/logos/upc.png' },
    { id: 2, firstName: 'Alan', lastName: 'Mamani', initials: 'AM', roleKey: 'teamMembers.role', subRole: 'Full-Stack & Telemetría • u20241e299', badge: './assets/logos/upc.png' },
    { id: 3, firstName: 'Katherine', lastName: 'Mejia', initials: 'KM', roleKey: 'teamMembers.role', subRole: 'Frontend & Lean UX • u20221a118', badge: './assets/logos/upc.png' },
    { id: 4, firstName: 'Juan Carlos', lastName: 'Pastor', initials: 'JP', roleKey: 'teamMembers.role', subRole: 'Backend & Cloud Infra • u202217288', badge: './assets/logos/upc.png' },
    { id: 5, firstName: 'Tomás', lastName: 'Paredes', initials: 'TP', roleKey: 'teamMembers.role', subRole: 'DevOps & Seguridad • u202416552', badge: './assets/logos/upc.png' },
    { id: 6, firstName: 'Victor', lastName: 'García', initials: 'VG', roleKey: 'teamMembers.role', subRole: 'QA & Validación • u202012001', badge: './assets/logos/upc.png' }
];

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function easeOutCubic(value) {
    return 1 - Math.pow(1 - value, 3);
}

function attachScrollTextReveal(textElement) {
    if (!textElement || textElement.dataset.scrollTextRevealInitialized === 'true') return null;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let words = [];
    let ticking = false;

    function setWordState(word, reveal) {
        const eased = easeOutCubic(reveal);
        const alpha = 0.18 + eased * 0.82;
        const y = (1 - eased) * 0.45;
        const blur = (1 - eased) * 0.18;

        word.style.setProperty('--word-alpha', alpha.toFixed(3));
        word.style.setProperty('--word-y', `${y.toFixed(3)}em`);
        word.style.setProperty('--word-blur', `${blur.toFixed(3)}em`);
    }

    function revealAll() {
        words.forEach((word) => setWordState(word, 1));
    }

    function buildWords() {
        const text = textElement.textContent.replace(/\s+/g, ' ').trim();
        textElement.innerHTML = '';
        words = [];

        text.split(/(\s+)/).forEach((token) => {
            if (!token) return;

            if (/^\s+$/.test(token)) {
                textElement.appendChild(document.createTextNode(token));
                return;
            }

            const word = document.createElement('span');
            word.className = 'about-presentation__reveal-word';
            word.textContent = token;
            textElement.appendChild(word);
            words.push(word);
        });
    }

    function updateReveal() {
        if (reducedMotion.matches) {
            revealAll();
            ticking = false;
            return;
        }

        const rect = textElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const revealStart = viewportHeight * 1.05;
        const revealDistance = Math.max(viewportHeight * 0.38, rect.height * 1.4);
        const progress = clamp((revealStart - rect.top) / revealDistance, 0, 1);
        const staggerRange = 0.72;
        const softness = 0.2;
        const lastIndex = Math.max(words.length - 1, 1);

        words.forEach((word, index) => {
            const wordStart = (index / lastIndex) * staggerRange;
            const reveal = clamp((progress - wordStart) / softness, 0, 1);
            setWordState(word, reveal);
        });

        ticking = false;
    }

    function requestRevealUpdate() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateReveal);
        }
    }

    function rebuild() {
        buildWords();
        requestRevealUpdate();
    }

    buildWords();
    window.addEventListener('scroll', requestRevealUpdate, { passive: true });
    window.addEventListener('resize', requestRevealUpdate);
    requestRevealUpdate();

    textElement.dataset.scrollTextRevealInitialized = 'true';

    return {
        rebuild,
    };
}

export function initializeTeamMembersPanel(root = document) {
    const section = root.querySelector('[data-team-members-panel]');

    if (!section || section.dataset.teamMembersInitialized === 'true') return;

    initializeAboutAmbientSound();

    const track = section.querySelector('[data-team-slider-track]');
    const viewport = section.querySelector('[data-team-slider-viewport]');
    const progressBar = section.querySelector('[data-team-slider-progress-bar]');

    if (!track || !viewport) return;

    // 1. Build and Inject Card DOM Dynamically
    track.innerHTML = '';
    MEMBERS.forEach((member) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.dataset.teamCard = 'true';

        const roleText = i18n.getTranslationValue(member.roleKey) || 'Group ArcadiaDevs';

        card.innerHTML = `
            <div class="team-card__image-container" style="background: radial-gradient(circle at 50% 35%, #0d2c4c 0%, #030e1a 100%); display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; padding-bottom: 2.5rem;">
                    <div style="width: 105px; height: 105px; border-radius: 50%; background: rgba(2, 132, 199, 0.22); border: 2.5px solid #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 2.4rem; font-weight: 800; color: #ffffff; box-shadow: 0 0 35px rgba(56, 189, 248, 0.4); margin-bottom: 0.9rem;">
                        ${member.initials}
                    </div>
                    <span style="font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #94a3b8; font-weight: 700;">UPC Software</span>
                </div>
                <div class="team-card__overlay"></div>
                <div class="team-card__badge">
                    <img src="${member.badge}" alt="UPC Logo" draggable="false" />
                </div>
                <div class="team-card__info">
                    <h3 class="team-card__name">${member.firstName} ${member.lastName}</h3>
                    <p class="team-card__role" data-team-members-role data-i18n="${member.roleKey}">${roleText}</p>
                    ${member.subRole ? `<p class="team-card__subrole" style="font-size: 0.82rem; color: #38bdf8; margin-top: 0.25rem; font-weight: 600;">${member.subRole}</p>` : ''}
                </div>
            </div>
        `;
        track.appendChild(card);
    });

    // 2. Drag Functionality (Pointer Events)
    let isDragging = false;
    let startX = 0;
    let startTranslate = 0;
    let currentTranslate = 0;

    function getTrackStepSize() {
        const firstCard = track.querySelector('.team-card');
        if (!firstCard) return 0;
        const cardRect = firstCard.getBoundingClientRect();
        const styles = window.getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || 0);
        return cardRect.width + gap;
    }

    function getMaxTranslate() {
        const viewportStyles = window.getComputedStyle(viewport);
        const horizontalPadding =
            parseFloat(viewportStyles.paddingLeft || 0) + parseFloat(viewportStyles.paddingRight || 0);

        return Math.max(0, track.scrollWidth - viewport.clientWidth + horizontalPadding);
    }

    function updateProgressBar(translate) {
        if (!progressBar) return;
        const maxT = getMaxTranslate();
        if (maxT <= 0) {
            progressBar.style.width = '100%';
            return;
        }
        const percentage = clamp((Math.abs(translate) / maxT) * 100, 0, 100);
        progressBar.style.width = `${percentage}%`;
    }

    function setTranslate(value, animated = true) {
        const maxT = getMaxTranslate();
        const clampedVal = clamp(value, -maxT, 0);

        track.style.transition = animated
            ? 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1)'
            : 'none';

        track.style.transform = `translate3d(${clampedVal}px, 0, 0)`;
        track.dataset.translateX = String(clampedVal);
        currentTranslate = clampedVal;

        updateProgressBar(clampedVal);
    }

    function snapToNearest() {
        const step = getTrackStepSize();
        if (step <= 0) return;

        const maxT = getMaxTranslate();
        const current = Math.abs(currentTranslate);
        const snapPoints = [0, maxT];

        for (let point = step; point < maxT; point += step) {
            snapPoints.push(point);
        }

        const nearestPoint = snapPoints.reduce((nearest, point) => {
            return Math.abs(point - current) < Math.abs(nearest - current) ? point : nearest;
        }, 0);

        setTranslate(-nearestPoint, true);
    }

    function handlePointerDown(e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;

        isDragging = true;
        startX = e.clientX;
        startTranslate = Number(track.dataset.translateX || 0);

        track.style.transition = 'none';
        viewport.setPointerCapture(e.pointerId);
    }

    function handlePointerMove(e) {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        setTranslate(startTranslate + deltaX, false);
    }

    function handlePointerUp(e) {
        if (!isDragging) return;
        isDragging = false;

        try {
            viewport.releasePointerCapture(e.pointerId);
        } catch (err) {
            // Safe release capture
        }

        snapToNearest();
    }

    viewport.addEventListener('pointerdown', handlePointerDown);
    viewport.addEventListener('pointermove', handlePointerMove);
    viewport.addEventListener('pointerup', handlePointerUp);
    viewport.addEventListener('pointercancel', handlePointerUp);

    // Initial positioning and sizing
    setTimeout(() => {
        setTranslate(0, false);
    }, 50);

    window.addEventListener('resize', () => {
        const step = getTrackStepSize();
        if (step > 0) {
            const index = Math.round(Math.abs(currentTranslate) / step);
            const targetVal = -index * step;
            setTranslate(targetVal, false);
        } else {
            setTranslate(currentTranslate, false);
        }
    });

    // 3. Presentation Stage & Footer Text Reveal
    const footerTextReveal = attachScrollTextReveal(section.querySelector('[data-scroll-text-reveal]'));

    const videoBtn = section.querySelector('[data-pres-switch="video"]');
    const imageBtn = section.querySelector('[data-pres-switch="image"]');
    const videoEl = section.querySelector('[data-presentation-video]');
    const carouselEl = section.querySelector('[data-presentation-carousel]');
    const slides = section.querySelectorAll('.about-presentation__slide');

    if (slides.length > 0) {
        let activeSlideIdx = 0;
        slides.forEach((slide, idx) => {
            slide.classList.toggle('about-presentation__slide--active', idx === 0);
        });
        setInterval(() => {
            slides[activeSlideIdx].classList.remove('about-presentation__slide--active');
            activeSlideIdx = (activeSlideIdx + 1) % slides.length;
            slides[activeSlideIdx].classList.add('about-presentation__slide--active');
        }, 3000);
    }

    // Subscribe to language switches to force update any active items
    i18n.subscribe(() => {
        footerTextReveal?.rebuild();
    });

    section.dataset.teamMembersInitialized = 'true';
}
