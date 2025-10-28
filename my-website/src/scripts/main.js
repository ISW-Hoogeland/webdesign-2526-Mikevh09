// This file contains the JavaScript code for the website. It includes functions for user interaction and DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }

    // Additional functions can be added here
});