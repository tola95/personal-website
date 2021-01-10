import React from 'react';
import './NavBar.css'

export interface NavBarItemProps {
    text: string;
    key: string;
}

export default class NavBarItem extends React.Component<NavBarItemProps> {
    public render() {
        return (
            <div className="NavBarItem">
                {this.props.text}
            </div>
        );
    }
}