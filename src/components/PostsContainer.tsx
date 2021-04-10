import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Posts from './Posts'
import {AppDispatch, AppState} from "../redux/store";
import {getPostsList, PostsInitialStateType} from "../redux/PostsSlice";

const PostsContainer: React.FC = () => {
  const {postsList, newPost} = useSelector<AppState, PostsInitialStateType>(state => state.posts)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getPostsList())
  }, [dispatch])

  return <Posts postsList={postsList} newPost={newPost}/>
}

export default PostsContainer