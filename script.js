// ==============================
// FITUR 1: DARK MODE TOGGLE
// ==============================

const darkToggleBtn = document.querySelector('#dark-toggle');
const body = document.body;

darkToggleBtn.addEventListener('click', function() {
  // Toggle class dark-mode di body
  body.classList.toggle('dark-mode');

  // Cek apakah dark mode sekarang aktif
  const isDarkMode = body.classList.contains('dark-mode');

  // Update teks tombol
  if (isDarkMode) {
    darkToggleBtn.textContent = '☀️ Light Mode';
  } else {
    darkToggleBtn.textContent = '🌙 Dark Mode';
  }
});
// ==============================
// FITUR 2: COUNTER
// ==============================

let count = 0;
const angkaDisplay = document.querySelector('#angka-counter');
const pesanDisplay = document.querySelector('#counter-pesan');
const btnTambah = document.querySelector('#btn-tambah');
const btnKurang = document.querySelector('#btn-kurang');

function updatePesan(n) {
  if (n === 0) pesanDisplay.textContent = 'Yuk mulai minum air!';
  else if (n < 4) pesanDisplay.textContent = 'Kurang minum nih...';
  else if (n < 8) pesanDisplay.textContent = 'Lumayan, terus tambah! 💧';
  else pesanDisplay.textContent = 'Keren! Sudah cukup minum air hari ini! 🎉';
}

btnTambah.addEventListener('click', function() {
  count++;
  angkaDisplay.textContent = count;
  updatePesan(count);
});

btnKurang.addEventListener('click', function() {
  if (count > 0) {
    count--;
    angkaDisplay.textContent = count;
    updatePesan(count);
  }
});

