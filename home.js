import { Link } from "react-router-dom";

export default function Home() {
    return <div id="HomeContent">
                    <h2 id="FeaturedProjects">Featured Projects</h2>
                    <p id="Damocles"><a href="https://damoclesgame.herokuapp.com/">PLAY DAMOCLES NOW!!!</a></p>
                    <p id="ShowdownFeat"><Link to="/mlbshowdown">MLB Showdown</Link>: Java implementation of the old Wizards of the Coast Baseball Game</p>
                    <p id="VizFeat"><a href="https://cse442-17s.github.io/An-Environmentally-Friendly-Economy/final/">An Environmentally Friendly Economy</a>: Group final for CSE 442 Data Visualization</p>
                    <p id="CJFeat"><a href="jungle.html">Concrete Jungle Scoring</a>: An analysis utiltiy for the video game <a href="http://store.steampowered.com/app/400160/Concrete_Jungle/">Concrete Jungle</a></p>
                    <p id="InTheWorks"><a href="test.html">Visualizing Spotify Skip Data</a>: A D3.js graphic of information about my song skipping habits on Spotify></p>
                    <p id="RailFeat">Rail Baron Calculator: A time saving utiltiy for the board game <a href="https://boardgamegeek.com/boardgame/420/rail-baron">Rail Baron</a>, has been temporarily put in the station for refurbishment</p>
                    <p id="CJFeat">Concrete Jungle Scoring: An analysis utiltiy for the video game <a href="http://store.steampowered.com/app/400160/Concrete_Jungle/">Concrete Jungle</a>, has been temporarily taken down on this fully React.js website as it was developed in Angular</p>
    </div>
}