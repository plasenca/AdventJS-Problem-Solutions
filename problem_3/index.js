
/**
 * 
 * @param {Array<String>} packOfGifts 
 * @param {Array<String>} reindeers 
 * @returns {Number} Number of 
 */
function distributeGifts(packOfGifts, reindeers) {

    if (!packOfGifts.length || !reindeers.length){
        return 0
    }

    let weightPack = 0;

    for (const gift of packOfGifts) {
        const lengthGift = gift.length;
        weightPack = weightPack + lengthGift;
    }

    let weightSuported = 0;

    for (const reinder of reindeers) {
        const lengthReinder = reinder.length * 2;
        weightSuported = weightSuported + lengthReinder;
    }

    return Math.floor(weightSuported / weightPack);
}


const packOfGifts = ["book", "doll", "balll"] // 4 + 4 + 4 = 12
const reindeers = ["dasher", "dancer"] // (2 * 6) + (2 * 6) = 24

distributeGifts(packOfGifts, reindeers)