document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertCurrency);
    
    document.getElementById('fromCurrency').disabled = true;
});

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value; // Toujours EUR
    const toCurrency = document.getElementById('toCurrency').value;
    const apiKey = '501b98097412c2804f7e40bc'; // Votre clé API
    
    try {
        // Si la devise cible est BTC, gérer différemment
        if (toCurrency === "BTC") {
            const useFixedRate = confirm("Le BTC n'est pas pris en charge par l'API. Voulez-vous utiliser un taux fixe pour la conversion ?\n\nCliquez sur 'OK' pour Oui, 'Annuler' pour Non");
            
            if (useFixedRate) {
                // Utiliser un taux fixe pour BTC (exemple: 1 EUR = 0.000026 BTC, à ajuster selon les besoins)
                const fixedRate = 0.000026;
                const convertedAmount = (amount * fixedRate).toFixed(8); // Plus de décimales pour BTC
                
                document.getElementById('result').innerHTML = 
                    `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency} (taux fixe)`;
            } else {
                document.getElementById('result').innerHTML = 
                    `Conversion en BTC annulée.`;
            }
            return;
        }
        
        // Pour les autres devises, continuer avec l'API
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
        const data = await response.json();
        
        if (data.result === 'success') {
            const exchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            
            document.getElementById('result').innerHTML = 
                `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            document.getElementById('result').innerHTML = 
                `Erreur: ${data.error}`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = 
            `Erreur lors de la connexion à l'API: ${error}`;
    }
}
