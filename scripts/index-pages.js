const formEl = document.querySelector(".comment__form");

const commentsArray = [];


const createComment = (commentObj) => {

    const nameEl = document.createElement("p");
    nameEl.innerHTML = commentObj.name;
    const commentEl = document.createElement("p");
    commentEl.innerText = commentObj.comment;
    const commentDiv = document.createElement("div");
    
    commentDiv.appendChild(nameEl);
    commentDiv.appendChild(commentEl);
    
    return commentDiv;
}

const loadComments = () => {
    const commentsParent = document.querySelector(".comments");

    commentsParent.innerHTML = "";

    commentsArray.forEach(comment => {
        const commentEl = createComment(comment);
        commentsParent.appendChild(commentEl);
    });
}

const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const comment = event.target.comment.value;

    commentsArray.push({name, comment, date});
    loadComments();
}

// if (commentsArray.length) {
//     loadComments();
// }

formEl.addEventListener("submit", handleSubmit);