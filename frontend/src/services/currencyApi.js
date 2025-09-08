export async function getCurrencyFlags() {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const countries = await res.json();
  
      const currencyMap = {};
      countries.forEach((country) => {
        if (country.currencies) {
          Object.keys(country.currencies).forEach((code) => {
            if (!currencyMap[code]) {
              currencyMap[code] = country.flags.png; 
            }
          });
        }
      });
  
      return currencyMap;
    } catch (err) {
      console.error(err);
      return {};
    }
}