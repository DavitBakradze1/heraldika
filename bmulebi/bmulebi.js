function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        // Find the nearest text element related to this button
        const textElement = button.previousElementSibling;
        if (textElement && textElement.classList.contains('link')) {
            copyText(textElement.innerText);
        }
    });
})