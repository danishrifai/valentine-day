const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const phase3 = document.getElementById('phase3');
const mainContent = document.getElementById('main-content');

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

// 2. Transisi ke music
btnYes.addEventListener('click', () => {
    phase3.style.display = 'none';
    mainContent.style.display = 'block';
    
    // Putar file MP3 dari folder assets
    const mySong = document.getElementById('mySong');
    if (mySong) {
        mySong.play();
    }
});

// 3. Logika Koleksi Bunga
let flowerCount = 0;
const totalFlowers = 5;

function collectFlower(element, flowerType) {
    // 1. Sembunyikan bunga yang diklik
    element.style.opacity = '0';
    element.style.pointerEvents = 'none';

    // 2. Buat elemen bunga yang "tumbuh"
    const garden = document.getElementById('garden-result');
    const flowerWrapper = document.createElement('div');
    flowerWrapper.className = 'flower-stem';
    
    // Acak tinggi batang supaya lebih natural
    const randomHeight = Math.floor(Math.random() * 50) + 80; 

    flowerWrapper.innerHTML = `
        <div class="flower-head">${flowerType}</div>
        <div class="stem" style="height: ${randomHeight}px;"></div>
    `;

    garden.appendChild(flowerWrapper);

    // 3. Logika selesai
    flowerCount++;
    if (flowerCount === totalFlowers) {
        setTimeout(() => {
            document.getElementById('final-bouquet').classList.remove('hidden');
            // Opsional: sembunyikan instruksi klik setelah selesai
            document.getElementById('flower-garden').style.display = 'none';
        }, 1000);
    }
}


