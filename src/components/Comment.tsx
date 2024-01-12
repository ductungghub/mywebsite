import { parseISO, compareDesc } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import {
  createComment,
  deleteComment,
  createReply,
  deleteReply,
} from '../graphql/mutations';
import { listComments, repliesByCommentID } from '../graphql/queries';
import {
  CreateCommentInput,
  Comment as CommentType,
  CreateReplyInput,
  Reply,
} from '../API';
import './Comment.css';

const initialState: CreateCommentInput = { content: '' };
const initialReply: CreateReplyInput = { content: '', commentID: '' };

const client = generateClient();

interface CommentProps {
  setNumComments: React.Dispatch<React.SetStateAction<number>>;
}

const Comment = ({ setNumComments }: CommentProps) => {
  const [formState, setFormState] = useState<CreateCommentInput>(initialState);
  const [comments, setComments] = useState<
    CommentType[] | CreateCommentInput[]
  >([]);
  const [formReplyState, setFormReplyState] =
    useState<CreateReplyInput>(initialReply);
  const [replies, setReplies] = useState<Reply[] | CreateReplyInput[]>([]);

  const [replyInputVisible, setReplyInputVisible] = useState<any>(null);

  useEffect(() => {
    fetchComments();
    fetchReplies();
  }, []);

  async function fetchComments() {
    try {
      const commentData = await client.graphql({
        query: listComments,
      });

      const sortedComments = [...commentData.data.listComments.items].sort(
        (a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
      );

      setComments(sortedComments);
      setNumComments(sortedComments.length);

      // Fetch replies for each comment
      const allReplies = await Promise.all(
        sortedComments.map(async (comment) => {
          const replyData = await client.graphql({
            query: repliesByCommentID,
            variables: { commentID: comment.id },
          });
          return replyData.data.repliesByCommentID.items;
        })
      );

      // Flatten the array of arrays into a single array of replies
      const flatReplies = allReplies.flat();
      setReplies(flatReplies);
    } catch (err) {
      console.log('error fetching comments and replies', err);
    }
  }

  async function addComment() {
    try {
      if (!formState.content) return;
      const comment = { ...formState };
      setComments([...comments, comment]);
      setFormState(initialState);
      await client.graphql({
        query: createComment,
        variables: {
          input: comment,
        },
      });

      fetchComments();
    } catch (err) {
      console.log('error creating comment:', err);
    }
  }

  async function deleteCommentItem(id: string) {
    try {
      await client.graphql({
        query: deleteComment,
        variables: {
          input: { id: id },
        },
      });

      // After deletion, fetch the updated comments and replies
      fetchComments();
    } catch (err) {
      console.log('error deleting comment:', err);
    }
  }

  async function addReply(commentID: string) {
    try {
      if (!formReplyState.content || !commentID) return; // Ensure commentID is not null or undefined
      const reply = { ...formReplyState, commentID };
      setReplies([...replies, reply]);
      setFormReplyState(initialReply);
      await client.graphql({
        query: createReply,
        variables: {
          input: reply,
        },
      });

      // After adding a reply, fetch the updated replies
      const replyData = await client.graphql({
        query: repliesByCommentID,
        variables: { commentID: commentID },
      });
      const updatedReplies = replyData.data.repliesByCommentID.items;
      setReplies(updatedReplies);
      fetchReplies();
    } catch (err) {
      console.log('error creating reply:', err);
    }
  }

  async function deleteReplyItem(replyId: string) {
    try {
      await client.graphql({
        query: deleteReply,
        variables: {
          input: { id: replyId },
        },
      });

      // After deletion, fetch the updated replies
      fetchReplies();
    } catch (err) {
      console.log('error deleting reply:', err);
    }
  }

  async function fetchReplies() {
    // Fetch replies for each comment
    const allReplies = await Promise.all(
      comments.map(async (comment) => {
        if (comment.id) {
          // Check if comment.id is truthy
          const replyData = await client.graphql({
            query: repliesByCommentID,
            variables: { commentID: comment.id },
          });
          return replyData.data.repliesByCommentID.items;
        } else {
          return [];
        }
      })
    );

    // Flatten the array of arrays into a single array of replies
    const flatReplies = allReplies.flat();
    setReplies(flatReplies);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addComment();
    }
  };

  return (
    <div className="container">
      <h2>Comment</h2>
      <input
        onChange={(event) =>
          setFormState({ ...formState, content: event.target.value })
        }
        className="input"
        value={formState.content || ''}
        placeholder="Enter..."
        onKeyPress={handleKeyPress}
      />
      <button className="createComment" onClick={addComment}>
        Post
      </button>
      {comments.map((comment, index) => (
        <div key={comment.id ? comment.id : index} className="comment-wrapper">
          <div className="commentContent">{comment.content}</div>
          <div className="flex">
            <button
              className="replySpan"
              onClick={() =>
                setReplyInputVisible(
                  replyInputVisible === comment.id ? null : comment.id
                )
              }
            >
              Reply
            </button>
            <button
              className="deleteComment"
              onClick={() =>
                typeof comment.id === 'string' && deleteCommentItem(comment.id)
              }
            >
              Xóa Cmt
            </button>
          </div>
          <div>
            <div>
              {replyInputVisible === comment.id && (
                <>
                  <input
                    onChange={(event) =>
                      setFormReplyState({
                        ...formReplyState,
                        content: event.target.value,
                      })
                    }
                    className="reply-input"
                    value={formReplyState.content || ''}
                    placeholder="Reply..."
                  />
                  <button
                    className="createComment"
                    onClick={() =>
                      typeof comment.id === 'string' && addReply(comment.id)
                    }
                  >
                    Send
                  </button>
                </>
              )}
            </div>
          </div>
          {replies
            .filter((reply) => reply.commentID === comment.id)
            .map((reply, replyIndex) => (
              <div key={reply.id ? reply.id : replyIndex} className="reply">
                <p className="replyContent">{reply.content}</p>
                <span>
                  <button
                    className="deleteReply"
                    onClick={() =>
                      typeof reply.id === 'string' && deleteReplyItem(reply.id)
                    }
                  >
                    Xóa
                  </button>
                </span>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Comment;
