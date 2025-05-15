const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');

    // Закрыть остальные
    faqItems.forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
  });
});

document.addEventListener('click', function(e) {
const heart = document.createElement('div');
heart.textContent = '💚';
heart.style.position = 'absolute';
heart.style.left = e.pageX + 'px';
heart.style.top = e.pageY + 'px';
heart.style.fontSize = '24px';
heart.style.animation = 'fade 1s ease forwards';
document.body.appendChild(heart);
setTimeout(() => heart.remove(), 1000);
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
threshold: 0.1
};
