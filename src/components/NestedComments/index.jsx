import React, { useState } from "react";
import CommentBox from "./CommentBox";

function Index() {
  const [commentsData, setCommentsData] = useState([
    {
      id: 1,
      username: "Akshay Saini",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      replies: [
        {
          id: "1-1",
          username: "Deepika Padukone",
          comment:
            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          replies: [],
        },
      ],
    },
    {
      id: 2,
      username: "Elon Musk",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      replies: [
        {
          username: "Deepika Padukone",
          comment:
            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          replies: [
            {
              id: "2-1",
              username: "Deepika Padukone",
              comment:
                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              replies: [
                {
                  id: "2-1-1",
                  username: "Deepika Padukone",
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                  replies: [
                    {
                      id: "2-1-1-1",
                      username: "Deepika Padukone",
                      comment:
                        "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                      replies: [
                        {
                          id: "2-1-1-1-1",
                          username: "Deepika Padukone",
                          comment:
                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          replies: [
                            {
                              id: "2-1-1-1-1-1",
                              username: "Deepika Padukone",
                              comment:
                                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                              replies: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "2-2",
              username: "Deepika Padukone",
              comment:
                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              replies: [],
            },
          ],
        },
        {
          username: "Deepika Padukone",
          comment:
            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      username: "Sachin Tendulkar",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      replies: [],
    },
  ]);
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
      if (comment.replies.length > 0) {
        comment.replies = updateComments(
          newComment,
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
  };
  return (
    <>
      <div>Nested Comments</div>
      <CommentBox data={commentsData} addReply={addReply} />
    </>
  );
}

export default Index;
