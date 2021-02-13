import './HomePage.css'
import React from 'react';
import tola from './tola.jpeg'
import { panelEntries } from "../../panel/panelEntries";
import Panel from "../../panel/Panel";
import { GithubProjectsClient, GithubProjectsResponse } from "../../network/github/GithubProjectsClient";
import {PanelEntryProps} from "../../panel/PanelEntry";

export interface HomePageState {
    projects: GithubProjectsResponse[] | null;
}

class HomePage extends React.Component<any, HomePageState> {
    state = { projects: null };

    // ToDo: Refactor this component to move network logic to a container component
    public async componentDidMount() {
        const projectsClient = new GithubProjectsClient();
        const projects = await projectsClient.get();
        this.setState({ projects });
    }

    public render() {
        return (
            <div>
                <div className="TextImageContainer">
                    <div className="TextParagraph">
                        <h1>software engineer and writer</h1>
                        <p style={{animation: `fadein 1s linear`}}>
                            Hello and welcome to my personal website. My name is <a href="https://www.names.org/n/omotola/about#associations">Omotola</a> (aw-maw-taw-lah), although I go by Tola (taw-lah) for short. I like working on cool projects, mostly software, but I also enjoy creative writing. In my spare time I like to travel, play football, watch football, listen to music and watch tv shows.
                        </p>
                    </div>
                    <img className="PersonalImage" src={tola} alt="tola" width="300vmin" height="300vmin" style={{animation: `fadein 1s linear`}}/>
                </div>
                <div className="PanelContainer">
                    {this.renderProjectsPanel()}
                    {/*<Panel title="recent blog posts" entries={panelEntries}/>*/}
                </div>
            </div>
        );
    }

    private renderProjectsPanel = () => {
        return this.state.projects && this.state.projects !== [] && (<Panel title="recent projects" entries={convertProjectsToPanelEntries(this.state.projects)}/>);
    }
}

const convertProjectsToPanelEntries = (projects: GithubProjectsResponse[] | null): PanelEntryProps[] => {
    return projects !== null ? projects.map(convertProjectToPanelEntry) : [];
}

const convertProjectToPanelEntry = (project: GithubProjectsResponse): PanelEntryProps => {
    return {
        title: project.name,
        link: project.html_url,
        description: project.description
    }
}

export default HomePage;