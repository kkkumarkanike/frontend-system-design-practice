import React, { useState } from "react";
const image =
  "https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg";

function CommentBox({ data, addReply }) {
  return data?.map((comment, index) => (
    <div className="ml-5 mt-5" key={index}>
      <EachComment comment={comment} key={comment.id} addReply={addReply} />
      {comment.replies && (
        <CommentBox
          data={comment.replies}
          addReply={addReply}
          key={comment.id}
        />
      )}
    </div>
  ));
}

function EachComment({ comment, addReply }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const handleReplyBox = () => setShowReplyBox(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.comment.value);
    addReply(e.target.comment.value, comment.id);
    setShowReplyBox(false);
  };
  return (
    <>
      <div className="flex">
        <img src={image} alt="profileImage" width={30} height={30} />
        <div className="flex justify-between">
          <p className="ml-5">{comment.username}</p>
          <p onClick={handleReplyBox} className="ml-10 cursor-pointer">
            Replay
          </p>
        </div>
      </div>
      <div className="ml-12">
        <p>{comment.comment}</p>
        {showReplyBox && (
          <form className="flex mt-2" onSubmit={handleSubmit}>
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
