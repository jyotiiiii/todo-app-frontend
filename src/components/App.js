import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Taskform from './TaskForm';
import Tasklist from './TaskList';
import Footer from './Footer';
// import tasks from '../tasks';
class App extends React.Component {
  state = {
    tasks: [
      { id: 1, description: 'State task 1', completed: false, points: 5 },
      { id: 2, description: 'State task 2', completed: false, points: 5 },
      { id: 3, description: 'State task 3', completed: false, points: 5 }
    ]
  };

  render() {
    return (
      <div>
        {/* Navigation Bar  */}
        <Navbar />
        {/* Header  */}
        <Header />
        {/* Pop Up Form(After add a task button is clicked) */}
        <Taskform />
        {/* Task Section  */}
        <Tasklist listOfTasks={this.state.tasks} />
        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default App;
