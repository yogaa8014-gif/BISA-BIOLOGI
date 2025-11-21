// script.js

// === 1. DATA PERTANYAAN ===
// Catatan: Setiap Bab harus memiliki 20 soal agar nilai total 100.
// Di sini saya berikan contoh singkat per bab. Anda harus mengembangkannya menjadi 20 soal.
const QUIZ_DATA = {
    "BAB 1 VIRUS": [
        {
            question: "Virus diklasifikasikan sebagai makhluk aseluler karena...",
            options: ["Tidak memiliki inti sel", "Tidak bisa bergerak bebas", "Tidak memiliki struktur sel", "Bentuknya terlalu kecil"],
            answer: "Tidak memiliki struktur sel"
        },
        {
            question: "Materi genetik yang dimiliki oleh virus adalah...",
            options: ["Hanya DNA", "Hanya RNA", "DNA atau RNA", "Protein dan Lipid"],
            answer: "DNA atau RNA"
        },
        // Tambahkan 18 soal lagi untuk BAB 1...
    ].concat(Array(18).fill(null).map((_, i) => ({
        question: `(Placeholder Soal ${i + 3} BAB 1)`,
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
        answer: "Pilihan A"
    }))),
    
    "BAB 2 KLASIFIKASI MAKHLUK HIDUP": [
        {
            question: "Tokoh yang memperkenalkan sistem tata nama ganda (Binomial Nomenclature) adalah...",
            options: ["Aristoteles", "Robert Hooke", "Carolus Linnaeus", "Charles Darwin"],
            answer: "Carolus Linnaeus"
        },
        {
            question: "Urutan taksonomi dari yang tertinggi (terbesar) hingga terendah (terkecil) adalah...",
            options: ["Filum, Kelas, Ordo, Famili, Genus, Spesies", "Spesies, Genus, Famili, Ordo, Kelas, Filum", "Kelas, Filum, Ordo, Famili, Genus, Spesies", "Filum, Kelas, Famili, Ordo, Genus, Spesies"],
            answer: "Filum, Kelas, Ordo, Famili, Genus, Spesies"
        },
        // Tambahkan 18 soal lagi untuk BAB 2...
    ].concat(Array(18).fill(null).map((_, i) => ({
        question: `(Placeholder Soal ${i + 3} BAB 2)`,
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
        answer: "Pilihan A"
    }))),

    "BAB 3 EKOSISTEM PERUBAHAN DAN PELESTARIAN LINGKUNGAN": [
        {
            question: "Unit fungsional dasar yang terdiri dari komunitas organisme dan lingkungan abiotiknya adalah...",
            options: ["Populasi", "Habitat", "Biosfer", "Ekosistem"],
            answer: "Ekosistem"
        },
        {
            question: "Contoh dari komponen abiotik dalam suatu ekosistem adalah...",
            options: ["Bakteri", "Jamur", "Suhu dan Air", "Tumbuhan"],
            answer: "Suhu dan Air"
        },
        // Tambahkan 18 soal lagi untuk BAB 3...
    ].concat(Array(18).fill(null).map((_, i) => ({
        question: `(Placeholder Soal ${i + 3} BAB 3)`,
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
        answer: "Pilihan A"
    }))),
    
    "BAB 4 BIOTEKNOLOGI": [
        {
            question: "Bioteknologi yang menggunakan mikroorganisme secara langsung tanpa manipulasi genetik kompleks disebut...",
            options: ["Bioteknologi Modern", "Kultur Jaringan", "Bioteknologi Konvensional", "Rekayasa Genetika"],
            answer: "Bioteknologi Konvensional"
        },
        {
            question: "Produk bioteknologi konvensional yang dihasilkan dari fermentasi susu adalah...",
            options: ["Tempe", "Yogurt", "Anggur", "Kecap"],
            answer: "Yogurt"
        },
        // Tambahkan 18 soal lagi untuk BAB 4...
    ].concat(Array(18).fill(null).map((_, i) => ({
        question: `(Placeholder Soal ${i + 3} BAB 4)`,
        options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
        answer: "Pilihan A"
    }))),
};


// === 2. LOGIKA UMUM ===
const TOTAL_SOAL = 20;
const POIN_PER_SOAL = 5; // Total skor 20 * 5 = 100

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let currentChapter = '';

// === 3. FUNGSI Halaman UTAMA (index.html) ===
if (document.getElementById('data-form')) {
    document.getElementById('data-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value.trim();
        const kelas = document.getElementById('kelas').value.trim();
        const absen = document.getElementById('absen').value.trim();
        const alertMessage = document.getElementById('alert-message');

        if (nama && kelas && absen) {
            // Simpan data pemain ke LocalStorage
            localStorage.setItem('kuisDataPemain', JSON.stringify({
                nama: nama,
                kelas: kelas,
                absen: absen
            }));
            
            // Arahkan ke halaman pemilihan bab
            window.location.href = 'bab.html';
        } else {
            alertMessage.style.display = 'block';
        }
    });
}

// === 4. FUNGSI Halaman PEMILIHAN BAB (bab.html) ===
function displayChapterList() {
    const chapterListDiv = document.getElementById('chapter-list');
    const userData = JSON.parse(localStorage.getItem('kuisDataPemain'));
    
    if (!userData) {
        // Jika data pemain hilang, kembalikan ke halaman utama
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('user-info').textContent = 
        `Selamat datang, ${userData.nama} (${userData.kelas} / ${userData.absen})`;

    chapterListDiv.innerHTML = '';
    
    Object.keys(QUIZ_DATA).forEach(chapterName => {
        const totalSoal = QUIZ_DATA[chapterName].length;
        
        // Buat card untuk setiap bab
        const cardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-success">${chapterName}</h5>
                        <p class="card-text text-muted">${totalSoal} Soal | Poin Maks: 100</p>
                        <button class="btn btn-primary mt-auto start-quiz-btn" data-chapter="${chapterName}">
                            Mulai Kuis
                        </button>
                    </div>
                </div>
            </div>
        `;
        chapterListDiv.innerHTML += cardHtml;
    });
    
    // Tambahkan event listener untuk semua tombol "Mulai Kuis"
    document.querySelectorAll('.start-quiz-btn').forEach(button => {
        button.addEventListener('click', function() {
            const chapter = this.getAttribute('data-chapter');
            localStorage.setItem('kuisCurrentChapter', chapter);
            localStorage.removeItem('kuisCurrentScore'); // Reset skor
            localStorage.removeItem('kuisCurrentIndex'); // Reset index
            window.location.href = 'kuis.html';
        });
    });
}


// === 5. FUNGSI Halaman KUIS (kuis.html) ===

function startQuizPage() {
    currentChapter = localStorage.getItem('kuisCurrentChapter');
    if (!currentChapter || !QUIZ_DATA[currentChapter]) {
        alert("Pilih bab terlebih dahulu!");
        window.location.href = 'bab.html';
        return;
    }
    
    // Muat status kuis jika ada (untuk melanjutkan)
    currentQuestionIndex = parseInt(localStorage.getItem('kuisCurrentIndex')) || 0;
    score = parseInt(localStorage.getItem('kuisCurrentScore')) || 0;

    document.getElementById('chapter-title').textContent = currentChapter;
    
    // Dapatkan elemen-elemen DOM
    const submitBtn = document.getElementById('submit-btn');
    
    // Pasang Event Listener awal
    submitBtn.addEventListener('click', checkAnswer);
    
    loadQuestion();
}


function loadQuestion() {
    const questions = QUIZ_DATA[currentChapter];

    if (currentQuestionIndex < questions.length) {
        const currentQ = questions[currentQuestionIndex];
        
        // Update tampilan
        document.getElementById('question-counter').textContent = `Soal ${currentQuestionIndex + 1}/${questions.length}`;
        document.getElementById('question-text').textContent = currentQ.question;
        const optionsArea = document.getElementById('options-area');
        const submitBtn = document.getElementById('submit-btn');
        const feedback = document.getElementById('feedback');

        optionsArea.innerHTML = ''; 
        selectedAnswer = null;
        submitBtn.disabled = true;
        feedback.textContent = '';
        submitBtn.textContent = 'Jawab';
        submitBtn.classList.remove('btn-warning');
        submitBtn.classList.add('btn-success');


        // Buat dan Tampilkan Pilihan Jawaban
        currentQ.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn', 'btn-outline-primary', 'option-btn');
            button.addEventListener('click', () => selectAnswer(option, button));
            optionsArea.appendChild(button);
        });

    } else {
        // Kuis Selesai!
        showResult();
    }
}

function selectAnswer(option, button) {
    // Hapus class 'selected' dari semua tombol
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected', 'btn-primary');
        btn.classList.add('btn-outline-primary');
    });

    // Tandai tombol yang dipilih
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary', 'selected');
    selectedAnswer = option;
    document.getElementById('submit-btn').disabled = false;
}

function checkAnswer() {
    if (!selectedAnswer) return;

    const currentQ = QUIZ_DATA[currentChapter][currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedback');
    const submitBtn = document.getElementById('submit-btn');
    
    // Non-aktifkan semua tombol pilihan setelah menjawab
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === currentQ.answer) {
        score += POIN_PER_SOAL; // Tambahkan 5 poin
        feedback.textContent = "✅ Jawaban Benar! Anda mendapat 5 poin.";
        feedback.classList.remove('text-danger');
        feedback.classList.add('text-success');

    } else {
        feedback.textContent = `❌ Jawaban Salah. Jawaban yang benar adalah: ${currentQ.answer}`;
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
    }

    // Tampilkan jawaban yang benar/salah pada tombol
    optionButtons.forEach(btn => {
        btn.classList.remove('selected', 'btn-primary', 'btn-outline-primary'); 
        
        if (btn.textContent === currentQ.answer) {
            btn.classList.add('btn-success');
        } else if (btn.textContent === selectedAnswer) {
             btn.classList.add('btn-danger');
        } else {
            btn.classList.add('btn-secondary');
        }
    });

    // Simpan status kuis
    localStorage.setItem('kuisCurrentScore', score);
    
    submitBtn.textContent = 'Lanjut';
    submitBtn.removeEventListener('click', checkAnswer);
    submitBtn.addEventListener('click', nextQuestion);
    submitBtn.classList.remove('btn-success');
    submitBtn.classList.add('btn-warning');
    submitBtn.disabled = false; 
}

function nextQuestion() {
    currentQuestionIndex++;
    localStorage.setItem('kuisCurrentIndex', currentQuestionIndex);
    
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.removeEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', checkAnswer);
    
    loadQuestion();
}

function showResult() {
    // Arahkan ke halaman hasil
    window.location.href = 'hasil.html';
}


// === 6. FUNGSI Halaman HASIL (hasil.html) ===

function displayResultPage() {
    const finalScore = parseInt(localStorage.getItem('kuisCurrentScore')) || 0;
    const userData = JSON.parse(localStorage.getItem('kuisDataPemain'));
    const resultMessageDiv = document.getElementById('result-message');
    const restartBtn = document.getElementById('restart-btn');

    document.getElementById('final-score').textContent = finalScore;
    document.getElementById('player-data').textContent = 
        `Pemain: ${userData.nama} | Bab: ${localStorage.getItem('kuisCurrentChapter')}`;

    let messageHtml = '';

    if (finalScore === 100) {
        messageHtml = `
            <div class="alert alert-success mt-4">
                <h3 class="alert-heading">SELAMAT! 🥳</h3>
                <p class="mb-0">Anda mendapatkan nilai sempurna ${finalScore}! Pertahankan prestasi Anda!</p>
            </div>
        `;
    } else if (finalScore < 75) {
        messageHtml = `
            <div class="alert alert-danger mt-4">
                <h3 class="alert-heading">Coba Lagi! 😢</h3>
                <p class="mb-0">Nilai Anda ${finalScore}. Jangan menyerah, pelajari lagi materinya!</p>
                

[Image of sad face emoji]

            </div>
        `;
    } else {
        messageHtml = `
            <div class="alert alert-info mt-4">
                <h3 class="alert-heading">Bagus! 👍</h3>
                <p class="mb-0">Nilai Anda ${finalScore}. Sedikit lagi menuju sempurna!</p>
            </div>
        `;
    }
    
    resultMessageDiv.innerHTML = messageHtml;

    // Bersihkan LocalStorage yang tidak perlu setelah kuis selesai
    localStorage.removeItem('kuisCurrentScore');
    localStorage.removeItem('kuisCurrentIndex');
    localStorage.removeItem('kuisCurrentChapter');

    restartBtn.addEventListener('click', () => {
        window.location.href = 'bab.html';
    });
}
