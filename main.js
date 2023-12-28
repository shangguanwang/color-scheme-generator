import './style.css'

// Get the updated value as the user changes selection
let seedColor = document.getElementById("seed-color");
let schemeMode = document.getElementById("scheme-mode");

let selectedColor = seedColor.value;
let selectedMode = schemeMode.value;

seedColor.addEventListener("change", ()=>{
  selectedColor = seedColor.value;
})
schemeMode.addEventListener("change", ()=>{
  selectedMode = schemeMode.value;
})

