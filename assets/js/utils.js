const utils = {
    async getIpAddress() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch {
            return 'Unknown';
        }
    },

    showLoading(button) {
        const text = button.querySelector('.btn-text');
        const spinner = button.querySelector('.loading-spinner');
        text.classList.add('hidden');
        spinner.classList.remove('hidden');
        button.disabled = true;
    },

    hideLoading(button) {
        const text = button.querySelector('.btn-text');
        const spinner = button.querySelector('.loading-spinner');
        text.classList.remove('hidden');
        spinner.classList.add('hidden');
        button.disabled = false;
    },

    showRedirectOverlay(message) {
        const overlay = document.getElementById('redirectOverlay');
        const messageEl = document.getElementById('redirectMessage');
        messageEl.textContent = message;
        overlay.classList.remove('hidden');
    },

    hideRedirectOverlay() {
        const overlay = document.getElementById('redirectOverlay');
        overlay.classList.add('hidden');
    },

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};