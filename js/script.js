const wordList = [
  "sad",
  "lad",
  "dash",
  "ask",
  "fall",
  "dad",
  "fad",
  "all",
  "sasa",
  "kala",
  "jaja",
  "dada",
  "alas",
  "lask",
  "salsa",
  "fads",
  "ska",
];

let currentWords = [];
let currentIndex = 0;
let wordCount = 0;
let errors = 0;
let startTime = null;
let timerInterval = null;
let timeLeft = 60; // Default 1 minute in seconds
let testDuration = 60; // Store the selected duration

const wordRow = document.getElementById("wordRow");
const inputBox = document.getElementById("inputBox");
const timer = document.getElementById("timer");
const results = document.getElementById("results");
const progressBar = document.getElementById("progressBar");
const timeOptions = document.getElementById("timeOptions");

// Stat elements
const wpmStat = document.getElementById("wpmStat");
const accuracyStat = document.getElementById("accuracyStat");
const wordsStat = document.getElementById("wordsStat");

// Result elements
const finalWpm = document.getElementById("finalWpm");
const finalAccuracy = document.getElementById("finalAccuracy");
const finalCorrect = document.getElementById("finalCorrect");
const finalErrors = document.getElementById("finalErrors");

function loadWords() {
  currentWords = [];
  for (let i = 0; i < 5; i++) {
    currentWords.push(wordList[Math.floor(Math.random() * wordList.length)]);
  }
  currentIndex = 0;
  updateWordRow();
}

function updateWordRow() {
  wordRow.innerHTML = currentWords
    .map((word, i) => {
      if (i === currentIndex) {
        return `<span class="current-word">${word}</span>`;
      } else {
        return word;
      }
    })
    .join(" ");
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    updateProgressBar();

    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Change color when time is running out
  if (timeLeft <= 10) {
    const dangerColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--danger");
    timer.style.background = dangerColor;
  }
}

function updateProgressBar() {
  const progress = ((testDuration - timeLeft) / testDuration) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateStats() {
  const elapsed = (testDuration - timeLeft) / 60; // in minutes
  const wpm = Math.round(wordCount / elapsed || 0);
  const accuracy =
    wordCount > 0 ? Math.round(((wordCount - errors) / wordCount) * 100) : 0;

  wpmStat.textContent = wpm;
  accuracyStat.textContent = `${accuracy}%`;
  wordsStat.textContent = wordCount;
}

function endTest() {
  clearInterval(timerInterval);
  inputBox.disabled = true;

  const elapsed = (testDuration - timeLeft) / 60; // in minutes
  const wpm = Math.round(wordCount / elapsed || 0);
  const accuracy =
    wordCount > 0 ? Math.round(((wordCount - errors) / wordCount) * 100) : 0;

  // Show results
  finalWpm.textContent = wpm;
  finalAccuracy.textContent = `${accuracy}%`;
  finalCorrect.textContent = wordCount - errors;
  finalErrors.textContent = errors;

  results.style.display = "block";

  // Scroll to results
  results.scrollIntoView({ behavior: "smooth" });
}

function resetTest() {
  // Reset all variables
  currentIndex = 0;
  wordCount = 0;
  errors = 0;
  startTime = null;
  timeLeft = testDuration;

  // Reset display
  inputBox.disabled = false;
  inputBox.value = "";
  inputBox.focus();
  results.style.display = "none";
  updateTimerDisplay();
  updateProgressBar();
  loadWords();
  updateStats();

  // Reset timer style
  const primaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary");
  timer.style.background = primaryColor;

  // Clear any existing timer
  clearInterval(timerInterval);
}

function setTestDuration(duration) {
  testDuration = duration;
  timeLeft = duration;
  resetTest();
}

// Event listeners
inputBox.addEventListener("input", (event) => {
  const typedRaw = inputBox.value;
  const typed = typedRaw.trim();
  const currentWord = currentWords[currentIndex];

  if (typed.length === 1 && !startTime) {
    startTime = new Date();
    startTimer(); // Start timer on first keystroke
  }

  // If space is pressed
  if (typedRaw.endsWith(" ")) {
    if (typed === currentWord) {
      wordCount++;
    } else {
      errors++;
    }

    inputBox.value = "";
    currentIndex++;

    // Load new words if we've reached the end
    if (currentIndex >= currentWords.length) {
      loadWords();
    } else {
      updateWordRow();
    }

    updateStats();
  }
});

// Time option buttons
document.querySelectorAll(".time-option").forEach((button) => {
  button.addEventListener("click", function () {
    const duration = parseInt(this.getAttribute("data-duration"));
    setTestDuration(duration);

    // Update active state
    document.querySelectorAll(".time-option").forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Initialize
updateTimerDisplay();
loadWords();
