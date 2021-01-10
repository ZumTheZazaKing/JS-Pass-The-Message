function store(){

    let previousMessage = document.getElementById('message');

    previousMessage.innerHTML = localStorage.getItem('message');

    let userMessage = document.getElementById('userMessage');

    let result = document.getElementById('result');

    localStorage.setItem('message', userMessage.value);

    previousMessage.classList.remove('hide');

    result.classList.remove('hide');

    userMessage.value = "";

}