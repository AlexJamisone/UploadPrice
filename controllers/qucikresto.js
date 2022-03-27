import axios from 'axios';

export const qucikData = (req, res, next) => {
    async function getDataQuick() {
        try {
            const api_url = 'https://tp791.quickresto.ru/platform/online/api/list?moduleName=warehouse.nomenclature.dish'

            const response = await axios.get(api_url, {
                headers: {
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/json',
                },
                auth: {
                    username: 'tp791',
                    password: 'zQtnuNo3'
                }
            })
            const updatePrice = 689;
            console.log(response.data.slice(-1).map(data => data.price))
            let oldPrice = response.data.slice(-1).map(data => data.price)
            let updPrice = oldPrice[0] = updatePrice;
            console.log( updPrice)
        }
        catch(error) {
            console.log(error)
        }
    }
    getDataQuick()
    next()
};

export default qucikData;