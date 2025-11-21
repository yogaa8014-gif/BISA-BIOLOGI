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
        // PERHATIKAN: Tidak ada lagi teks 

[Image of Try Again]
 di sini
        messageHtml = `
            <div class="alert alert-danger mt-4 text-center">
                <h3 class="alert-heading">Coba Lagi! 😢</h3>
                <p class="mb-0">Nilai Anda ${finalScore}. Jangan menyerah, pelajari lagi materinya!</p>
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
    

    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            window.location.href = 'bab.html';
        });
    }
}

if (document.getElementById('result-area')) {
    document.addEventListener('DOMContentLoaded', displayResultPage);
}
