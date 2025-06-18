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
let timeLeft = 60; // 1 menit dalam detik

const wordRow = document.getElementById("wordRow");
const inputBox = document.getElementById("inputBox");
const timer = document.getElementById("timer");
const results = document.getElementById("results");
const progressBar = document.getElementById("progressBar");

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
  const progress = ((60 - timeLeft) / 60) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateStats() {
  const elapsed = (60 - timeLeft) / 60; // dalam menit
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

  const elapsed = (60 - timeLeft) / 60; // dalam menit
  const wpm = Math.round(wordCount / elapsed || 0);
  const accuracy =
    wordCount > 0 ? Math.round(((wordCount - errors) / wordCount) * 100) : 0;

  // Tampilkan hasil
  finalWpm.textContent = wpm;
  finalAccuracy.textContent = `${accuracy}%`;
  finalCorrect.textContent = wordCount - errors;
  finalErrors.textContent = errors;

  results.style.display = "block";

  // Scroll to results
  results.scrollIntoView({ behavior: "smooth" });
}

function resetTest() {
  // Reset semua variabel
  currentIndex = 0;
  wordCount = 0;
  errors = 0;
  startTime = null;
  timeLeft = 60;

  // Reset tampilan
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

  // Mulai timer lagi
  clearInterval(timerInterval);
}

inputBox.addEventListener("input", (event) => {
  const typedRaw = inputBox.value;
  const typed = typedRaw.trim();
  const currentWord = currentWords[currentIndex];

  if (typed.length === 1 && !startTime) {
    startTime = new Date();
    startTimer(); // Mulai timer saat pertama kali mengetik
  }

  // Jika tekan spasi
  if (typedRaw.endsWith(" ")) {
    if (typed === currentWord) {
      wordCount++;
    } else {
      errors++;
    }

    inputBox.value = "";
    currentIndex++;

    // Ganti kata jika sudah semua
    if (currentIndex >= currentWords.length) {
      loadWords();
    } else {
      updateWordRow();
    }

    updateStats();
  }
});

// Inisialisasi
updateTimerDisplay();
loadWords();
