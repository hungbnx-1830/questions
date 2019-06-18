import React from 'react';
import {Provider} from "react-redux";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import { FETCH_POSTS } from "./actions/index";
//store
import store from "./store";
//layout
import {Grid, Container} from "semantic-ui-react";
//components
import QuestionList from "./components/QuestionList";
import AddQuestion from "./components/AddQuestion";
import Sidebar from "./components/Sidebar";
import EditQuestion from "./components/EditQuestion";
import Head from "./components/Head";

class App extends React.Component {
  componentDidMount() {
    axios.get("https://huebj.sse.codesandbox.io/posts").then(res => {
      store.dispatch({ type: FETCH_POSTS, payload: res.data });
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Container>
              <Head />
              <Grid columns={2}>
                <Grid.Row>
                  <Sidebar />
                  <Switch>
                    <Route exact path="/" component={QuestionList} />
                    <Route exact path="/add" component={AddQuestion} />
                    <Route exact path="/edit" component={EditQuestion} />
                  </Switch>
                </Grid.Row>
              </Grid>
            </Container>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
