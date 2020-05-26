const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', event => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});

leftMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');

    console.log(event.target);
    console.log(event);

    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});



function submit(evt) {
    evt.preventDefault();
}

function filter(evt) {
    evt.preventDefault();
    let input = document.querySelector('.search__form-input');
    let inputValue = input.value.toUpperCase();
    let cards = document.querySelectorAll('.tv-shows__item');

    cards.forEach(
        function getMatch(info) {

            let heading = info.querySelector('h4');
            let headingContent = heading.innerHTML.toUpperCase();

            if (headingContent.includes(inputValue)) {
                info.style.display = '';
            } else {
                info.style.display = 'none';
            }
        }
    )
}

function autoReset() {
    let input = document.querySelector('#site-search');
    let cards = document.querySelectorAll('.item');

    cards.forEach(
        function getMatch(info) {
            if (input.value == null, input.value == "") {
                info.classList.remove('show');
                info.classList.remove('show');
            } else {
                return;
            }
        }
    )
}

let form = document.querySelector('.search__form');

form.addEventListener('keyup', filter);

form.addEventListener('submit', submit);