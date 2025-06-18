const wordList = [
  "aku",
  "kamu",
  "dia",
  "kami",
  "kita",
  "mereka",
  "ini",
  "itu",
  "sini",
  "situ",
  "sana",
  "yang",
  "dan",
  "atau",
  "tetapi",
  "karena",
  "jika",
  "agar",
  "saya",
  "engkau",
  "beliau",
  "bapak",
  "ibu",
  "anak",
  "rumah",
  "kantor",
  "sekolah",
  "kampus",
  "jalan",
  "kota",
  "desa",
  "negara",
  "dunia",
  "alam",
  "langit",
  "bumi",
  "matahari",
  "bulan",
  "bintang",
  "awan",
  "hujan",
  "angin",
  "air",
  "api",
  "tanah",
  "udara",
  "kayu",
  "batu",
  "besi",
  "emas",
  "perak",
  "minyak",
  "garam",
  "gula",
  "nasi",
  "roti",
  "sayur",
  "buah",
  "daging",
  "ikan",
  "susu",
  "telur",
  "kopi",
  "teh",
  "air",
  "jus",
  "makan",
  "minum",
  "tidur",
  "bangun",
  "duduk",
  "berdiri",
  "jalan",
  "lari",
  "bicara",
  "dengar",
  "lihat",
  "rasa",
  "pikir",
  "tahu",
  "mau",
  "bisa",
  "harus",
  "perlu",
  "baik",
  "buruk",
  "besar",
  "kecil",
  "tinggi",
  "rendah",
  "panjang",
  "pendek",
  "lebar",
  "sempit",
  "tebal",
  "tipis",
  "baru",
  "lama",
  "cepat",
  "lambat",
  "mahal",
  "murah",
  "banyak",
  "sedikit",
  "penuh",
  "kosong",
  "berat",
  "ringan",
  "satu",
  "dua",
  "tiga",
  "empat",
  "lima",
  "enam",
  "tujuh",
  "delapan",
  "sembilan",
  "sepuluh",
  "seratus",
  "seribu",
  "waktu",
  "hari",
  "minggu",
  "bulan",
  "tahun",
  "jam",
  "menit",
  "detik",
  "pagi",
  "siang",
  "sore",
  "malam",
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
  "minggu",
  "januari",
  "februari",
  "maret",
  "april",
  "mei",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
  "musim",
  "kemarau",
  "hujan",
  "panas",
  "dingin",
  "merah",
  "kuning",
  "hijau",
  "biru",
  "ungu",
  "hitam",
  "putih",
  "abu",
  "coklat",
  "jingga",
  "merah muda",
  "emas",
  "perak",
  "kuping",
  "mata",
  "hidung",
  "mulut",
  "tangan",
  "kaki",
  "kepala",
  "rambut",
  "dada",
  "perut",
  "punggung",
  "hati",
  "paru",
  "otak",
  "tulang",
  "darah",
  "kulit",
  "baju",
  "celana",
  "rok",
  "jaket",
  "sepatu",
  "topi",
  "kaos",
  "kemeja",
  "dasi",
  "sandal",
  "tas",
  "dompet",
  "uang",
  "kertas",
  "logam",
  "bank",
  "harga",
  "beli",
  "jual",
  "dagang",
  "toko",
  "pasar",
  "mall",
  "swalayan",
  "buku",
  "pensil",
  "pena",
  "kertas",
  "penggaris",
  "penghapus",
  "tas",
  "meja",
  "kursi",
  "papan",
  "kapur",
  "spidol",
  "komputer",
  "laptop",
  "telepon",
  "hp",
  "televisi",
  "radio",
  "kamera",
  "foto",
  "video",
  "musik",
  "lagu",
  "nyanyi",
  "tari",
  "dansa",
  "gambar",
  "lukis",
  "warna",
  "cat",
  "olahraga",
  "sepak bola",
  "basket",
  "voli",
  "tenis",
  "badminton",
  "renang",
  "lari",
  "lompat",
  "lempar",
  "tinju",
  "gulat",
  "kerja",
  "usaha",
  "bisnis",
  "proyek",
  "tugas",
  "pekerjaan",
  "gaji",
  "upah",
  "hasil",
  "untung",
  "rugi",
  "modal",
  "libur",
  "cuti",
  "rekreasi",
  "wisata",
  "jalan-jalan",
  "tamasya",
  "hotel",
  "penginapan",
  "restoran",
  "warung",
  "kafe",
  "rumah makan",
  "masak",
  "goreng",
  "rebus",
  "kukus",
  "panggang",
  "bakar",
  "cuci",
  "bersih",
  "kotor",
  "sapu",
  "pel",
  "kain",
  "mandi",
  "sabun",
  "sampo",
  "sikat",
  "gigi",
  "handuk",
  "tidur",
  "kasur",
  "bantal",
  "selimut",
  "buku",
  "baca",
  "tulis",
  "catat",
  "hafal",
  "ingat",
  "lupa",
  "paham",
  "ajar",
  "belajar",
  "mengajar",
  "sekolah",
  "guru",
  "murid",
  "kelas",
  "pelajaran",
  "ujian",
  "nilai",
  "rapor",
  "ijazah",
  "kesehatan",
  "sakit",
  "sehat",
  "demam",
  "batuk",
  "pilek",
  "dokter",
  "perawat",
  "rumah sakit",
  "klinik",
  "obat",
  "pil",
  "suntik",
  "operasi",
  "rawat",
  "inap",
  "kamar",
  "pasien",
  "keluarga",
  "orang tua",
  "ayah",
  "ibu",
  "anak",
  "kakak",
  "adik",
  "kakek",
  "nenek",
  "paman",
  "bibi",
  "sepupu",
  "teman",
  "sahabat",
  "kenalan",
  "tetangga",
  "masyarakat",
  "rakyat",
  "pemerintah",
  "negara",
  "presiden",
  "menteri",
  "gubernur",
  "walikota",
  "bupati",
  "camat",
  "lurah",
  "rw",
  "rt",
  "warga",
  "hukum",
  "aturan",
  "undang",
  "polisi",
  "hakim",
  "jaksa",
  "pengacara",
  "penjara",
  "denda",
  "hukuman",
  "sidang",
  "pengadilan",
  "agama",
  "tuhan",
  "ibadah",
  "masjid",
  "gereja",
  "pura",
  "vihara",
  "doa",
  "sembahyang",
  "puasa",
  "sedekah",
  "zakat",
  "budaya",
  "adat",
  "tradisi",
  "upacara",
  "kesenian",
  "tarian",
  "nyanyian",
  "musik",
  "alat",
  "gitar",
  "piano",
  "drum",
  "biola",
  "suling",
  "angklung",
  "gamelan",
  "wayang",
  "teater",
  "film",
  "sinetron",
  "drama",
  "komedi",
  "horor",
  "romantis",
  "aksi",
  "petualangan",
  "fantasi",
  "fiksi",
  "ilmu",
  "pengetahuan",
  "teknologi",
  "internet",
  "website",
  "aplikasi",
  "program",
  "kode",
  "data",
  "informasi",
  "komunikasi",
  "media",
  "sosial",
  "facebook",
  "twitter",
  "instagram",
  "whatsapp",
  "telegram",
  "youtube",
  "tiktok",
  "transportasi",
  "mobil",
  "motor",
  "sepeda",
  "bus",
  "kereta",
  "pesawat",
  "kapal",
  "truk",
  "taxi",
  "ojek",
  "angkot",
  "jalan",
  "jalan tol",
  "jembatan",
  "terminal",
  "stasiun",
  "bandara",
  "pelabuhan",
  "parkir",
  "macet",
  "kecelakaan",
  "tabrakan",
  "tilang",
  "alam",
  "gunung",
  "sungai",
  "danau",
  "laut",
  "pantai",
  "hutan",
  "sawah",
  "kebun",
  "taman",
  "zoo",
  "kebun binatang",
  "flora",
  "fauna",
  "hewan",
  "tumbuhan",
  "pohon",
  "bunga",
  "daun",
  "akar",
  "buah",
  "sayur",
  "padi",
  "jagung",
  "kedelai",
  "kacang",
  "cabai",
  "bawang",
  "merica",
  "garam",
  "gula",
  "kopi",
  "teh",
  "susu",
  "roti",
  "nasi",
  "mie",
  "bakso",
  "soto",
  "rendang",
  "sate",
  "gado-gado",
  "pecel",
  "rawon",
  "sop",
  "gulai",
  "ayam",
  "ikan",
  "daging",
  "telur",
  "tahu",
  "tempe",
  "kerupuk",
  "sambal",
  "minuman",
  "jus",
  "sirup",
  "soda",
  "bir",
  "anggur",
  "arak",
  "tuak",
  "minuman keras",
  "rokok",
  "tembakau",
  "narkoba",
  "olahraga",
  "sepak bola",
  "bulu tangkis",
  "tenis",
  "basket",
  "voli",
  "renang",
  "lari",
  "maraton",
  "lompat",
  "tinju",
  "gulat",
  "karate",
  "judo",
  "taekwondo",
  "silat",
  "senam",
  "yoga",
  "fitness",
  "gym",
  "lapangan",
  "stadion",
  "kolam",
  "arena",
  "pertandingan",
  "kompetisi",
  "turnamen",
  "juara",
  "medali",
  "piala",
  "hadiah",
  "penghargaan",
  "rekor",
  "pelatih",
  "wasit",
  "pemain",
  "tim",
  "kesebelasan",
  "klub",
  "asosiasi",
  "federasi",
  "liga",
  "musim",
  "babak",
  "gol",
  "skor",
  "seri",
  "menang",
  "kalah",
  "imbang",
  "final",
  "semi final",
  "perempat final",
  "penalti",
  "offside",
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
