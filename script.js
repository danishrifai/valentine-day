const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const phase3 = document.getElementById('phase3');
const mainContent = document.getElementById('main-content');

// 1. Logika Tombol No Lari
function moveButton() {
    const padding = 50;
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - padding);
    
    btnNo.style.position = 'fixed'; 
    btnNo.style.left = `${Math.max(padding, x)}px`;
    btnNo.style.top = `${Math.max(padding, y)}px`;
}

btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// 2. Transisi & Putar Musik
btnYes.addEventListener('click', () => {
    phase3.style.display = 'none';
    mainContent.style.display = 'block';
    
    // Putar file MP3 dari folder assets
    const mySong = document.getElementById('mySong');
    if (mySong) {
        mySong.play().catch(error => {
            console.log("Musik butuh interaksi user untuk mulai.");
        });
    }
});

// 3. Logika Koleksi Bunga & Taman Tumbuh
let flowerCount = 0;
const totalFlowers = 5;

function collectFlower(element, flowerType) {
    // 1. Sembunyikan bunga yang diklik di menu pilihan
    element.style.opacity = '0';
    element.style.pointerEvents = 'none';

    // 2. Buat elemen bunga yang "tumbuh" di area taman
    const garden = document.getElementById('garden-result');
    if (garden) {
        const flowerWrapper = document.createElement('div');
        flowerWrapper.className = 'flower-stem';
        
        // Acak tinggi batang supaya lebih natural (antara 80px sampai 130px)
        const randomHeight = Math.floor(Math.random() * 50) + 80; 

        flowerWrapper.innerHTML = `
            <div class="flower-head">${flowerType}</div>
            <div class="stem" style="height: ${randomHeight}px;"></div>
        `;

        garden.appendChild(flowerWrapper);
    }

    // 3. Logika Selesai: Munculkan pesan ucapan
    flowerCount++;
    if (flowerCount === totalFlowers) {
        setTimeout(() => {
            const finalBouquet = document.getElementById('final-bouquet');
            const flowerGarden = document.getElementById('flower-garden');
            
            // Hapus class hidden agar teks muncul (berkat CSS display: none !important tadi)
            if (finalBouquet) {
                finalBouquet.classList.remove('hidden');
            }
            
            // Sembunyikan pilihan bunga asal biar rapi
            if (flowerGarden) {
                flowerGarden.style.display = 'none';
            }
        }, 1000); // Jeda 1 detik biar bunga terakhir selesai tumbuh dulu
    }
}
