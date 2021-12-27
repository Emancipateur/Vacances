import React, { useEffect, useState } from "react";
import Profil from "./Profil";

const Comment = ({ newPost, background }) => {
  const [dataPost, setDataPost] = useState([]);

  console.log(background);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setDataPost(data));
  }, []);

  return (
    <div className="comment" style={{background :background}}>
      <h2>Section Commentaires</h2>
      {dataPost
        .filter((item) => item.id < 10)
        .map((item) => (
          <div className="commentContent">
            <Profil />
            <div className="commentBody">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      {newPost ? (
        <div className="newComment">
          <Profil userName={newPost.name} />
          <div className="newCommentBody">
            <h3>{newPost.title}</h3>
            <p>{newPost.body}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
