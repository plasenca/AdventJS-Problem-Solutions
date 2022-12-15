const lista = ['cat', 'game', 'socks ']

const wrapping = (gifts) => {

    let giftList = [];

    // Obtener cada regalo
    for (let i = 0; i < gifts.length; i++){

        // Creando Papel para envolver
        let papel = '*';

        // Obtener Regalo
        let gift = gifts[i] ; // "cat " Con espacio
        // console.log(`Palabra Original: ${gift}|`);
        gift = gift.trim(); // "cat" Sin espacio
        // console.log(`Palabra Convertida: ${gift}|`);
        let lengthString = gift.length;

        // Envolver Regalo
        let papelDeRegalo = papel.repeat(lengthString + 2);
        let regalo = `${papelDeRegalo}\n${papel}${gift}${papel}\n${papelDeRegalo}`;

        giftList.push(regalo)

    }

    return giftList;

}


//* Best Performance
const wrapping2 = (gifts) => {

    let giftList = [];
    let papel = '*';

    for (let gift of gifts) {
        gift = gift.trim();

        let lengthString = gift.length;

        // Envolver Regalo
        let papelDeRegalo = papel.repeat(lengthString + 2);
        let regalo = `${papelDeRegalo}\n${papel}${gift}${papel}\n${papelDeRegalo}`;

        giftList.push(regalo)
    } 

    return giftList;

}


console.log(wrapping2(lista));



