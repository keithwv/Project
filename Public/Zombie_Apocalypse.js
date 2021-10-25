document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#Next-button')
    let content = document.querySelector('#content')
    let choice1 = document.querySelector('#radio1')
    let choice2 = document.querySelector('#radio2')
    
    choice1.addEventListener("click", function() {
        button.addEventListener('click', function() {
            content.innerHTML = "<h1> New Scene! <h1>"
        })
    });
    choice2.addEventListener("click", function() {
        button.addEventListener('click', function() {
            content.innerHTML = "<h1> Die! <h1>"
    })
})
});
