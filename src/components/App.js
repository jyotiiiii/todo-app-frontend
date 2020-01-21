import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Taskform from './TaskForm';
import Tasklist from './TaskList';
import Footer from './Footer';
import uuidv4 from 'uuid/v4';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: uuidv4(),
        description: 'State task 1',
        completed: false,
        points: 5
      },
      {
        id: uuidv4(),
        description: 'State task 2',
        completed: false,
        points: 5
      },
      { id: uuidv4(), description: 'State task 3', completed: false, points: 5 }
    ],
    showForm: false
  };

  // Tasks will be deleted when this function executes

  deleteTask = taskId => {
    // Firstly get the list of tasks from state
    const currentTasks = this.state.tasks;
    // Next, identify the task that matches the given task id and remove it
    const updatedTasks = currentTasks.filter(
      todoItem => todoItem.id !== taskId
    );
    // Update the state with the new collection of tasks (ie without the one we deleted)
    this.setState({
      tasks: updatedTasks
    });
  };

  // This will show the Add Task form

  showForm() {
    this.setState({
      showForm: true
    });
  }

  addTask = taskDescription => {
    // Firstly define the task that is being added
    const newTask = {
      id: uuidv4(),
      description: taskDescription,
      completed: false,
      points: 5
    };
    console.log(
      `New Task ID: ${newTask.id} Description: ${newTask.description}`
    );
    // Get the current list of tasks from state
    const currentTasks = this.state.tasks;

    // Add the 'newTask' to the array of tasks in state
    currentTasks.push(newTask);

    // Update the state
    this.setState({
      tasks: currentTasks
    });
  };

  // addTask(description) {
  //   const tasks = this.state.tasks;
  //   tasks.push({
  //     id: tasks.length + 1,
  //     description: description,
  //     completed: false,
  //     points: 5
  //   });

  //   this.setState({
  //     tasks: tasks
  //   });
  // }

  render() {
    return (
      <div>
        {/* Navigation Bar  */}
        <Navbar />
        {/* Header  */}
        <Header onClick={() => this.showForm()} />
        {this.state.showForm ? (
          <Taskform addTaskFunction={this.addTask} />
        ) : null}
        {/* Pop Up Form(After add a task button is clicked) */}

        {/* Task Section  */}
        <Tasklist
          listOfTasks={this.state.tasks}
          deleteTaskFunction={this.deleteTask}
        />
        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default App;
