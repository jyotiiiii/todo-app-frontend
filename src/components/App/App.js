import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';
import uuidv4 from 'uuid/v4';
import randomTasks from '../../randomtasks';
import axios from 'axios';

class App extends React.Component {
  state = {
    tasks: [],
    showForm: false,
    currentCategory: null,
    score: 0,
  };

  componentDidMount = () => {
    // Fetch tasks from API
    axios
      .get('https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        console.log(response.data.tasks);
        console.log(this.calcScore(response.data.tasks));
        this.setState({
          tasks: response.data.tasks,
          score: this.calcScore(response.data.tasks),
        });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  // here I want to add the points of the tasks to display a score

  calcScore = (arr) => {
    // get list of tasks from state
    let list = arr;
    // console.log({ listLine38: list });
    // initialise variable for total amount
    let sum = 0;
    // initialise empty array to collect points from each task object
    let scoresAdded = [];
    // loop through tasks array to pull out the points values
    for (let i = 0; i < list.length; i++) {
      // and put them in a scoresAdded array
      if (list[i].completed) {
        scoresAdded.push(list[i].points);
      }
    }

    // console.log({ score: scoresAdded });
    // loop through this array and add the points together
    for (var j = 0; j < scoresAdded.length; j++) {
      sum += scoresAdded[j];
    }
    // set the state with the total points added
    return sum;
  };

  // Tasks will be deleted when this function executes

  deleteTask = (taskId) => {
    // Firstly get the list of tasks from state
    const currentTasks = this.state.tasks;

    axios
      .delete(
        `https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`
      )
      .then((response) => {
        // handle success
        // Next, identify the task that matches the given task id and remove it
        const updatedTasks = currentTasks.filter(
          (todoItem) => todoItem.id !== taskId
        );
        this.setState({
          tasks: updatedTasks,
        });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });

    // Update the state with the new collection of tasks (ie without the one we deleted)
  };

  // Tasks will be marked with completed true status when this function executes

  completeTask = (taskId) => {
    // Firstly get the list of tasks from state
    const currentTasks = this.state.tasks;
    // Next, identify the task that matches the given task id
    for (let i = 0; i < currentTasks.length; i++) {
      const task = currentTasks[i];
      // change the completed status of the matched task
      if (task.id === taskId) {
        // add a toggle to change status
        task.completed = task.completed ? 0 : 1;
        // task.completed = true if false, false if true;
        // break;
      }
      // Update the state with the new completed status
    }

    console.log('beforeAxiosState ', this.state);
    axios
      .put(
        `https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`,
        {
          taskCompleted: currentTasks.find((task) => task.id === taskId)
            .completed,
        }
      )
      .then((response) => {
        // handle success
        this.setState({
          tasks: currentTasks,
        });
        console.log(response);
      })
      .catch((error) => {
        // handle error to alert user
        console.error(error);
      });
  };

  // This will show the Add Task form

  showForm(category) {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
      currentCategory: category,
    }));

    // is the same as:
    //   if (this.state.showForm) {
    //     this.setState({
    //       showForm: false
    //     });
    //   } else {
    //     this.setState({
    //       showForm: true
    //     });
    //   }
  }

  addTask = (taskDescription, taskCategory) => {
    // Firstly define the task that is being added
    const newTask = {
      id: uuidv4(),
      user_id: '5cd7209f-b05b-456a-9327-55e8af3f945e',
      random: 0,
      description: taskDescription,
      completed: 0,
      points: 10,
      category: taskCategory,
    };
    console.log(
      `New Task ID: ${newTask.id} Description: ${newTask.description}`
    );

    axios
      .post(
        'https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks',
        newTask
      )
      .then((response) => {
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
          tasks: currentTasks,
        });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  addRandom = () => {
    // get list of random tasks from the randomtasks file
    let list = randomTasks;
    // console.table(randomTasks);
    // filter out tasks from list that have not been used
    const currentTasks = this.state.tasks.map((task) => task.description);

    // console.table(currentTasks);
    const filteredList = list.filter(
      (task) => !currentTasks.includes(task.description)
    );
    // pull out a random suggested task

    let randomToAdd =
      filteredList[Math.floor(Math.random() * filteredList.length)];
    // push it to the end of tasks array in state

    //if statement to check if exists
    console.log(filteredList);
    console.log(randomToAdd);
    if (!randomToAdd) {
      alert("We're out of tasks. Why not try adding one of your own?");
      return;
    }
    axios
      .post(
        'https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks',
        randomToAdd
      )
      .then((response) => {
        // handle success
        // get the list of current tasks in state
        const currentTasks = this.state.tasks;

        currentTasks.push(randomToAdd);
        console.log({ randomToAdd: randomToAdd });
        // update state
        this.setState({
          tasks: currentTasks,
        });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  render() {
    return (
      <>
        {/* Navigation Bar  */}
        <Navbar score={this.calcScore(this.state.tasks)} />

        {/* Header  */}
        <Header
          onAddTaskClick={(category) => {
            this.showForm(category);
          }}
          onHeartClick={() => this.addRandom()}
          score={this.calcScore(this.state.tasks)}
        />

        <div id="heart"></div>
        {/* Pop Up Form(After add a task button is clicked) */}
        {this.state.showForm ? (
          <TaskForm
            addTaskFunction={this.addTask}
            taskCategory={this.state.currentCategory}
          />
        ) : null}

        {/* Task Section  */}
        <TaskList
          listOfTasks={this.state.tasks}
          deleteTaskFunction={this.deleteTask}
          doneTaskFunction={this.completeTask}
        />
        {/* Footer  */}
        <Footer />
      </>
    );
  }
}

export default App;
