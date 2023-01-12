module.exports = function toReadable (number) {
    let stringNumber = String(number);
    let result = '';
    let items = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number === 0) {
        result = 'zero';
    } else if (number > 0 && number < 20) {
        result = items[number];
    } else if (number >= 20 && number < 100) {
        result = `${tens[Number(stringNumber[0])]} ${items[Number(stringNumber[1])]}`;
    } else { 
        result = ((Number(stringNumber[1]) < 2) ? (`${items[Number(stringNumber[0])]} hundred ${items[Number(stringNumber.slice(1))]}`) : (`${items[Number(stringNumber[0])]} hundred ${tens[Number(stringNumber[1])]} ${items[Number(stringNumber[2])]}`));
    }
    
    return result.trim();
}
