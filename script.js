
const words = [
  "Yapay Zeka Developer'ım",
  "Front-end Developer'ım",
  "Mobil Developer'ım",
  "Veri Analisti'yim",
  "Full Stack Developer'ım"
  
];

let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  const typewriter = document.getElementById('typewriter');
  isEnd = false;
  typewriter.innerHTML = currentWord.join('');

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord.push(words[i][j]);
      j++;
      typewriter.innerHTML = currentWord.join('');
    }

    if (isDeleting && j <= words[i].length) {
      currentWord.pop();
      j--;
      typewriter.innerHTML = currentWord.join('');
    }

    if (j == words[i].length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(loop, 1800); // bekleme süresi artırıldı
      return;
    }

    if (isDeleting && j === 0) {
      currentWord = [];
      isDeleting = false;
      i++;
      if (i === words.length) {
        i = 0;
      }
    }
  }
  const speed = isEnd ? 1800 : isDeleting ? 80 : 120; // hızlar yavaşlatıldı
  setTimeout(loop, speed);
}

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  if(menuIcon && navbar) {
    menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('active');
      menuIcon.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    // Menüden bir linke tıklanınca menü kapanır
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('active');
        menuIcon.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
        document.body.classList.remove('menu-open');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', loop);

// Fade-in animasyonları için scroll event
function revealOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

document.addEventListener('DOMContentLoaded', function() {
  // Açılış animasyonu sonrası fade-in'leri başlat
  const homeContent = document.querySelector('.home-content');
  if(homeContent) {
    homeContent.addEventListener('animationend', function(e) {
      if(e.animationName === 'introHome') {
        // fade-in animasyonlarını başlat
        revealOnScroll();
      }
    });
  }
});

// FORM SUBMIT (Formspree ile):
let formDOM = document.querySelector("#contact-form");
formDOM.addEventListener('submit', function(event) {
    // event.preventDefault(); // Formspree'ye gönderim için engelleme yok!
    alert("Mesajınız iletildi. Teşekkürler!");
});

