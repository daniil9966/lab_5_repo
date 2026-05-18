let systemInfo = navigator.userAgent;

localStorage.setItem('myOS', systemInfo);

let savedInfo = localStorage.getItem('myOS');

let footerElement = document.getElementById('os-footer');
footerElement.innerText = "Ваша система: " + savedInfo;



let variant = 2;
let url = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`;

//запит
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (comments) {
        let commentsDiv = document.getElementById('comments-section');

        comments.forEach(function (comment) {
            let p = document.createElement('p');
            p.innerText = comment.name + " каже: " + comment.body;
            commentsDiv.appendChild(p);
        });
    });


//таймер
setTimeout(function () {
    document.getElementById('feedback-modal').style.display = 'block';
}, 60000);


let currentHour = new Date().getHours(); 

if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove('dark-theme');
} else {
    document.body.classList.add('dark-theme');
}

let themeButton = document.getElementById('theme-toggle');
themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});