import { decreaseQualityBy, increaseQuality, decreaseSellInByOne, increaseQualityBy } from "../utils/qualityControl";
type Item = {name: string, sellIn: number, quality: number}

export const updateBackStagePassItem = (item: Item)=>{
    item.quality = item.sellIn === 0 ? 0 : increaseQualityForBackStagePasses(item);  
    // decrease sellin by 1  
    decreaseSellInByOne(item);
    return item;
}

export const increaseQualityForBackStagePasses = (item: Item): number => {
    // increase quality by 1 for each scenerio
    let quality = increaseQuality(item.quality);
    // increase quality if sellin is less than 11 
    quality = item.sellIn < 11 ? increaseQuality(quality) : quality;
    //increase quality if sellin is less than 6
    quality = item.sellIn < 6 ? increaseQuality(quality) : quality;

    return quality
}
