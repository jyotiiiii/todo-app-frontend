import React from 'react';
import './App.css';

function App() {
  return <div>
<!-- Navigation Bar -->
    <nav class="navbar navbar-light">
        <!-- "navbar-expand-lg" in the nav tag will uncollapse the handburger-->
        <!-- if you place navbar-brand below the button the brand will float right, 
            above the button the brand stays to left-->
        <a class="navbar-brand" href="#">
            <!-- <div class="nav"> -->
            <div id="score-dot">
                <h6>89</h6>
            </div>
        </a>

        <button class="navbar-toggler navbutton nav-button" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <div class="">
                <div class="toggle"><a class="" href="#"></a></div>
                <div class="toggle"><a class="" href="#"></a></div>
                <div class="toggle"><a class="" href="#"></a></div>
            </div>

        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <!-- ml-auto (margin left auto class floats the items to the right) -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active  ml-auto">
                    <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item  ml-auto">
                    <a class="nav-link" href="#">Kindness</a>
                </li>
                <li class="nav-item ml-auto">
                    <a class="nav-link " href="#">How it works</a>
                </li>
                <li class="nav-item ml-auto">
                    <form class="form-inline my-2 my-md-0">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                    </form>
                </li>
            </ul>

        </div>
    </nav>


    <!-- Header -->
    <div class="jumbotron ">
        <div class="container text-center">

            <a class="" href="/index_bootstrap.html" target="_blank"><img class="kinda" src="images/kinda.svg"
                    alt="kinda-img"></a>

            <img class="me" src="images/heartlogo.svg" alt="my-heart-img">

            <!-- Add a Task Section -->

            <div class="row">
                <div class="col">
                    <a class="action-button" href="#" role="button"><i class="fas fa-plus fa-lg"></i></a>
                    <a class="action-button" href="#" role="button"><i class="far fa-heart fa-lg"></i></a>
                </div>
            </div>

        </div>
    </div>

    <!-- Pop Up Form (After add a task button is clicked) -->
    <div class="container hidden-form">
        <div class="row">
            <div class="col-md-4 "></div>
            <div class="col-md-5 ">
                <form class="form-inline ">
                    <!-- <div class="form-group mb-2"> -->
                    <!-- <label for="staticEmail2" class="sr-only">Email</label> -->
                    <!-- <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"> -->
                    <!-- </div> -->
                    <div class="form-group mx-sm-3 mb-2">
                        <!-- <label for="inputPassword2" class="sr-only">Enter a kinda thing to do</label> -->
                        <input type="password" class="form-control" id="inputPassword2"
                            placeholder="Enter a kinda thing to do">
                    </div>
                    <button type="submit" class="btn btn-info mb-2">Add Task</button>
                </form>
            </div>
            <div class="col-md-4 "></div>
        </div>
    </div>


    <!-- Task Section -->
    <div class="container-fluid">

        <div class="row justify-content-center pb-3">
            <div class="col-sm-9">

                <div class="row">
                    <div class="col-8 col-sm-6">
                        This is a task
                    </div>
                    <div class="col-4 col-sm-6">
                        <a class="action-button" href="#" role="button"><i class="fas fa-trash-alt fa-lg"></i></a>
                        <a class="action-button" href="#" role="button"><i class="fas fa-check fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center pb-3">
            <div class="col-sm-9">

                <div class="row">
                    <div class="col-8 col-sm-6">
                        This is a task
                    </div>
                    <div class="col-4 col-sm-6">
                        <a class="action-button" href="#" role="button"><i class="fas fa-trash-alt fa-lg"></i></a>
                        <a class="action-button" href="#" role="button"><i class="fas fa-check fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center pb-3">
            <div class="col-sm-9">

                <div class="row">
                    <div class="col-8 col-sm-6">
                        This is a task
                    </div>
                    <div class="col-4 col-sm-6">
                        <a class="action-button" href="#" role="button"><i class="fas fa-trash-alt fa-lg"></i></a>
                        <a class="action-button" href="#" role="button"><i class="fas fa-check fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>




    </div>

    <!-- Footer -->

    <footer class="footer" id="footer">
        <i class="fab fa-twitter spaced-icon"></i>
        <i class="fab fa-facebook-f spaced-icon"></i>
        <i class="fab fa-instagram spaced-icon"></i>
        <i class="fas fa-envelope spaced-icon"></i>
        <p class="mb-3 text-muted copyright">Copyright ©
            <script>document.write(new Date().getFullYear());</script> Jyoti Sharma</p>

    </footer>

  </div>;
}

export default App;
