let scrollpos = window.scrollY;
const header = document.querySelector("header");
const scrollChange = 150;
const add_class_on_scroll = () => header.classList.add("header_scroll");
const remove_class_on_scroll = () => header.classList.remove("header_scroll");

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= scrollChange) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
})


//-----------------------POPUP---------------------
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
let fixBlocks = document.querySelectorAll('.fix-block');

openModalButtons.forEach (button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    document.body.style.paddingRight = paddingOffset;
    fixBlocks.forEach((el) => {
        el.style.paddingRight = paddingOffset;
    })
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = '0px';
    fixBlocks.forEach((el) => {
        el.style.paddingRight = '0px';
    })
}