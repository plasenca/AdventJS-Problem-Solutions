
/**
 * Function to get how many hours people ar going
 * to work.
 * @param {Number} year Year 
 * @param {Array<String>} holidays Holidays List 
 * @returns 
 */
function countHours(year, holidays) {

    let hourForWork = 0

    for (let holiday of holidays){
        
        let valuesOfHoliday = holiday.split("/")
        
        let day = Number.parseInt(valuesOfHoliday[1]);
        let month = Number.parseInt(valuesOfHoliday[0]);

        let dateHoliday = new Date(year, month-1, day);

        let dayValue = dateHoliday.getDay();
        console.log(`Dia de la Semana: ${dayValue}`);
        
        if ( 1<= dayValue && dayValue <= 5){
            hourForWork = hourForWork + 2;
            console.log(`Horas de Trabajo: ${hourForWork}`);
        }
    }

    return hourForWork;
}

let year = 2022;
const holidays = ['01/06', '04/01', '12/25']

console.log(countHours(year, holidays));

// Domingo 0
// Lunes 1
// Martes 2
// Miercoles 3
// Jueves 4
// Viernes 5
// Sábado 6