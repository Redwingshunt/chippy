// Hover event for .main-head
document.querySelector('.main-head').addEventListener('mouseover', function() {
    var randomX = Math.floor(Math.random() * 100) - 50;  // Range: -50 to 50
    var randomY = Math.floor(Math.random() * 100) - 50;  // Range: -50 to 50

    // Apply translate transform and color change
    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
    this.style.color = 'red';

    // Correct reference to body
    document.body.style.background = 'black';
});

// Click event for .clickme button
document.querySelector('.clickme').addEventListener('click', function() {
    // Correctly change the color of the span element with class 'span-A'
    document.querySelector('.span-A').style.color = "green";
    document.querySelector('.clickme').style.background = "black";
});
