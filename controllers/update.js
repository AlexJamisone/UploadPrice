import axios from 'axios';

import { getDataTasty } from './tasty.js';

export async function updatePrice(id, url) {
    id = id;
    url = url;
    try {
        const tastyPrice = await
            getDataTasty(url)
                .then(price =>{
                    let updatePrice = price;
                    return updatePrice
                })
                .catch(err => {
                    console.log(err)
                });
        const update = await axios({
            method: 'post',
            url: 'https://tp791.quickresto.ru/platform/online/api/update?moduleName=warehouse.nomenclature.dish',
            headers: {
                'Connection': 'keep-alive',
                'Content-Type': 'application/json',
                'Host': 'tp791.quickresto.ru'
            },
            auth: {
                username: 'tp791',
                password: 'zQtnuNo3'
            },
            data: {
                id: id,
                minimalPrice: tastyPrice
            }
        }).then(result =>{
            console.log(result.data.id)
        })
        .catch(err => {
            console.log(err)
        });
    }
    catch(error) {
        console.log(error)
    }
}