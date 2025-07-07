const favoriteIcon = document.querySelectorAll('.favorite-icon');
// console.log(favoriteIcon);

favoriteIcon.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('filled');
        if (button.classList.contains('filled')) {
            button.innerHTML = '❤';
            button.style.color = 'red';
            button.style.transform = 'scale(1.2)';
            button.style.transition = 'all 0.3s ease';
        } else {
            button.innerHTML = '♡';
            button.style.color = '';
            button.style.transform = '';
            button.style.transition = '';
        }
    })

})