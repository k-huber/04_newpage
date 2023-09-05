document.addEventListener('DOMContentLoaded', function () {

    function calcbmi(valWeight, valHeight) {
        const expoHeight = Math.pow(valHeight, 2);
        return valWeight / expoHeight;
    }

    function getVal() {
        const valWeight = document.getElementById('weight').value;
        const valHeight = document.getElementById('height').value;

        console.log(valHeight);

        if (!isNaN(valWeight) && !isNaN(valHeight)) {
            const bmi = calcbmi(valWeight, valHeight);
            console.log('BMI:', bmi);
            //const result = document.getElementById('result');
            //result.innerHTML = 'BMI: ' + bmi.toFixed(2);
        } else {
            console.log('Die Eingabe ist nicht korrekt. Bitte geben Sie ihr Gewicht in kg und Größe in cm an.');
        }
    }

    const submit = document.getElementById('submit');
    submit.addEventListener('click', getVal);
});

//const weight = 60;
//const height = 1.58;
/*var btn = document.getElementById('submit');
btn.addEventListener('click', func);

function func() {
    console.log(document.getElementById("number").value)
}*/


//const vals = getVal();
// console.log(vals);



