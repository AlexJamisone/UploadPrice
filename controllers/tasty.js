import axios from 'axios';

export async function getDataTasty(url) {
    url = url;
    try {
        const response = await axios.get(url);
        const priceString = await response.data.data.price;
        const priceNumber = parseInt(priceString, 10);
        return priceNumber;

    }
    catch(error) {
        console.log(error)
    }
}