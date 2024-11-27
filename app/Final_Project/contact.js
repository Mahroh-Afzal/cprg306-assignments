import { styles } from './styles.js';
import { JSDOM } from 'jsdom';

// Simulate the DOM using jsdom for Node.js environment
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

export function renderContactForm() {
    document.body.style.backgroundColor = styles.colors.lightBlue;

    const form = document.createElement('form');
    form.style = styles.form;

    // Function to create input fields dynamically
    const createInput = (labelText, id) => {
        const label = document.createElement('label');
        label.textContent = labelText;

        const input = document.createElement('input');
        input.id = id;

        label.appendChild(input);
        form.appendChild(label);
    };

    // Create fields
    createInput('Name', 'name');
    createInput('Email', 'email');

    // Create textarea for message
    const messageBox = document.createElement('textarea');
    messageBox.id = 'message';
    form.appendChild(messageBox);

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style = `background-color: ${styles.colors.deepOrange}; ${styles.buttons}`;

    // Add event listener for form submission
    submitButton.addEventListener('click', event => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
        } else {
            alert('Message has been sent!');
            form.reset();
        }
    });

    form.appendChild(submitButton);

    // Append the form to the document body
    document.body.appendChild(form);

    // Optionally log the form to the console for debugging purposes
    console.log(dom.serialize());
}
