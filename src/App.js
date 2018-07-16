import React, { Component } from 'react';
import { Container, Grid }  from 'semantic-ui-react';
import PostForm             from './components/PostForm';
import ListPost             from './components/ListPost';


class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Container>
            <PostForm/>
            <ListPost/>
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}


export default App;
