var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}

function countBmi() {
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var gender = document.getElementById("m").checked ? "male" : "female";

  if (age === '' || height === '' || weight === '' || (gender !== "male" && gender !== "female")) {
    modal.style.display = "block";
    modalText.innerHTML = "All fields are required!";
  } else {
    var bmi = weight / ((height / 100) ** 2);
    var result = '';

    if (bmi < 18.5) {
      result = 'Underweight';
    } else if (bmi < 25) {
      result = 'Healthy';
    } else if (bmi < 30) {
      result = 'Overweight';
    } else if (bmi < 35) {
      result = 'Obese';
    } else {
      result = 'Extremely obese';
    }

    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}