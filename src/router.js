import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import NoMatch from './routes/noMatch'

import IndexPage from './routes/IndexPage';
import Demo1 from './routes/demo1/index'
// import TodoList from './routes/todoList/index'

import TodoList from './routes/todoList' // [app.router] router should be function, but got object

function RouterConfig({ history,app }) {
  // console.log(history)
  // console.log(app)
  return (
    <Router history={history}>
      {/* <Suspense fallback={<Loading />}> */}
      <Switch>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/demo1" component={Demo1} />
        <Route path="/todoList" component={TodoList} />

        <Route component={NoMatch} />
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

// module.exports = RouterConfig
export default RouterConfig;

