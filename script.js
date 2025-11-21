// script.js (Versi Final dengan 20 Soal Asli per Bab)

// === 1. DATA PERTANYAAN (TOTAL 80 SOAL ASLI) ===
const QUIZ_DATA = {
    // --- BAB 1: VIRUS (20 SOAL) ---
    "BAB 1 VIRUS": [
        {
            question: "Virus diklasifikasikan sebagai makhluk aseluler karena...",
            options: ["Tidak memiliki inti sel", "Tidak bisa bergerak bebas", "Tidak memiliki struktur sel", "Bentuknya terlalu kecil"],
            answer: "Tidak memiliki struktur sel"
        },
        {
            question: "Materi genetik yang dapat dimiliki oleh virus adalah...",
            options: ["Hanya DNA", "Hanya RNA", "DNA atau RNA", "Protein dan Lipid"],
            answer: "DNA atau RNA"
        },
        {
            question: "Fungsi utama dari kapsid pada virus adalah...",
            options: ["Sebagai alat gerak", "Melindungi asam nukleat", "Melakukan metabolisme", "Menghasilkan energi"],
            answer: "Melindungi asam nukleat"
        },
        {
            question: "Tahap pada daur litik di mana virus menghancurkan sel inang setelah perbanyakan adalah...",
            options: ["Adsorpsi", "Penetrasi", "Sintesis", "Lisis"],
            answer: "Lisis"
        },
        {
            question: "Penyakit pada manusia yang disebabkan oleh virus RNA adalah...",
            options: ["Cacar Air", "Tifus", "Polio", "TBC"],
            answer: "Polio"
        },
        {
            question: "Perbedaan utama antara daur litik dan daur lisogenik pada replikasi virus adalah...",
            options: ["Kecepatan replikasi", "Asam nukleat virus", "Integrasi materi genetik ke DNA inang", "Jenis sel inang"],
            answer: "Integrasi materi genetik ke DNA inang"
        },
        {
            question: "Berikut ini yang TIDAK termasuk struktur tubuh virus bakteriofag adalah...",
            options: ["Kepala", "Leher", "Ekor", "Membran sel"],
            answer: "Membran sel"
        },
        {
            question: "Enzim yang dihasilkan virus HIV untuk mengubah RNA menjadi DNA inang disebut...",
            options: ["Ligase", "Polimerase", "Reverse Transcriptase", "Endonuklease"],
            answer: "Reverse Transcriptase"
        },
        {
            question: "Vaksin bertujuan memberikan kekebalan terhadap penyakit virus dengan cara...",
            options: ["Membunuh virus di dalam tubuh", "Merangsang pembentukan antibodi", "Menghambat replikasi virus", "Memperkuat sel inang"],
            answer: "Merangsang pembentukan antibodi"
        },
        {
            question: "Organisme yang diserang oleh Bakteriofag adalah...",
            options: ["Hewan", "Tumbuhan", "Jamur", "Bakteri"],
            answer: "Bakteri"
        },
        {
            question: "Istilah 'virion' merujuk pada...",
            options: ["Sel inang yang terinfeksi", "Virus yang tidak aktif", "Partikel virus lengkap di luar sel inang", "Selubung protein saja"],
            answer: "Partikel virus lengkap di luar sel inang"
        },
        {
            question: "Salah satu upaya pencegahan penyakit yang disebabkan oleh virus adalah...",
            options: ["Pemberian antibiotik", "Transfusi darah", "Imunisasi", "Radioterapi"],
            answer: "Imunisasi"
        },
        {
            question: "Virus yang menyerang tanaman tembakau dan menyebabkan bercak kuning adalah...",
            options: ["TMV", "H5N1", "HPV", "HIV"],
            answer: "TMV"
        },
        {
            question: "Tahap dalam daur lisogenik di mana DNA virus bergabung dengan DNA inang membentuk profag adalah...",
            options: ["Adsorpsi", "Sintesis", "Penggabungan", "Perakitan"],
            answer: "Penggabungan"
        },
        {
            question: "Virus dapat dikristalkan. Hal ini menunjukkan bahwa virus...",
            options: ["Hanya terdiri dari protein", "Bukan makhluk hidup sejati", "Memiliki membran", "Melakukan metabolisme"],
            answer: "Bukan makhluk hidup sejati"
        },
        {
            question: "Istilah untuk penyakit yang disebabkan oleh virus pada hewan adalah...",
            options: ["Rabies", "Mosaik", "Eutrofikasi", "SARS"],
            answer: "Rabies"
        },
        {
            question: "Bagian ekor pada virus bakteriofag berfungsi untuk...",
            options: ["Sintesis protein", "Melekatkan diri pada sel inang", "Melindungi materi genetik", "Mengatur metabolisme"],
            answer: "Melekatkan diri pada sel inang"
        },
        {
            question: "Virus influenza diklasifikasikan berdasarkan jenis materi genetiknya sebagai virus...",
            options: ["DNA untai ganda", "DNA untai tunggal", "RNA untai ganda", "RNA untai tunggal"],
            answer: "RNA untai tunggal"
        },
        {
            question: "Organel sel inang yang paling berperan dalam proses sintesis protein virus adalah...",
            options: ["Mitokondria", "Ribosom", "Vakuola", "Nukleus"],
            answer: "Ribosom"
        },
        {
            question: "Cara penularan virus COVID-19 utamanya melalui...",
            options: ["Makanan yang terkontaminasi", "Kontak fisik langsung", "Cairan droplet pernapasan", "Gigitan serangga"],
            answer: "Cairan droplet pernapasan"
        },
    ],
    
    // --- BAB 2: KLASIFIKASI MAKHLUK HIDUP (20 SOAL) ---
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
        {
            question: "Dalam penamaan ilmiah (Binomial Nomenclature), kata pertama menunjukkan...",
            options: ["Spesies", "Genus", "Famili", "Ordo"],
            answer: "Genus"
        },
        {
            question: "Sistem klasifikasi 5 Kingdom diperkenalkan oleh...",
            options: ["Carolus Linnaeus", "R.H. Whittaker", "Ernst Haeckel", "Gregor Mendel"],
            answer: "R.H. Whittaker"
        },
        {
            question: "Kelompok makhluk hidup yang seluruh anggotanya bersifat prokariotik adalah...",
            options: ["Protista", "Fungi", "Monera", "Plantae"],
            answer: "Monera"
        },
        {
            question: "Tujuan utama dari klasifikasi makhluk hidup adalah...",
            options: ["Mempercepat evolusi", "Mempermudah pengenalan dan studi", "Menciptakan spesies baru", "Menentukan usia fosil"],
            answer: "Mempermudah pengenalan dan studi"
        },
        {
            question: "Kingdom yang anggotanya mencakup alga, protozoa, dan jamur lendir adalah...",
            options: ["Monera", "Fungi", "Plantae", "Protista"],
            answer: "Protista"
        },
        {
            question: "Dalam taksonomi, dua organisme yang berada dalam satu Genus yang sama pasti berada dalam satu...",
            options: ["Spesies", "Ordo", "Famili", "Kelas"],
            answer: "Famili"
        },
        {
            question: "Padi (`Oryza sativa`) dan jagung (`Zea mays`) dikelompokkan dalam famili yang sama yaitu...",
            options: ["Poaceae", "Fabaceae", "Solanaceae", "Malvaceae"],
            answer: "Poaceae"
        },
        {
            question: "Kunci determinasi digunakan dalam klasifikasi untuk...",
            options: ["Mengumpulkan spesimen", "Menentukan posisi takson", "Menciptakan nama ilmiah", "Mengamati sel"],
            answer: "Menentukan posisi takson"
        },
        {
            question: "Kingdom Fungi memiliki ciri utama berupa...",
            options: ["Autotrof dan berspora", "Eukariotik, tidak bergerak, dan dinding sel dari kitin", "Prokariotik dan heterotrof", "Multiseluler dan dapat berfotosintesis"],
            answer: "Eukariotik, tidak bergerak, dan dinding sel dari kitin"
        },
        {
            question: "Tingkat takson di bawah Ordo adalah...",
            options: ["Kelas", "Filum", "Famili", "Genus"],
            answer: "Famili"
        },
        {
            question: "Organisme yang merupakan konsumen tingkat I (herbivora) umumnya berada di Kingdom...",
            options: ["Plantae", "Animalia", "Monera", "Protista"],
            answer: "Animalia"
        },
        {
            question: "Cabang Biologi yang khusus mempelajari identifikasi dan penamaan makhluk hidup adalah...",
            options: ["Anatomi", "Morfologi", "Taksonomi", "Ekologi"],
            answer: "Taksonomi"
        },
        {
            question: "Nama marga (Genus) dalam Binomial Nomenclature selalu ditulis diawali dengan huruf...",
            options: ["Kecil", "Kapital", "Tegak", "Miring"],
            answer: "Kapital"
        },
        {
            question: "Makhluk hidup yang memiliki ciri eukariotik, bersel satu atau banyak, dan tidak memiliki jaringan sejati dikelompokkan dalam Kingdom...",
            options: ["Monera", "Plantae", "Protista", "Animalia"],
            answer: "Protista"
        },
        {
            question: "Dua spesies dianggap paling dekat kekerabatannya jika mereka berada dalam...",
            options: ["Famili yang berbeda", "Kelas yang sama", "Genus yang sama", "Filum yang berbeda"],
            answer: "Genus yang sama"
        },
        {
            question: "Contoh Kingdom yang semua anggotanya bersifat autotrof adalah...",
            options: ["Animalia", "Fungi", "Plantae", "Protista"],
            answer: "Plantae"
        },
        {
            question: "Tingkat taksonomi di atas Kelas adalah...",
            options: ["Ordo", "Filum", "Famili", "Spesies"],
            answer: "Filum"
        },
        {
            question: "Perbedaan utama antara tumbuhan Monokotil dan Dikotil dilihat dari...",
            options: ["Habitatnya", "Jumlah kotiledon", "Jenis klorofil", "Cara berkembang biak"],
            answer: "Jumlah kotiledon"
        },
    ],

    // --- BAB 3: EKOSISTEM, PERUBAHAN DAN PELESTARIAN LINGKUNGAN (20 SOAL) ---
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
        {
            question: "Organisme yang berperan sebagai produsen dalam rantai makanan adalah...",
            options: ["Hewan karnivora", "Semua jenis tumbuhan", "Hewan herbivora", "Bakteri pengurai"],
            answer: "Semua jenis tumbuhan"
        },
        {
            question: "Peristiwa meningkatnya suhu rata-rata atmosfer, laut, dan daratan Bumi secara bertahap disebut...",
            options: ["Hujan asam", "Pemanasan global", "Eutrofikasi", "Efek rumah kaca"],
            answer: "Pemanasan global"
        },
        {
            question: "Zat pencemar yang berasal dari deterjen dan pupuk yang menyebabkan ledakan populasi alga di air adalah...",
            options: ["Pestisida", "Fosfat dan Nitrat", "Timbal (Pb)", "Karbon monoksida (CO)"],
            answer: "Fosfat dan Nitrat"
        },
        {
            question: "Interaksi antara dua organisme yang keduanya memperoleh keuntungan disebut...",
            options: ["Kompetisi", "Parasitisme", "Mutualisme", "Komensalisme"],
            answer: "Mutualisme"
        },
        {
            question: "Penyebab utama terjadinya hujan asam adalah tingginya konsentrasi gas...",
            options: ["CO2 dan CO", "SO2 dan NO2", "Metana dan uap air", "Oksigen dan Nitrogen"],
            answer: "SO2 dan NO2"
        },
        {
            question: "Suksesi yang terjadi pada daerah yang sebelumnya sudah ada kehidupan, tetapi rusak akibat bencana, disebut...",
            options: ["Suksesi primer", "Suksesi sekunder", "Klimaks", "Komunitas perintis"],
            answer: "Suksesi sekunder"
        },
        {
            question: "Organisme yang menduduki trofik ke-3 (konsumen II) dalam piramida makanan adalah...",
            options: ["Produsen", "Herbivora", "Karnivora sekunder", "Dekomposer"],
            answer: "Karnivora sekunder"
        },
        {
            question: "Tindakan yang termasuk upaya pelestarian lingkungan secara *ex situ* adalah...",
            options: ["Taman Nasional", "Suaka Margasatwa", "Kebun Raya", "Cagar Alam"],
            answer: "Kebun Raya"
        },
        {
            question: "Lapisan di atmosfer yang berfungsi melindungi Bumi dari radiasi UV berbahaya adalah...",
            options: ["Troposfer", "Stratosfer (Ozon)", "Mesosfer", "Termosfer"],
            answer: "Stratosfer (Ozon)"
        },
        {
            question: "Aliran energi dalam ekosistem dimulai dari...",
            options: ["Dekomposer", "Konsumen primer", "Matahari", "Konsumen tersier"],
            answer: "Matahari"
        },
        {
            question: "Deforestasi (penggundulan hutan) dapat mengganggu siklus biogeokimia, terutama siklus...",
            options: ["Nitrogen", "Fosfor", "Air", "Sulfur"],
            answer: "Air"
        },
        {
            question: "Populasi adalah sekelompok individu dari spesies yang sama yang hidup di...",
            options: ["Semua tempat di dunia", "Ekosistem yang berbeda", "Daerah dan waktu tertentu", "Kebun binatang"],
            answer: "Daerah dan waktu tertentu"
        },
        {
            question: "Konsep 3R dalam pengelolaan sampah adalah...",
            options: ["Riset, Reduksi, Replikasi", "Reduce, Reuse, Recycle", "Regenerasi, Reboisasi, Reduksi", "Reorganisasi, Reaksi, Restorasi"],
            answer: "Reduce, Reuse, Recycle"
        },
        {
            question: "Indikator biologis yang sering digunakan untuk menentukan tingkat polusi udara adalah...",
            options: ["Cacing tanah", "Lumut kerak (Lichenes)", "Ikan mas", "Semut"],
            answer: "Lumut kerak (Lichenes)"
        },
        {
            question: "Faktor abiotik yang sangat mempengaruhi laju fotosintesis produsen adalah...",
            options: ["Kelembapan", "Cahaya Matahari", "Angin", "Topografi"],
            answer: "Cahaya Matahari"
        },
        {
            question: "Perubahan komunitas yang menuju keseimbangan lingkungan yang stabil disebut...",
            options: ["Eutrofikasi", "Suksesi", "Klimaks", "Biomassa"],
            answer: "Klimaks"
        },
        {
            question: "Daerah yang memiliki keanekaragaman hayati sangat tinggi dan dilindungi disebut...",
            options: ["Taman Kota", "Perkebunan", "Cagar Alam", "Pemukiman"],
            answer: "Cagar Alam"
        },
        {
            question: "Organisme yang hanya memakan produsen disebut...",
            options: ["Karnivora", "Omnivora", "Herbivora", "Dekomposer"],
            answer: "Herbivora"
        },
    ],

    // --- BAB 4: BIOTEKNOLOGI (20 SOAL) ---
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
        {
            question: "Enzim yang berfungsi memotong DNA pada situs spesifik dalam teknik rekayasa genetika adalah...",
            options: ["Ligase", "Polimerase", "Restriksi Endonuklease", "Reverse Transcriptase"],
            answer: "Restriksi Endonuklease"
        },
        {
            question: "Organisme yang telah disisipi gen dari spesies lain disebut...",
            options: ["Hibrida", "Klon", "Transgenik", "Mutan"],
            answer: "Transgenik"
        },
        {
            question: "Proses pembuatan alkohol dari gula menggunakan mikroorganisme *Saccharomyces cerevisiae* adalah contoh dari...",
            options: ["Fotosintesis", "Fermentasi", "Transplantasi", "Hidrolisis"],
            answer: "Fermentasi"
        },
        {
            question: "Pemanfaatan bakteri untuk membersihkan lingkungan yang tercemar (misalnya tumpahan minyak) disebut...",
            options: ["Bioindikator", "Bioremediasi", "Bioakumulasi", "Biomagnifikasi"],
            answer: "Bioremediasi"
        },
        {
            question: "Berikut adalah produk bioteknologi modern, KECUALI...",
            options: ["Insulin buatan", "Tanaman tahan hama", "Keju", "Vaksin subunit"],
            answer: "Keju"
        },
        {
            question: "Teknik perbanyakan tanaman secara vegetatif in vitro (dalam tabung) pada media nutrisi steril disebut...",
            options: ["Inseminasi buatan", "Kultur jaringan", "Hibridisasi", "Transgenik"],
            answer: "Kultur jaringan"
        },
        {
            question: "Peran plasmid dalam rekayasa genetika adalah sebagai...",
            options: ["Enzim", "Vektor (pembawa gen)", "Sel inang", "DNA target"],
            answer: "Vektor (pembawa gen)"
        },
        {
            question: "Kelebihan utama tanaman hasil rekayasa genetika (transgenik) dibandingkan tanaman konvensional adalah...",
            options: ["Memiliki rasa yang lebih enak", "Masa tanam lebih lama", "Memiliki sifat unggul spesifik (misalnya tahan hama)", "Lebih murah untuk diproduksi"],
            answer: "Memiliki sifat unggul spesifik (misalnya tahan hama)"
        },
        {
            question: "Mikroorganisme yang berperan dalam pembuatan tempe adalah...",
            options: ["Saccharomyces cerevisiae", "Rhizopus oryzae", "Acetobacter xylinum", "Lactobacillus bulgaricus"],
            answer: "Rhizopus oryzae"
        },
        {
            question: "Teknik kloning pada hewan bertujuan untuk...",
            options: ["Mengubah jenis kelamin", "Menghasilkan individu identik", "Menciptakan spesies baru", "Mengobati penyakit genetik"],
            answer: "Menghasilkan individu identik"
        },
        {
            question: "Zat hasil bioteknologi yang digunakan untuk membekukan susu dalam pembuatan keju adalah...",
            options: ["Lipase", "Amilase", "Renin (Rennet)", "Invertase"],
            answer: "Renin (Rennet)"
        },
        {
            question: "Bioteknologi di bidang forensik menggunakan teknik utama yaitu...",
            options: ["Kultur jaringan", "Terapi gen", "DNA Fingerprinting", "Kloning"],
            answer: "DNA Fingerprinting"
        },
        {
            question: "Salah satu dampak negatif Bioteknologi Modern adalah potensi munculnya...",
            options: ["Varietas unggul", "Spesies baru", "Keseimbangan ekosistem", "Resistensi hama terhadap pestisida alami"],
            answer: "Resistensi hama terhadap pestisida alami"
        },
        {
            question: "Pembuatan Nata de Coco melibatkan bakteri...",
            options: ["Bacillus subtilis", "Acetobacter xylinum", "Streptococcus lactis", "Escherichia coli"],
            answer: "Acetobacter xylinum"
        },
        {
            question: "Proses memasukkan gen asing ke dalam sel inang menggunakan vektor disebut...",
            options: ["Transformasi", "Transkripsi", "Translasi", "Replikasi"],
            answer: "Transformasi"
        },
        {
            question: "Bidang bioteknologi yang berkaitan dengan perbaikan kelainan genetik pada manusia disebut...",
            options: ["Bioinformatika", "Terapi gen", "Rekayasa lingkungan", "Kloning terapeutik"],
            answer: "Terapi gen"
        },
        {
            question: "Mikroorganisme yang digunakan dalam pembuatan antibiotik penisilin adalah...",
            options: ["Aspergillus oryzae", "Penicillium notatum", "Streptococcus mutans", "Rhizobium leguminosarum"],
            answer: "Penicillium notatum"
        },
        {
            question: "Enzim yang berfungsi menggabungkan kembali potongan-potongan DNA yang terpotong adalah...",
            options: ["Restriksi", "Ligase", "Polimerase", "Helikase"],
            answer: "Ligase"
        },
    ],
};


// === 2. LOGIKA UMUM (Tetap Sama) ===
const TOTAL_SOAL = 20;
const POIN_PER_SOAL = 5; 

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
            localStorage.setItem('kuisDataPemain', JSON.stringify({
                nama: nama,
                kelas: kelas,
                absen: absen
            }));
            alertMessage.style.display = 'none';
            
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
        window.location.href = 'index.html';
        return;
    }

    const userInfoElement = document.getElementById('user-info');
    if (userInfoElement) {
        userInfoElement.textContent = 
            `Selamat datang, ${userData.nama} (${userData.kelas} / ${userData.absen})`;
    }


    chapterListDiv.innerHTML = '';
    
    Object.keys(QUIZ_DATA).forEach(chapterName => {
        const totalSoal = QUIZ_DATA[chapterName].length;
        
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
    
    document.querySelectorAll('.start-quiz-btn').forEach(button => {
        button.addEventListener('click', function() {
            const chapter = this.getAttribute('data-chapter');
            localStorage.setItem('kuisCurrentChapter', chapter);
            localStorage.removeItem('kuisCurrentScore'); 
            localStorage.removeItem('kuisCurrentIndex'); 
            window.location.href = 'kuis.html';
        });
    });
}

if (document.getElementById('chapter-list')) {
    document.addEventListener('DOMContentLoaded', displayChapterList);
}


// === 5. FUNGSI Halaman KUIS (kuis.html) ===
function startQuizPage() {
    currentChapter = localStorage.getItem('kuisCurrentChapter');
    if (!currentChapter || !QUIZ_DATA[currentChapter]) {
        alert("Pilih bab terlebih dahulu!");
        window.location.href = 'bab.html';
        return;
    }
    
    currentQuestionIndex = parseInt(localStorage.getItem('kuisCurrentIndex')) || 0;
    score = parseInt(localStorage.getItem('kuisCurrentScore')) || 0;

    const chapterTitle = document.getElementById('chapter-title');
    if (chapterTitle) chapterTitle.textContent = currentChapter;
    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', checkAnswer);
    }
    
    loadQuestion();
}

function loadQuestion() {
    const questions = QUIZ_DATA[currentChapter];

    if (currentQuestionIndex < questions.length) {
        const currentQ = questions[currentQuestionIndex];
        
        const questionCounter = document.getElementById('question-counter');
        const questionText = document.getElementById('question-text');
        const optionsArea = document.getElementById('options-area');
        const submitBtn = document.getElementById('submit-btn');
        const feedback = document.getElementById('feedback');

        if (questionCounter) questionCounter.textContent = `Soal ${currentQuestionIndex + 1}/${questions.length}`;
        if (questionText) questionText.textContent = currentQ.question;
        
        if (optionsArea) optionsArea.innerHTML = ''; 
        selectedAnswer = null;
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Jawab';
            submitBtn.classList.remove('btn-warning');
            submitBtn.classList.add('btn-success');
        }
        if (feedback) feedback.textContent = '';


        if (optionsArea) {
             currentQ.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('btn', 'btn-outline-primary', 'option-btn', 'text-start'); // text-start agar opsi rata kiri
                button.addEventListener('click', () => selectAnswer(option, button));
                optionsArea.appendChild(button);
            });
        }

    } else {
        showResult();
    }
}

function selectAnswer(option, button) {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected', 'btn-primary');
        btn.classList.add('btn-outline-primary');
    });

    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary', 'selected');
    selectedAnswer = option;
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.disabled = false;
}

function checkAnswer() {
    if (!selectedAnswer) return;

    const currentQ = QUIZ_DATA[currentChapter][currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedback');
    const submitBtn = document.getElementById('submit-btn');
    
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === currentQ.answer) {
        score += POIN_PER_SOAL; 
        if (feedback) {
            feedback.textContent = "✅ Jawaban Benar! Anda mendapat 5 poin.";
            feedback.classList.remove('text-danger');
            feedback.classList.add('text-success');
        }

    } else {
        if (feedback) {
            feedback.textContent = `❌ Jawaban Salah. Jawaban yang benar adalah: ${currentQ.answer}`;
            feedback.classList.remove('text-success');
            feedback.classList.add('text-danger');
        }
    }

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

    localStorage.setItem('kuisCurrentScore', score);
    
    if (submitBtn) {
        submitBtn.textContent = 'Lanjut';
        submitBtn.removeEventListener('click', checkAnswer);
        submitBtn.addEventListener('click', nextQuestion);
        submitBtn.classList.remove('btn-success');
        submitBtn.classList.add('btn-warning');
        submitBtn.disabled = false;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    localStorage.setItem('kuisCurrentIndex', currentQuestionIndex);
    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.removeEventListener('click', nextQuestion);
        submitBtn.addEventListener('click', checkAnswer);
    }
    
    loadQuestion();
}

function showResult() {
    window.location.href = 'hasil.html';
}

if (document.getElementById('quiz-area')) {
    document.addEventListener('DOMContentLoaded', startQuizPage);
}


// === 6. FUNGSI Halaman HASIL (hasil.html) ===
function displayResultPage() {
    const finalScore = parseInt(localStorage.getItem('kuisCurrentScore')) || 0;
    const userData = JSON.parse(localStorage.getItem('kuisDataPemain'));
    const resultMessageDiv = document.getElementById('result-message');
    const restartBtn = document.getElementById('restart-btn');

    const finalScoreElement = document.getElementById('final-score');
    if (finalScoreElement) finalScoreElement.textContent = finalScore;
    
    const playerDataElement = document.getElementById('player-data');
    if (playerDataElement) {
        playerDataElement.textContent = 
            `Pemain: ${userData ? userData.nama : 'Anonim'} | Bab: ${localStorage.getItem('kuisCurrentChapter') || 'Tidak diketahui'}`;
    }


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
            <div class="alert alert-danger mt-4 text-center">
                <h3 class="alert-heading">Coba Lagi! 😢</h3>
                <p class="mb-0">Nilai Anda ${finalScore}. Jangan menyerah, pelajari lagi materinya!</p>
                

[Image of Try Again]

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
    
    if (resultMessageDiv) resultMessageDiv.innerHTML = messageHtml;

    localStorage.removeItem('kuisCurrentScore');
    localStorage.removeItem('kuisCurrentIndex');
    // localStorage.removeItem('kuisCurrentChapter'); // Dibiarkan agar ditampilkan di hasil

    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            window.location.href = 'bab.html';
        });
    }
}

if (document.getElementById('result-area')) {
    document.addEventListener('DOMContentLoaded', displayResultPage);
}
