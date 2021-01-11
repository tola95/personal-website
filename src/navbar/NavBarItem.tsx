import React from 'react';
import './NavBar.css'

export interface NavBarItemProps {
    text: string;
    key: string;
    selected: boolean;
    onClick?: () => void;
}

export default class NavBarItem extends React.Component<NavBarItemProps> {
    public render() {
        if (this.props.onClick) {
            return this.props.selected ?
                (
                    <button className="NavBarItem" onClick={this.props.onClick}>
                            <b className="NavBarItemUnderline">
                                {this.props.text}
                            </b>
                    </button>
                ):(
                <button className="NavBarItem" onClick={this.props.onClick}>
                        {this.props.text}
                </button>
            );
        }
        return (<div className="NavBarItem">
            {this.props.text}
        </div>);
    }
}