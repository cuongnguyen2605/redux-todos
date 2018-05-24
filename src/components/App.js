import React, { Component } from 'react';

// import ListPost   from './ListPost';
import DetailPost from './DetailPost';
import PostForm   from './PostForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostForm/>
                <hr/>
                {/*<ListPost/>*/}
                <hr/>
                <DetailPost/>
            </div>
        );
    }
}

export default App;
