const dialog = document.querySelector('#lightbox');
const fullImage = document.querySelector('#lightbox-image');
let lastTrigger;
document.querySelectorAll('[data-full]').forEach(button => {
  button.addEventListener('click', () => {
    lastTrigger = button;
    fullImage.src = button.dataset.full;
    fullImage.alt = button.querySelector('img').alt;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  lastTrigger?.focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
