import {decreaseSellInByOne, decreaseQualityBy} from '../utils/qualityControl'
export const updateConjuredQuality = (item: {name: string, sellIn: number, quality: number})  => { 
    // decreasing SellIn by 1;
    decreaseSellInByOne(item)
     // if sellin is lessthan 0 decrease quality by 4 (twice as fast as normal items) 
     // else  decrease quality by 2 (twice as fast as normal items);;
    item.quality = item.sellIn < 0 ?  decreaseQualityBy(item, 4) :  decreaseQualityBy(item, 2);
    return;
}