import React, { Component } from 'react';
import { Container, Grid }  from 'semantic-ui-react';
import PostForm             from './components/PostForm';
import ListPost             from './components/ListPost';


class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <PostForm/>
            </Grid.Column>
            <Grid.Column width={8}>
              <ListPost/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}


export default App;
