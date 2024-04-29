import React, { useEffect, useState } from "react";
const image =
  "https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg";

function CommentBox({ data, addReply, deleteComment, editComment }) {
  return data?.map((comment, index) => (
    <div className="ml-5 mt-5" key={index}>
      <EachComment
        comment={comment}
        key={comment.id}
        addReply={addReply}
        deleteComment={deleteComment}
        editComment={editComment}
      />
      {comment.replies && (
        <CommentBox
          data={comment.replies}
          addReply={addReply}
          key={comment.id}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      )}
    </div>
  ));
}

function EachComment({ comment, addReply, deleteComment, editComment }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);
  const [commentMessage, setCommentMessage] = useState(comment?.comment || "");
  const handleReplyBox = () => setShowReplyBox(true);
  const handleAddSubmit = (e) => {
    e.preventDefault();
    addReply(e.target.comment.value, comment.id);
    setShowReplyBox(false);
  };
  const handleUpdate = () => {
    if (!showEditBox) {
      setShowEditBox(true);
    } else {
      editComment(commentMessage, comment.id);
      setShowEditBox(false);
    }
  };
  return (
    <>
      <div className="flex">
        <img src={image} alt="profileImage" width={30} height={30} />
        <div className="flex justify-between">
          <p className="ml-5">{comment.username}</p>
          <div className="flex">
            <p
              onClick={handleReplyBox}
              className="ml-10 cursor-pointer underline"
            >
              Replay
            </p>
            <p
              onClick={() => deleteComment(comment.id)}
              className="ml-5 cursor-pointer underline"
            >
              Delete
            </p>
            <p onClick={handleUpdate} className="ml-5 cursor-pointer underline">
              {showEditBox ? "Update" : "Edit"}
            </p>
          </div>
        </div>
      </div>
      <div className="ml-12">
        {showEditBox ? (
          <input
            defaultValue={commentMessage}
            onChange={(e) => setCommentMessage(e.target.value)}
          />
        ) : (
          <p>{comment.comment}</p>
        )}
        {showReplyBox && (
          <form className="flex mt-2" onSubmit={handleAddSubmit}>
            <input
              type="text"
              name="comment"
              className="border-2 border-black"
            />
            <button
              type="submit"
              className="border-2 border-black ml-2 pl-2 pr-2"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default CommentBox;
