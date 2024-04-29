import React, { useEffect, useState } from "react";
import CommentBox from "./CommentBox";
import { data } from "./data";

function Index() {
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    let storedData = localStorage.getItem("commentsData");
    if (storedData) {
      storedData = JSON.parse(storedData);
      setCommentsData(storedData);
    } else {
      setDataToLocal(data);
    }
  }, []);

  const setDataToLocal = (comments) => {
    localStorage.setItem("commentsData", JSON.stringify(comments));
    setCommentsData(comments);
  };
  const updatedCommentsAfterDelete = (commentId, data) => {
    let copiedData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < copiedData.length; i++) {
      const comment = copiedData[i];
      if (comment.id === commentId) {
        copiedData.splice(i, 1);
        i--;
      }
      if (comment.replies.length > 0) {
        comment.replies = updatedCommentsAfterDelete(
          commentId,
          comment.replies
        );
      }
    }
    return copiedData;
  };
  const updateComments = (newComment, commentId, data) => {
    const copiedData = JSON.parse(JSON.stringify(data));
    for (const comment of copiedData) {
      if (comment.id === commentId) {
        comment.replies.push({
          id: new Date().getTime(),
          username: "KK",
          comment: newComment,
          replies: [],
        });
      }
      if (comment.replies.length > 0 || comment.replies.length <= 200) {
        comment.replies = updateComments(
          newComment,
          commentId,
          comment.replies
        );
      }
    }
    return copiedData;
  };
  const updatedCommentsAfterUpate = (updatedComment, commentId, data) => {
    const copiedData = JSON.parse(JSON.stringify(data));
    for (const comment of copiedData) {
      if (comment.id === commentId) {
        comment.comment = updatedComment;
      }
      if (comment.replies.length > 0 || comment.replies.length <= 200) {
        comment.replies = updatedCommentsAfterUpate(
          updatedComment,
          commentId,
          comment.replies
        );
      }
    }
    return copiedData;
  };
  const addReply = (newComment, commentId) => {
    const updatedData = updateComments(newComment, commentId, commentsData);
    setCommentsData(updatedData);
    setDataToLocal(updatedData);
  };
  const deleteComment = (commentId) => {
    const updatedData = updatedCommentsAfterDelete(commentId, commentsData);
    setCommentsData(updatedData);
    setDataToLocal(updatedData);
  };

  const editComment = (updatedComment, commentId) => {
    const updatedData = updatedCommentsAfterUpate(
      updatedComment,
      commentId,
      commentsData
    );
    setCommentsData(updatedData);
    setDataToLocal(updatedData);
  };
  return (
    <>
      <div>Nested Comments</div>
      <CommentBox
        data={commentsData}
        deleteComment={deleteComment}
        addReply={addReply}
        editComment={editComment}
      />
    </>
  );
}

export default Index;
