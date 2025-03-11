# Coinverter 💱

Un convertisseur de devises en JavaScript utilisant l'API [ExchangeRate-API](https://www.exchangerate-api.com/).  
Ce projet permet de convertir facilement des montants entre différentes monnaies avec des taux de change actualisés.

## ✨ Fonctionnalités  
- ✅ Conversion rapide entre plus de 160 devises 📈  
- ✅ Récupération des taux en temps réel via ExchangeRate-API 🌍  
- ✅ Interface simple et intuitive (ou API/CLI selon l'implémentation) 💻  
- ✅ Code optimisé et léger en JavaScript ⚡  

## 🚀 Technologies utilisées  
- **JavaScript** (Vanilla JS ou Node.js)  
- **Fetch API** pour récupérer les taux de change  
- **HTML/CSS** pour l'interface utilisateur (si applicable)  

## 📌 Installation et utilisation  
1. Clonez le repo :  
   ```sh
   git clone https://github.com/votre-utilisateur/Coinverter.git
   cd Coinverter
    ```
Ajoutez votre clé API ExchangeRate dans le fichier de configuration.

Exécutez le code :

```js
fetch("https://v6.exchangerate-api.com/v6/VOTRE_CLE_API/latest/USD")
  .then(response => response.json())
  .then(data => console.log(data.conversion_rates.EUR)); // Exemple : Conversion USD -> EUR
```
