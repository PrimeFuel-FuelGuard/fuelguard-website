export class I18nService {
    constructor() {
        this.currentLang = localStorage.getItem('appLang') || 'en';
        this.translations = null;
        this.subscribers = [];
    }

    async init() {
        await this.loadTranslations(this.currentLang);
        this.applyTranslations();
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`./js/i18n/${lang}.json`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            this.translations = await response.json();
            this.currentLang = lang;
            localStorage.setItem('appLang', lang);
        } catch (error) {
            console.error(`Failed to load translations for ${lang}`, error);
        }
    }

    async setLanguage(lang) {
        if (lang === this.currentLang) return;
        await this.loadTranslations(lang);
        this.applyTranslations();
        this.notifySubscribers();
    }

    toggleLanguage() {
        const nextLang = this.currentLang === 'en' ? 'es' : 'en';
        this.setLanguage(nextLang);
    }

    applyTranslations() {
        if (!this.translations) return;

        document.documentElement.lang = this.currentLang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = this.getTranslationValue(el.getAttribute('data-i18n'));
            if (typeof value === 'string') {
                el.innerHTML = value.replace(/\n/g, '<br />');
            }
        });
}

export const i18n = new I18nService();
