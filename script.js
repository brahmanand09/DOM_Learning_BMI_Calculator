const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault;

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let results = document.querySelector("#results");
    let message = document.querySelector('#message');

    if (height < 0 || height === '' || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight < 0 || weight === '' || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            message.innerHTML = `Your BMI weight is too low ${bmi}`;
        }else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = `Your BMI weight is normal ${bmi}`;
        }else {
            message.innerHTML = `Your BMI weight is too high ${bmi}`;
        }
    }
})