const body = document.body;
const container = document.getElementById("container");
const colorPicker = document.getElementById("color");
const isRandom = document.getElementById("random");

//random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


//the sliders
// row slider 
var rowslider = document.getElementById("rowRange");
var rowoutput = document.getElementById("rowOutput");
rowoutput.innerHTML = rowslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
rowslider.oninput = function() {
  rowoutput.innerHTML = this.value;
} 
//col slider
var colslider = document.getElementById("colRange");
var coloutput = document.getElementById("colOutput");
coloutput.innerHTML = colslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
colslider.oninput = function() {
  coloutput.innerHTML = this.value;
}

let rows = rowslider.value;
let cols = colslider.value;


//create the grid
for (let i = 0; i < rows; i++) {
    var rowDiv = document.createElement("div");
     rowDiv.classList.add("rowDiv");
    container.appendChild(rowDiv);
}

let divArray = Array.from(document.getElementsByClassName("rowDiv"));

divArray.forEach((element) => {
    for (let j = 0; j < cols; j++) {
        var colDiv = document.createElement("div");
        colDiv.textContent = "";
        colDiv.classList.add("colDiv");
        element.appendChild(colDiv);
    }
});

let colArray = Array.from(document.getElementsByClassName("colDiv"));
colArray.forEach((div) => {
    div.addEventListener("mouseenter", () =>{
        if (isRandom.checked == true) {
            div.style.backgroundColor = getRandomColor();
        }else{
            div.style.backgroundColor = colorPicker.value;
        }
    });
    div.addEventListener("touchstart", () =>{
        if (isRandom.checked == true) {
            div.style.backgroundColor = getRandomColor();
        }else{
            div.style.backgroundColor = colorPicker.value;
        }
    });
});

