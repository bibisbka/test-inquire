import React, {useState} from 'react'
import {ResponseCurrentPost} from "../api/api";
import Comment from "./Comment";
import {
  addComment,
  setCurrentPostBody,
  setCurrentPostTitle,
  setNewCommentText,
  updateCurrentPost
} from "../redux/PostsSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";

type CurrentPostType = {
  currentPost: ResponseCurrentPost
  newCommentText: string
}

const CurrentPost: React.FC<CurrentPostType> = ({currentPost, newCommentText}) => {
  const {body, comments, title, id} = currentPost
  const comment = comments.map(c => <Comment key={c.id} body={c.body}/>)
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false);
  }
  const onTitleChange = (title: any) => {
    const newTitle: string = title.target.value
    dispatch(setCurrentPostTitle(newTitle))
  }
  const onTextChange = (body: any) => {
    const newText: string = body.target.value
    dispatch(setCurrentPostBody(newText))
  }
  const onCommentChange = (comment: any) => {
    const newComment: string = comment.target.value
    dispatch(setNewCommentText(newComment))
  }
  const handleOnClickConfirmButton = () => {
    deactivateEditMode()
    dispatch(updateCurrentPost({postId: id, body: body, title: title}))
  }
  const handleOnClickAddComment = () => {
    dispatch(addComment({body: newCommentText, postId: id}))
  }
  return (
    <div>
      {editMode ? (
        <div>
          <div>
            Title:
            <input
              autoFocus={true}
              value={title}
              onChange={onTitleChange}
            />
          </div>
          <div>
            Message:
            <input
              autoFocus={true}
              value={body}
              onChange={onTextChange}
            />
          </div>
          <button onClick={handleOnClickConfirmButton}>Confirm change</button>
        </div>
      ) : (
        <div>
          <div onDoubleClick={activateEditMode}>Title: {title}</div>
          <div onDoubleClick={activateEditMode}>Message: {body}</div>
        </div>
      )}
      <div>
        {comments.length ? 'Comments' : null}
        <div>
          {comment}
        </div>
        Comment: <input autoFocus={true} value={newCommentText} onChange={onCommentChange}/>
        <button onClick={handleOnClickAddComment}>Add comment</button>
      </div>
    </div>
  )
}

export default CurrentPost