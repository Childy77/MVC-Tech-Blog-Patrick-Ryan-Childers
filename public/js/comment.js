const button = document.querySelector('#comment-button');
async function commentClickHandler (event) {
    const content = event.target.previousElementSibling.value;
    const response = await fetch("/api/comments/", {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
    }) 
    const data = await response.json();
    console.log(data);
}

button.addEventListener('click', commentClickHandler);