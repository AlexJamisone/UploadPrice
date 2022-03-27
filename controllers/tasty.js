import axios from 'axios';

export const tastyData = (req, res, next) => {
    async function getDataTasty() {
        try {
            const api_url = 'https://wrapapi.com/use/alexjamison/homeit/priceCoffee/latest?wrapAPIKey=HCTPpA928xiR2xIr0ON2HkyaS8gKg4Lz'

            const response = await axios.get(api_url)
            const priceString = response.data.data.output;
            const priceNumber = parseInt(priceString, 10)
            console.log(priceNumber)
        }
        catch(error) {
            console.log(error)
        }
    }
    getDataTasty();
};

export default tastyData;