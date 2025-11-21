// BAGIAN INI DI script.js
if (document.getElementById('data-form')) {
    document.getElementById('data-form').addEventListener('submit', function(e) {
        
        // KUNCI PENTING: Mencegah browser me-reload halaman.
        e.preventDefault(); 
        
        const nama = document.getElementById('nama').value.trim();
        const kelas = document.getElementById('kelas').value.trim();
        const absen = document.getElementById('absen').value.trim();
        const alertMessage = document.getElementById('alert-message');

        if (nama && kelas && absen) {
            // Data tersimpan dengan aman
            localStorage.setItem('kuisDataPemain', JSON.stringify({
                nama: nama,
                kelas: kelas,
                absen: absen
            }));
            alertMessage.style.display = 'none';
            
            // Pengalihan hanya terjadi jika validasi berhasil
            window.location.href = 'bab.html';
        } else {
            alertMessage.style.display = 'block';
        }
    });
}
