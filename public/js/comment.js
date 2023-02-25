const button = document.querySelector('#comment-button');
async function commentClickHandler(event) {
    const content = event.target.previousElementSibling.value;

    if (content) {

const post_id = document.location.pathname.substring(6);

        const response = await fetch("/api/comments/", {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
        const data = await response.json();
        console.log(data);
    }
    else {
        alert("comment is required");
      }
}

button.addEventListener('click', commentClickHandler);