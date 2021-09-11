import { itemTypeEnum } from "./enum/itemType.enum";
import { updateAgedBrieItem } from "./items/agedBrie";
import { updateBackStagePassItem } from "./items/backstagePasses";
import { updateNormalItem } from "./items/normalItem";
import { updateForSulfurusItem } from "./items/Sulfurus";
import { updateConjuredQuality } from "./items/conjured";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    // looping over all the items
    this.items.forEach(item => {
      // trigger function based on the item name
      switch (item.name) {
        case itemTypeEnum.AGED_BRIE: {
          updateAgedBrieItem(item);
          break;
        }
        case itemTypeEnum.BACKSTAGE_PASSES: {
          updateBackStagePassItem(item);
          break;
        }
        case itemTypeEnum.SULFURAS: {
          updateForSulfurusItem(item);
          break;
        }
        case itemTypeEnum.CONJURED: {
          updateConjuredQuality(item);
          break;
        }
        default: {
          updateNormalItem(item);
        }
      }
    });

    return this.items;
  }
}
