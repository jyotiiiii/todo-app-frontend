import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Taskform from './TaskForm';
import Tasklist from './TaskList';
import Footer from './Footer';

class App extends React.Component {
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
        <Tasklist />
        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default App;
