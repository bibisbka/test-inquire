import React from 'react'

import Post from "./Post";
import {PostType, ResponsePostType} from '../api/api';
import {createNewPost, removeNewPost, setNewPostBody, setNewPostTitle} from '../redux/PostsSlice';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";

type PostsType = {
  postsList: ResponsePostType[]
  newPost: PostType
}

const Posts: React.FC<PostsType> = ({postsList, newPost}) => {
  const post = postsList.map(p => <Post title={p.title} body={p.body} key={p.id} id={p.id}/>)
  const dispatch = useDispatch<AppDispatch>()
  const onTitleChange = (title: any) => {
    const newTitle: string = title.target.value
    dispatch(setNewPostTitle(newTitle))
  }
  const onTextChange = (text: any) => {
    const newText: string = text.target.value
    dispatch(setNewPostBody(newText))
  }
  const onClickHandler = () => {
    dispatch(createNewPost(newPost))
    dispatch(removeNewPost())
  }
  return (
    <div>
      <div>
        <div>
          <textarea placeholder='Enter post title'
                    value={newPost.title}
                    onChange={onTitleChange}/>
        </div>
        <div>
          <textarea placeholder='Enter post message'
                    value={newPost.body}
                    onChange={onTextChange}/>
        </div>
        <button onClick={onClickHandler}>Send new post</button>
      </div>
      <div>
        {post}
      </div>
    </div>
  )
}

export default Posts