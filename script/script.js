// Alert Button Action
document.getElementById('alertMe').addEventListener('click', function () {
    alert('Preorder Golden Doodle');
});

// Hover Button Action
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('click', function () {
    window.location.href = 'contact.html';
});
hoverButton.addEventListener('mouseover', function () {
    hoverButton.style.backgroundColor = 'lightgreen';
});
hoverButton.addEventListener('mouseleave', function () {
    hoverButton.style.backgroundColor = 'lightblue';
});

// Incrementing Counter Button with Color Change
let count = 0;
document.getElementById('buttonCounter').addEventListener('click', function () {
    count += 1;
    const counterDisplay = document.getElementById('counter');
    counterDisplay.textContent = 'Count: ' + count;

    // Random color generator for fun
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    counterDisplay.style.color = randomColor;
});

// Loop - "Golden Doodle dog is awesome" 7 times with different colors
const container = document.getElementById('container');
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal', 'magenta'];

for (let i = 0; i < 7; i++) {
    const para = document.createElement('p');
    para.textContent = 'Golden Doodle dog is awesome';
    para.style.color = colors[i % colors.length];
    container.appendChild(para);
}
