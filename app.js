function init () {
    const faqList = document.querySelectorAll('.list__item--heading')

    function createBtn () {
        const btn = document.createElement('button');
        btn.classList.add('list__item--button');
        return btn;
    }

    function toggleElement (itemText, element, btn) {
        itemText.classList.toggle('item__text--hidden');
        element.classList.toggle('item__heading--active');
        btn.classList.toggle('list__item--rotatedButton');
    }

    faqList.forEach( element => {        
        const btn = createBtn();
        const itemText = element.parentElement.lastElementChild;

        element.addEventListener('click', toggleElement.bind(null,itemText, element, btn));
        element.appendChild(btn);
    })
}

window.addEventListener('DOMContentLoaded', init);