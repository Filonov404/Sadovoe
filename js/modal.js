

const closeBtn = document.querySelector('[data-close]');
const openBtn = document.querySelector('[data-modal]');
const modal = document.querySelector('.reqvisits-modal');

openBtn.addEventListener('click', function () {
    console.log('click')
    modal.classList.add('show');
    modal.classList.remove('hide');
});

closeBtn.addEventListener('click', function () {
    console.log('click')
    modal.classList.remove('show');
    modal.classList.add('hide');
});
