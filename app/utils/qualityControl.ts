type Item = {name: string, sellIn: number, quality: number}

const MAX_QUALITY = 50
const MIN_QUALITY = 0
const isLessThanMaximum = quality => quality < MAX_QUALITY
const isGreaterThanMinimum = quality => quality > MIN_QUALITY

export const increaseQuality = quality => isLessThanMaximum(quality) ? quality + 1 : quality
export const decreaseQuality = quality => isGreaterThanMinimum(quality) ? quality - 1 :  quality 


 export const updateQualityItem = (item: Item) => {
    item.quality = decreaseQuality(item.quality);
    item.quality = item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality
    
    return item
}

export const decreaseQualityBy = (item: Item, number: number) => {
    return item.quality -= number
}
export const increaseQualityBy = (item: Item, number: number) => {
    return item.quality += number
}
export const decreaseSellInByOne = (item: Item) => {
    return item.sellIn -= 1
}
