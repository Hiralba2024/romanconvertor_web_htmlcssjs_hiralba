const input = document.getElementById('number');
const output = document.getElementById('roman');
const convert = document.getElementById('convert-btn');

const numeral = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
];


convert.addEventListener("click", () => {
    let value = parseInt(input.value.trim(), 10);

    if(isNaN(value)){
        alert("please enter valid input");
    } 
    else if (value <= 0){
        alert("please enter a number greater than zero");
    }
    else if (value > 4999) { 
        alert("Please enter a number less than or equal to 4999");
    }
    else {
        let result = '';

        for ( const [roman, number] of numeral){
            while(value >= number){
                result += roman;
                value -= number;
            }
        }
        output.innerText = result;
    }
})