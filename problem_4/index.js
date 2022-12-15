/**
 * 
 * @param {Array<Object>} boxes 
 * @returns {bool}
 */
function fitsInOneBox(boxes) {

    boxes.sort( (a, b) => {
        return a.l - b.l;
    } )

    boxes.sort((a, b) => {
        return a.w - b.w;
    } )

    boxes.sort((a, b) => {
        return a.h - b.h;
    } )

    console.log(boxes);
}



const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 3, h: 3 },
    { l: 1, w: 2, h: 4 },
]

fitsInOneBox(boxes);