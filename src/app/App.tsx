import React from 'react';
import './App.css';
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import Page from "../page/Page";

const items = ['home', 'about', 'projects', 'socials'];

export interface AppState {
    selectedItem: string;
}

export const DEFAULT_SELECTED_ITEM = "home";

class App extends React.Component<{}, AppState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            selectedItem: DEFAULT_SELECTED_ITEM
        }
    }

    public render() {
        return (
            <div className="App">
                <NavBar items={items} selectedItem={this.state.selectedItem} onClick={this.onClick}/>
                <Page id={this.state.selectedItem}/>
                <Footer/>
            </div>
        );
    }

    private onClick = (item: string) => {
        this.setState({
            selectedItem: item
        });
    }
}

export default App;
