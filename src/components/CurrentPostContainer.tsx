import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import CurrentPost from "./CurrentPost";
import {AppDispatch, AppState} from "../redux/store";
import {getCurrentPost, PostsInitialStateType} from "../redux/PostsSlice";

type CurrentPostContainerPropsType = {
  id: string
}

const CurrentPostContainer: React.FC<CurrentPostContainerPropsType> = ({id}) => {
  const {currentPost, newCommentText} = useSelector<AppState, PostsInitialStateType>(state => state.posts)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getCurrentPost(+id))
  }, [dispatch])

  return (
    <CurrentPost currentPost={currentPost} newCommentText={newCommentText}/>
  )
}

export default CurrentPostContainer