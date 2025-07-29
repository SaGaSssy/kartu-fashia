// Membuat hati-hati yang melayang
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💝';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 6 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    document.getElementById('heartsContainer').appendChild(heart);
    
    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Buat hati baru setiap 2 detik
setInterval(createFloatingHeart, 2000);

// Buat beberapa hati di awal
for(let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 400);
}

// Efek klik pada kartu (Desktop & Mobile)
const greetingCard = document.getElementById('greetingCard');

// Touch support untuk mobile
let isCardFlipped = false;

greetingCard.addEventListener('click', function() {
    isCardFlipped = !isCardFlipped;
    this.style.transform = isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
});

// Touch events untuk mobile
greetingCard.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Mencegah scroll saat touch kartu
});

greetingCard.addEventListener('touchend', function(e) {
    e.preventDefault();
    isCardFlipped = !isCardFlipped;
    this.style.transform = isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
});

// Efek sparkle tambahan saat hover/touch
const card = document.getElementById('greetingCard');

// Fungsi untuk membuat efek sparkle
function createSparkleEffect() {
    for(let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = (Math.random() * window.innerWidth) + 'px';
            sparkle.style.top = (Math.random() * window.innerHeight) + 'px';
            sparkle.style.color = '#ffd700';
            sparkle.style.fontSize = '18px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkle 1s ease-out forwards';
            sparkle.style.zIndex = '100';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 100);
    }
}

// Desktop hover
card.addEventListener('mouseenter', createSparkleEffect);

// Mobile touch
card.addEventListener('touchstart', function(e) {
    createSparkleEffect();
});