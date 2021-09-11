
import {increaseQuality, decreaseSellInByOne} from '../utils/qualityControl'
export const updateAgedBrieItem = (item: {name: string, sellIn: number, quality: number})=>{
    // increase quality by one according to the Max and Min values of quality 
    item.quality = increaseQuality(item.quality);
    // increase quality of sellin is less than 0 else return the sam qualitys
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
    // decreasing sellin
    decreaseSellInByOne(item)
    return item
}