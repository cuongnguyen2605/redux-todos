import React, { Component } from 'react';
import { Container, Grid }  from 'semantic-ui-react';
import PostForm             from './components/PostForm';
import ListPost             from './components/ListPost';
import './App.css';


class App extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={12}>
              <PostForm/>
              <hr/>
              <ListPost/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}


export default App;
