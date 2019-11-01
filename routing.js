import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import About from "./about.js";
  import Resume from "./resume.js";
  import MLBShowdown from "./mlbshowdown.js";
  import Jungle from "./jungle.js";

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
                        <Link to="/aboutme" className="menucontent">About Me</Link>
                        <Link to="/resume" className="menucontent">Resume</Link>
                    </div>
                    <button id="Projects" class="DropButton">Projects</button>
                    <div id="ProjectContent" class="DropContent">
                        <Link to="/mlbshowdown" className="menucontent">MLB Showdown</Link>	
                        <a class="menucontent external" href="https://cse442-17s.github.io/An-Environmentally-Friendly-Economy/final/">Data Viz Final</a>
                        <Link to="/jungle" className="menucontent">Concrete Jungle Utility</Link>
                    </div>
                    <button id="Assorted" class="DropButton">Assorted</button>
                        <div id="AssortedContent" class="DropContent">
                            <a class="menucontent" href="antibiotic.html">Antibiotic Speech</a>
                            <a class="menucontent external" href="https://github.com/mattb555/MexicanHealth/blob/master/Final%20Paper.pdf">Mexican Healthcare</a>
                    </div>
                </div>
                <div id="HomeContent">
                    <h2 id="FeaturedProjects">Featured Projects</h2>
                    <p id="Damocles"><a href="https://damoclesgame.herokuapp.com/">PLAY DAMOCLES NOW!!!</a></p>
                    <p id="ShowdownFeat"><Link to="/mlbshowdown" className="menucontent">MLB Showdown</Link>: Java implementation of the old Wizards of the Coast Baseball Game</p>
                    <p id="VizFeat"><a href="https://cse442-17s.github.io/An-Environmentally-Friendly-Economy/final/">An Environmentally Friendly Economy</a>: Group final for CSE 442 Data Visualization</p>
                    <p id="CJFeat"><a href="jungle.html">Concrete Jungle Scoring</a>: An analysis utiltiy for the video game <a href="http://store.steampowered.com/app/400160/Concrete_Jungle/">Concrete Jungle</a></p>
                    <p id="InTheWorks">Current Project: <a href="test.html">Visualizing Spotify Skip Data</a></p>
                    <p id="RailFeat">Rail Baron Calculator: A time saving utiltiy for the board game <a href="https://boardgamegeek.com/boardgame/420/rail-baron">Rail Baron</a>, has been temporarily put in the station for refurbishment</p>
                </div>
                <Switch>
                    <Route path="/aboutme">
                        <About/>
                    </Route>
                    <Route path="/resume">
                        <Resume/>
                    </Route>
                    <Route path="/mlbshowdown">
                        <MLBShowdown/>
                    </Route>
                    <Route>
                        <Jungle/>
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
		window.location.href = "http://www.matthewbunge.com";
	});
	$("body").css("background-color", "white");
	$("body").show();
}

  ReactDOM.render(<App/>, document.getElementById("root"));