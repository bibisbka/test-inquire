import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {postDelete} from '../redux/PostsSlice';

type PostPropsType = {
  title: string
  body: string
  id: number
}

const Post: React.FC<PostPropsType> = ({title, body, id}) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClickDeleteButton = (postId: number) => {
    dispatch(postDelete(postId))
  }
  return (
    <div>
      <NavLink to={`post/${id}`}>
        <div>
          Title: {title}
        </div>
        <div>
          Message: {body}
        </div>
      </NavLink>
      <button onClick={() => {
        handleOnClickDeleteButton(id)
      }}>
        Delete post
      </button>
      <div>
        --------------------
      </div>
    </div>
  )
}

export default Post
