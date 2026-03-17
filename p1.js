let heightCm = null;
let weightKg = null;

const outputEl = document.getElementById("output");
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const heightBtn = document.getElementById("heightBtn");
const weightBtn = document.getElementById("weightBtn");
const ageBtn = document.getElementById("ageBtn");

heightBtn.addEventListener("click", () => {
  const value = heightInput.value.trim();
  const h = parseFloat(value);
  if (!value || Number.isNaN(h) || h <= 0) {
    updateOutput("Enter a valid height (in cm) in the box above.");
    return;
  }
  heightCm = h;
  updateOutput(`Height saved: ${heightCm} cm`);
});

weightBtn.addEventListener("click", () => {
  const value = weightInput.value.trim();
  const w = parseFloat(value);
  if (!value || Number.isNaN(w) || w <= 0) {
    updateOutput("Enter a valid weight (in kg) in the box above.");
    return;
  }
  weightKg = w;
  updateOutput(`Weight saved: ${weightKg} kg`);
});

ageBtn.addEventListener("click", () => {
  if (heightCm === null || weightKg === null) {
    updateOutput("Please set both height and weight before requesting an age.");
    return;
  }

  const estimatedAge = Math.round((heightCm + weightKg) / 10);
  updateOutput(`Estimated age: ${estimatedAge} years`);
});

function updateOutput(text) {
  outputEl.textContent = text;
}
