import './style.css'

// Get the updated value as the user changes selection
let seedColor = document.getElementById("seed-color");
let schemeMode = document.getElementById("scheme-mode");

let selectedColor = seedColor.value;
let selectedMode = schemeMode.value;

seedColor.addEventListener("change", ()=>{
  selectedColor = seedColor.value;
  selectedColor = selectedColor.slice(1,); // remove the # sign
})
schemeMode.addEventListener("change", ()=>{
  selectedMode = schemeMode.value;
})

let colorDisplayElement = document.getElementById("color-display");

// Function to render colors from API
const renderColors = (link, hexval) => {
  colorDisplayElement.innerHTML += `
  <img src="${link}" alt="color display for ${hexval} " >
  <p>${hexval}</p>
  `
}

// make an API request when user clicks the button
document.getElementById("color-form").addEventListener("submit", (e)=>{
  e.preventDefault(); //prevent page from reloading
  let URL = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}&count=6`;
  console.log(selectedColor, selectedMode);
  fetch(URL)
  .then(res=>res.json())
  .then(data=>{
    for(let itm of data.colors){
      renderColors(itm.image.bare,itm.hex.value);
    }
  });
})