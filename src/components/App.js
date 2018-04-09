import React, { Component } from 'react';
import Footer               from './Footer';
import AddTodo              from '../containers/AddTodo';
import VisibilityFilter     from '../containers/VisibleTodoList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddTodo/>
                <VisibilityFilter/>
                <Footer/>
            </div>
        );
    }
}

export default App;
