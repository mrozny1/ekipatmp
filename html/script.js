document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    document.getElementById("add-comment").addEventListener("click", function () {
        const author = document.getElementById("author").value;
        const commentText = document.getElementById("comment").value;

        if (author && commentText) {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerHTML = `
                <h3>${author}</h3>
                <p>${commentText}</p>
            `;
            commentList.appendChild(commentDiv);

            // Wyczyść pola formularza
            document.getElementById("author").value = "";
            document.getElementById("comment").value = "";
        }
    });
});
