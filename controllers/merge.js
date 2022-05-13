import { updatePrice } from './update.js';

import {
    api_link_barista,
    api_link_berry,
    api_link_brazilMoggiana,
    api_link_brazilSerado,
    api_link_brownBlackCandy,
    api_link_colombiaDulima,
    api_link_costaRocaSanRaf,
    api_link_decaf,
    api_link_ethiopiaGigeso,
    api_link_ethiopiaIrgacheff,
    api_link_ethiopiaOromia,
    api_link_floral,
    api_link_gurme,
    api_link_gutemalaFency,
    api_link_houndurasSanMarkos,
    api_link_mexicoCh,
    api_link_mild250gr,
    api_link_natti,
    api_link_venisuela,
    api_link_verona
} from '../api/api-links.js';

export function mergePrice() {
    updatePrice(392, api_link_houndurasSanMarkos)
    updatePrice(393, api_link_mild250gr)
    updatePrice(394, api_link_berry)
    updatePrice(395, api_link_brownBlackCandy)
    updatePrice(396, api_link_brownBlackCandy)
    updatePrice(397, api_link_gutemalaFency)
    updatePrice(398, api_link_mexicoCh)
    updatePrice(399, api_link_brazilMoggiana)
    updatePrice(476, api_link_barista)
    updatePrice(477, api_link_gurme)
    updatePrice(478, api_link_decaf)
    updatePrice(479, api_link_floral)
    updatePrice(481, api_link_colombiaDulima)
    updatePrice(482, api_link_costaRocaSanRaf)
    updatePrice(483, api_link_ethiopiaGigeso)
    updatePrice(484, api_link_ethiopiaIrgacheff)
    updatePrice(487, api_link_verona)
    updatePrice(488, api_link_natti)
    updatePrice(608, api_link_ethiopiaOromia)
    updatePrice(400, api_link_brazilSerado)
    updatePrice(655, api_link_venisuela)
}