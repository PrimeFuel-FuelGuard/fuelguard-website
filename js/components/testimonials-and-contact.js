import { i18n } from '../i18n.js';

export function initializeTestimonialsSection(root = document) {
    const section = root.querySelector('[data-testimonials-section]');
    if (!section || section.dataset.testimonialsInitialized === 'true') return;

    const grid = section.querySelector('[data-testimonials-grid]');
    if (!grid) return;

    function renderCards() {
        const testimonials = i18n.getTranslationValue('testimonials.cards');
        if (!Array.isArray(testimonials)) return;

        grid.innerHTML = '';
        testimonials.forEach((item, index) => {
            const initials = item.author ? item.author.split(' ').map(n => n[0]).slice(0, 2).join('') : 'FG';
            const card = document.createElement('article');
            card.className = 'testimonial-card liquid-glass liquid-glass--dark';
            card.innerHTML = `
                <div class="testimonial-card__quote-wrap">
                    <svg class="testimonial-card__quote-icon" viewBox="0 0 24 24" fill="#38bdf8" aria-hidden="true">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p class="testimonial-card__quote">"${item.quote}"</p>
                </div>
                <div class="testimonial-card__author-info">
                    <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(2, 132, 199, 0.25); border: 2px solid #38bdf8; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #38bdf8; font-size: 1.1rem; flex-shrink: 0;">
                        ${initials}
                    </div>
                    <div class="testimonial-card__details">
                        <strong class="testimonial-card__name">${item.author}</strong>
                        <span class="testimonial-card__role">${item.role}</span>
                        <span class="testimonial-card__company">${item.company}</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    renderCards();
    i18n.subscribe(renderCards);
    section.dataset.testimonialsInitialized = 'true';
}

export function initializeContactSection(root = document) {
    const section = root.querySelector('[data-contact-section]');
    if (!section || section.dataset.contactInitialized === 'true') return;

    const form = section.querySelector('[data-contact-form]');
    const feedback = section.querySelector('[data-contact-feedback]');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = form.querySelector('[name="name"]');
        const emailInput = form.querySelector('[name="email"]');
        const companyInput = form.querySelector('[name="company"]');
        const messageInput = form.querySelector('[name="message"]');

        const name = nameInput?.value.trim() || '';
        const email = emailInput?.value.trim() || '';
        const company = companyInput?.value.trim() || '';
        const message = messageInput?.value.trim() || '';

        // Validate required fields (US-04: Escenario 2)
        if (!name || !email || !company || !message) {
            if (feedback) {
                feedback.className = 'contact-form__feedback contact-form__feedback--error';
                feedback.textContent = i18n.getTranslationValue('contact.form.errorMessage') || 'Por favor completa todos los campos requeridos.';
                feedback.focus();
            }
            return;
        }

        // Basic email check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            if (feedback) {
                feedback.className = 'contact-form__feedback contact-form__feedback--error';
                feedback.textContent = 'Por favor ingresa un correo electrónico corporativo válido.';
                feedback.focus();
            }
            return;
        }

        // Submit successful (US-04: Escenario 1 & 3)
        if (feedback) {
            feedback.className = 'contact-form__feedback contact-form__feedback--success';
            feedback.innerHTML = `<strong>${i18n.getTranslationValue('contact.form.successTitle') || '¡Mensaje Enviado con Éxito!'}</strong><br />${i18n.getTranslationValue('contact.form.successMessage') || 'Gracias por tu interés en FuelGuard.'}`;
        }

        form.reset();
    });

    section.dataset.contactInitialized = 'true';
}
