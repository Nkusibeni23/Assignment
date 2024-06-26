const lengthRange = document.getElementById("length-range");
const lengthDisplay = document.querySelector(".length-display");
const strength = document.querySelector(".strength");
const scale = document.querySelector(".scale");
const scaleBars = document.querySelectorAll(".scale_bar");

function setStrength(val) {
  let text = "";

  switch (val) {
    case 1:
      text = "Too Weak";
      break;
    case 2:
      text = "Weak";
      break;
    case 3:
      text = "Medium";
      break;
    case 4:
      text = "Strong";
      break;
    default:
      return;
  }
  strength.textContent = text;
  scale.dataset.value = val;

  scaleBars.forEach((bar, index) => {
    if (index < val) {
      bar.classList.remove("hidden");
      bar.classList.add("active");
    } else {
      bar.classList.remove("active");
      bar.classList.add("hidden");
    }
  });
}

function evalStrength() {
  const length = parseInt(lengthRange.value);
  const useUppercase = document.getElementById("uppercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;
  const useLowercase = document.getElementById("lowercase").checked;

  if (!(useLowercase || useNumbers || useUppercase || useSymbols)) {
    return 1;
  }
  let strength = (length / 10) * 2;
  useUppercase && (strength *= 1.2);
  useLowercase && (strength *= 1.2);
  useNumbers && (strength *= 1.1);
  useSymbols && (strength *= 1.3);

  strength = parseInt(strength);
  if (strength < 1) {
    strength = 1;
  } else if (strength > 4) {
    strength = 4;
  }
  return strength;
}

lengthRange.addEventListener("input", (e) => {
  const value = parseInt(e.target.value);
  const min = parseInt(e.target.min);
  const max = parseInt(e.target.max);

  lengthDisplay.textContent = value;

  const width = ((value - min) / (max - min)) * 100 + "%";
  document.documentElement.style.setProperty("--width", width);
});

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", (e) => {
  e.target.classList.add("active");

  if (navigator.clipboard) {
    const text = output.textContent;
    navigator.clipboard.writeText(text);
  }
});

// Generate Password
const generateBtn = document.querySelector(".generate-btn");
const output = document.querySelector(".output");

function generatePassword() {
  const length = parseInt(lengthRange.value);
  let chars = [];
  let password = "";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = "0123456789".split("");
  const symbols = "!@#$%^&*()_+-=[{]};:`/.?".split("");

  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  if (!(useLowercase || useNumbers || useUppercase || useSymbols)) {
    alert("Please select at least one option.");
    return {
      password: "",
      strength: 1, // Very Weak
    };
  }

  useUppercase && (chars = [...chars, ...uppercase]);
  useLowercase && (chars = [...chars, ...lowercase]);
  useNumbers && (chars = [...chars, ...numbers]);
  useSymbols && (chars = [...chars, ...symbols]);

  if (chars.length > 0) {
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  const passwordStrength = evalStrength();

  return {
    password,
    strength: passwordStrength,
  };
}

function setPassword() {
  const { password, strength: passwordStrength } = generatePassword();

  if (password !== "") {
    output.textContent = password;
    copyBtn.classList.remove("active");
    setStrength(passwordStrength);
  }
}

generateBtn.addEventListener("click", setPassword);

// Initialize app
function init() {
  lengthDisplay.textContent = lengthRange.value;
  setPassword();
}
init();
