block = document.querySelector('#block'),
button = document.querySelector('#button');

button.addEventListener('click', () => {
    
    block.classList.toggle('active');
});