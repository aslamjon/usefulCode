let cash = "50000000";

cash = new Intl.NumberFormat('fr-FR', {currency: 'UZS'}).format(cash);

console.log(cash); 