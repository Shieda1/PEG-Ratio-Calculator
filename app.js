// https://calculator.swiftutors.com/peg-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const PEGRatioRadio = document.getElementById('PEGRatioRadio');
const PEratioRadio = document.getElementById('PEratioRadio');
const annualEPSGrowthRadio = document.getElementById('annualEPSGrowthRadio');

let PEGRatio;
let PEratio = v1;
let annualEPSGrowth = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

PEGRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'P/E ratio';
  variable2.textContent = 'Annual EPS Growth';
  PEratio = v1;
  annualEPSGrowth = v2;
  result.textContent = '';
});

PEratioRadio.addEventListener('click', function() {
  variable1.textContent = 'PEG Ratio';
  variable2.textContent = 'Annual EPS Growth';
  PEGRatio = v1;
  annualEPSGrowth = v2;
  result.textContent = '';
});

annualEPSGrowthRadio.addEventListener('click', function() {
  variable1.textContent = 'PEG Ratio';
  variable2.textContent = 'P/E ratio';
  PEGRatio = v1;
  PEratio = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(PEGRatioRadio.checked)
    result.textContent = `PEG Ratio = ${computePEGRatio().toFixed(2)}`;

  else if(PEratioRadio.checked)
    result.textContent = `P/E ratio = ${computePEratio().toFixed(2)}`;

  else if(annualEPSGrowthRadio.checked)
    result.textContent = `Annual EPS Growth = ${computeAnnualEPSGrowth().toFixed(2)}`;
})

// calculation

function computePEGRatio() {
  return Number(PEratio.value) / Number(annualEPSGrowth.value);
}

function computePEratio() {
  return Number(PEGRatio.value) * Number(annualEPSGrowth.value);
}

function computeAnnualEPSGrowth() {
  return Number(PEratio.value) / Number(PEGRatio.value);
}