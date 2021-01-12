import './HomePage.css'
import tola from './tola.jpeg'
import { panelEntries } from "../../panel/panelEntries";
import Panel from "../../panel/Panel";

function HomePage() {
    return (
        <div>
            <div className="TextImageContainer">
                <div className="TextParagraph">
                    <h1>software engineer and writer</h1>
                    <p style={{animation: `fadein 1s linear`}}>
                        Hello and welcome to my personal website. My name is <a href="https://www.names.org/n/omotola/about#associations">Omotola</a> (aw-maw-taw-lah), although I go by Tola (taw-lah) for short. I like working on cool projects, mostly software, but I also enjoy creative writing. In my spare time I like to travel, play football, watch football listen to music and watch tv shows.
                    </p>
                </div>
                <img className="PersonalImage" src={tola} alt="tola" width="300vmin" height="300vmin" style={{animation: `fadein 1s linear`}}/>
            </div>
            <div className="PanelContainer" style={{animation: `movePanelsUp 1s ease-out`}}>
                <Panel title="recent projects" entries={panelEntries}/>
                <Panel title="recent blog posts" entries={panelEntries}/>
            </div>
        </div>
    );
}

export default HomePage;