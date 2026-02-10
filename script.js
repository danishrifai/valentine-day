const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const phase3 = document.getElementById('phase3');
const mainContent = document.getElementById('main-content');
const mySong = document.getElementById('mySong');

// 1. Logika Tombol No Lari
function moveButton() {
    const padding = 50;
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - padding);
    
    btnNo.style.position = 'fixed'; // Gunakan fixed agar tidak terpengaruh scroll
    btnNo.style.left = `${Math.max(padding, x)}px`;
    btnNo.style.top = `${Math.max(padding, y)}px`;
}

btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// 2. Transisi ke Konten Utama & Putar Musik (Updated)
btnYes.addEventListener('click', () => {
    phase3.style.display = 'none';
    mainContent.style.display = 'block';
    
    // Perintah putar video youtube (suaranya saja yang terdengar)
    const iframe = document.getElementById('video');
    iframe.src += "&autoplay=1"; 
});
    
    // Memastikan musik berputar saat interaksi klik
    if (mySong) {
        mySong.volume = 0.7; // Atur volume ke 70%
        mySong.play().catch(error => {
            console.log("Browser memblokir pemutaran otomatis, tapi klik ini seharusnya sudah memberi izin.");
        });
    }
});

// 3. Logika Koleksi Bunga
let flowerCount = 0;
const totalFlowers = 5;

function collectFlower(element) {
    element.style.opacity = '0';
    element.style.pointerEvents = 'none';
    flowerCount++;
    
    if (flowerCount === totalFlowers) {
        document.getElementById('flower-garden').style.display = 'none';
        document.getElementById('final-bouquet').classList.remove('hidden');
    }
}

