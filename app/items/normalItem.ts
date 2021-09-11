import { decreaseQuality, decreaseSellInByOne } from "../utils/qualityControl";

export const updateNormalItem = (item)=>{
    item.quality = decreaseQuality(item.quality);
    // if sellin is lessthan 0 decrease quality twice
    item.quality = item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;
    item.sellIn = decreaseSellInByOne(item);
    return item
}