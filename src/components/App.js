import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Taskform from './TaskForm';
import Tasklist from './TaskList';
import Footer from './Footer';
import uuidv4 from 'uuid/v4';
import randomTasks from '../randomtasks';
import axios from 'axios';

class App extends React.Component {
  state = {
    tasks: [],
    showForm: false,
    score: 20
  };

  componentDidMount = () => {
    // Fetch tasks from API
    axios
      .get('https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then(response => {
        // handle success
        this.setState({
          tasks: response.data.tasks
        });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  // here I want to add the points of the tasks to display a score

  calcScore = arr => {
    // get list of tasks from state
    let list = arr;
    console.log({ listLine38: list });
    // initialise variable for total amount
    let sum = this.state.score;
    // initialise empty array to collect points from each task object
    let scoresAdded = [];
    // loop through tasks array to pull out the points values
    for (let i = 0; i < list.length; i++) {
      // and put them in a scoresAdded array
      if (list[i].completed === true) {
        scoresAdded.push(list[i].points);
      }
    }

    console.log({ score: scoresAdded });
    // loop through this array and add the points together
    for (var j = 0; j < scoresAdded.length; j++) {
      sum += scoresAdded[j];
    }
    // set the state with the total points added
    return sum;
  };

  // REFACTOR ABOVE CODE USING JAVASCRIPT ARRAY METHODS
  // const calcScore = this.state.tasks.map(function(obj) {

  //       return obj.points;
  // });

  // const total = calcScore.reduce(function (accumulator, currNum) {
  //   // console.log("accumulator = " + accumulator);
  //   // console.log("currNum = " + currNum);
  //   return accumulator + currNum;
  // });

  // Tasks will be deleted when this function executes

  deleteTask = taskId => {
    // Firstly get the list of tasks from state
    const currentTasks = this.state.tasks;
    // Next, identify the task that matches the given task id and remove it

    axios
      .delete(
        `https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`
      )
      .then(response => {
        // handle success
        const updatedTasks = currentTasks.filter(
          todoItem => todoItem.id !== taskId
        );
        this.setState({
          tasks: updatedTasks
        });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });

    // Update the state with the new collection of tasks (ie without the one we deleted)
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
    if (this.state.showForm) {
      this.setState({
        showForm: false
      });
    } else {
      this.setState({
        showForm: true
      });
    }
  }

  addTask = taskDescription => {
    // Firstly define the task that is being added
    const newTask = {
      id: uuidv4(),
      user_id: '5cd7209f-b05b-456a-9327-55e8af3f945e',
      random: 0,
      description: taskDescription,
      completed: 0,
      points: 10
    };
    console.log(
      `New Task ID: ${newTask.id} Description: ${newTask.description}`
    );

    axios
      .post(
        'https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks',
        newTask
      )
      .then(response => {
        // handle success
        //this is if task id is coming from the backend
        // newTask.id = response.data.task.id;
        console.log({ newTask: newTask });
        // Get the current list of tasks from state
        const currentTasks = this.state.tasks;

        // Add the 'newTask' to the array of tasks in state
        currentTasks.push(newTask);

        // Update the state
        this.setState({
          tasks: currentTasks
        });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  addRandom = () => {
    // get list of random tasks from the randomtasks file
    let list = randomTasks;
    // get the list of current tasks in state
    const currentTasks = this.state.tasks;
    // filter out tasks from list that have not been used
    // const filteredList = list.filter(task => task.description !== ); **** change this
    // pull out a random suggested task
    let randomToAdd = list[Math.floor(Math.random() * list.length)];
    // push it to the end of tasks array in state

    //if statement to check if exists

    currentTasks.push(randomToAdd);
    // update state
    this.setState({
      tasks: currentTasks
    });
  };

  render() {
    return (
      <div>
        {/* Navigation Bar  */}
        <Navbar score={this.calcScore(this.state.tasks)} />
        {/* Header  */}
        <Header
          onClick={() => this.showForm()}
          onHeartClick={() => this.addRandom()}
          score={this.calcScore(this.state.tasks)}
        />
        <div id="heart"></div>
        {/* Pop Up Form(After add a task button is clicked) */}
        {this.state.showForm ? (
          <Taskform addTaskFunction={this.addTask} />
        ) : null}

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
