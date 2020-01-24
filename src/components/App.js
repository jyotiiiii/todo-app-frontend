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
    showForm: false,
    score: 0
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

  // Tasks will be marked with completed true status when this function executes

  completeTask = taskId => {
    // Firstly get the list of tasks from state
    const currentTasks = this.state.tasks;
    // Next, identify the task that matches the given task id
    for (let i = 0; i < currentTasks.length; i++) {
      const task = currentTasks[i];
      // change the completed status of the matched task
      if (task.id === taskId) {
        // add a toggle to change status
        task.completed = task.completed ? false : true;
        // task.completed = true;
        break;
      }
      // Update the state with the new collection of tasks (ie without the one we deleted)
    }
    this.setState({
      tasks: currentTasks
    });
  };

  // This will show the Add Task form

  showForm() {
    this.setState({
      showForm: true
    });
  }

  // here I want to add the points of the tasks to display a score
  calcScore = () => {
    // get list of tasks from state
    let list = this.state.tasks;
    // initialise variable for total amount
    let sum = 0;
    // loop through tasks array to pull out the points values
    for (let i = 0; i < list.length; i++) {
      // and put them in a new array
      let scoresAdded = [];
      scoresAdded = scoresAdded.push(list.points[i]);
      // loop through this array and add the points together
      for (var j = 0; j < scoresAdded.length; i++) {
        sum += scoresAdded[j];
        return sum;
      }
    }
    // set the state with the total points added
    this.setState({
      score: sum
    });
  };

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
        <Navbar score={this.calcScore()} />
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
          doneTaskFunction={this.completeTask}
        />
        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default App;
