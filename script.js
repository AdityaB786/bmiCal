let button = document.getElementById("calculate-btn");
let switchbtn = document.getElementById("switch");

// switchbtn.addEventListener("click", switchToCm);
// function switchToCm() {
// //   document.getElementById("here").insertAdjacentHTML("afterend","<h3>This is the text which has been inserted by JS</h3>");
//   document.getElementById("feet").innerHTML = <input type="text" id="height" placeholder="in cm"/>;
//   console.log("pressed");
// }

button.addEventListener("click", calculateBMI);

function calculateBMI() {
  //   let height = parseInt(document.getElementById("height").value);
  let height;
  let weight = parseInt(document.getElementById("weight").value);
  console.log(weight);

  let f = parseInt(document.getElementById("feet").value);
  let i = parseInt(document.getElementById("inches").value);
  f = f * 30.48;
  i = i * 2.54;
  height = f + i;
  console.log(height);
  let result = document.querySelector("#result");

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  // If both input is valid, calculate the bmi
  else {
    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    // Dividing as per the bmi conditions
    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
}
