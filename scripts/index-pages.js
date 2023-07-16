const formEl = document.querySelector(".comment__form");

const commentsArray = [];


const createComment = (commentObj) => {

    const nameEl = document.createElement("p");
    nameEl.innerHTML = commentObj.name;
    nameEl.classList.add("comments__section-details-name")

    const dateEl = document.createElement("p");
    dateEl.innerText = commentObj.date;
    dateEl.classList.add("comments__section-details-date");

    const commentEl = document.createElement("p");
    commentEl.innerText = commentObj.comment;
    commentEl.classList.add("comments__section-post");

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("comments__section-details");
    detailsDiv.appendChild(nameEl);
    detailsDiv.appendChild(dateEl);

    const commentSectionDiv = document.createElement("div");
    commentSectionDiv.classList.add("comments__section");

    commentSectionDiv.appendChild(detailsDiv);
    commentSectionDiv.appendChild(commentEl);

    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("comments__img");
    
    const commentsDiv = document.createElement("div");
    commentsDiv.classList.add("comments");
    
    commentsDiv.appendChild(emptyDiv);
    commentsDiv.appendChild(commentSectionDiv);
    
    console.log(commentsDiv)

    return commentsDiv;
}

const loadComments = () => {
    const commentsParent = document.querySelector(".comment__dom");

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
    
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1 < 10 ? "0" +( dateObj.getMonth() + 1) : dateObj.getMonth() + 1;
    const date = month + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
    
    commentsArray.unshift({name, date, comment});
    loadComments();
}

// if (commentsArray.length) {
//     loadComments();
// }

formEl.addEventListener("submit", handleSubmit);