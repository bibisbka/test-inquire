import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect, RouteComponentProps} from 'react-router-dom'

import store from "./redux/store";
import PostsContainer from "./components/PostsContainer";
import CurrentPostContainer from "./components/CurrentPostContainer";

interface MatchParams {
  id: string
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/posts'>
            <PostsContainer/>
          </Route>
          <Route exact path='/'>
            <Redirect to='/posts'/>
          </Route>
          <Route path='/post/:id' render={({match}: MatchProps) => (<CurrentPostContainer id={match.params.id}/>)}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App