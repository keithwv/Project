document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#Next-button')
    let content = document.querySelector('#content')
    button.addEventListener('click', function() {
        content.innerHTML = "<h1> New Scene! <h1>"
    });
});
