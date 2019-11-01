import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import About from "./about.js";
  import Resume from "./resume.js";
  import MLBShowdown from "./mlbshowdown.js";
  import Home from "./home.js";
  import Antibiotic from "./antibiotic.js";

  function App() {
      return (
          <Router>
                <div id="leftborder"></div>
                <div id="Header">
                    <h1>Matthew Bunge</h1>
                    <p>Programmer Seeking Employment</p>
                </div>
                <div id="MenuBar">
                    <button id="Main" class="DropButton">Personal</button>
                    <div id="MainContent" class="DropContent">
                        <Link to="/" className="menucontent">Home</Link>
                        <Link to="/aboutme" className="menucontent">About Me</Link>
                        <Link to="/resume" className="menucontent">Resume</Link>
                    </div>
                    <button id="Projects" class="DropButton">Projects</button>
                    <div id="ProjectContent" class="DropContent">
                        <Link to="/mlbshowdown" className="menucontent">MLB Showdown</Link>	
                        <a class="menucontent external" href="https://cse442-17s.github.io/An-Environmentally-Friendly-Economy/final/">Data Viz Final</a>
                    </div>
                    <button id="Assorted" class="DropButton">Assorted</button>
                    <div id="AssortedContent" class="DropContent">
                        <Link to="/antibiotic" className="menucontent">Antibiotic Speech</Link>
                        <a class="menucontent external" href="https://github.com/mattb555/MexicanHealth/blob/master/Final%20Paper.pdf">Mexican Healthcare</a>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/aboutme">
                        <About/>
                    </Route>
                    <Route path="/resume">
                        <Resume/>
                    </Route>
                    <Route path="/mlbshowdown">
                        <MLBShowdown/>
                    </Route>
                    <Route path="/antibiotic">
                        <Antibiotic/>
                    </Route>
                </Switch>
          </Router>
      );
  }

  function menuClick(contentclass, menuclass) {
	$(document).on("click", menuclass, (function(e) {
		$(document).on("click", ".DropContent", (function(e){
			e.stopPropagation();
		}));
		e.stopPropagation();
		$( ".DropContent" ).not(contentclass).hide();
		$( contentclass ).show();
	}));
}

function setUp() {
	$('#menuholder').load('navbar.html');
	menuClick("#ProjectContent", "#Projects");
	menuClick("#MainContent", "#Main");
	menuClick("#AssortedContent", "#Assorted");
	$(document).click(function(){
		$(".DropContent").hide();
	});
	$(document).on("click", "#Header", function() {
		window.location.href = "/";
	});
	$("body").css("background-color", "white");
	$("body").show();
}

ReactDOM.render(<App/>, document.getElementById("root"));
setUp();