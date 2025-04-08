// Alert Button
document.getElementById('alertMe').onclick = function() {
    alert('Hello world!');
};

// Hover Button
const hoverButton = document.getElementById('hoverButton');

hoverButton.onmouseover = function() {
    hoverButton.style.background = 'lightblue';
};

hoverButton.onmouseleave = function() {
    hoverButton.style.background = 'lightgreen';
};

// Incrementing Button with If-Else Color Change
let count = 0;
const counterParagraph = document.getElementById('counter');

document.getElementById('buttonCounter').onclick = function() {
    count += 1;
    counterParagraph.innerHTML = 'Count: ' + count;

    if (count % 2 === 0) {
        counterParagraph.style.color = 'blue';
    } else {
        counterParagraph.style.color = 'red';
    }
};

// For Loop
const container = document.getElementById('container');

for (let i = 1; i <= 5; i++) {
    container.append('This is message number ' + i);
    container.append(document.createElement('br'));
}
