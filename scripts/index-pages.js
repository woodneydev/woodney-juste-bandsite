const formEl = document.querySelector(".comments__form");

const commentsArray = [
  {
    name: "Nelly Furtado",
    comment:
      "Love your recent concert tour, we have to connect sometime and collaborate",
    date: "02/22/2023",
  },

  {
    name: "Lupe",
    comment:
      "You guys rock!",
    date: "12/22/2022",
  },

  {
    name: "Ice",
    comment:
      "I want my money back. Waste of time",
    date: "12/22/2022",
  }
];

const createComment = (commentObj) => {
  const nameEl = document.createElement("p");
  nameEl.innerHTML = commentObj.name;
  nameEl.classList.add("comment__section-details-name");

  const dateEl = document.createElement("p");
  const date = new Date(commentObj.timestamp)
  const formatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  dateEl.innerText = formatted;
  dateEl.classList.add("comment__section-details-date");

  const commentEl = document.createElement("p");
  commentEl.innerText = commentObj.comment;
  commentEl.classList.add("comment__section-post");

  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("comment__section-details");
  detailsDiv.appendChild(nameEl);
  detailsDiv.appendChild(dateEl);

  const commentSectionDiv = document.createElement("div");
  commentSectionDiv.classList.add("comment__section");

  commentSectionDiv.appendChild(detailsDiv);
  commentSectionDiv.appendChild(commentEl);

  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("comment__img");

  const commentsDiv = document.createElement("div");
  commentsDiv.classList.add("comment");

  commentsDiv.appendChild(emptyDiv);
  commentsDiv.appendChild(commentSectionDiv);

  console.log(commentsDiv);

  return commentsDiv;
};

const loadComments = () => {
  const commentsParent = document.querySelector(".comment__dom");

  commentsParent.innerHTML = "";
  
  axios.get("https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4")
  .then(result => {
    const {data} = result;
    commentsArray.splice(0, commentsArray.length, ...data)
    commentsArray.sort((first,second) => second.timestamp - first.timestamp )
  
    console.log(commentsArray);
    
    commentsArray.forEach((comment) => {
      const commentEl = createComment(comment);
      commentsParent.appendChild(commentEl);
    });
  })
};

const handleSubmit = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const comment = event.target.comment.value;
  const timestamp = Date.now()
  // const dateObj = new Date();
  // const month =
  //   dateObj.getMonth() + 1 < 10
  //     ? "0" + (dateObj.getMonth() + 1)
  //     : dateObj.getMonth() + 1;
  // const date = month + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();

  const postObj = { name, comment}
  
  axios.post("https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4", postObj)
    .then( ({data}) => {
      console.log(data)
      return data
    })
    .then(date => {
      formEl.name.value = "";
      formEl.comment.value ="";
      loadComments();
    })
    .catch(error => console.log("there was an error:", error))
};

loadComments();

formEl.addEventListener("submit", handleSubmit);
