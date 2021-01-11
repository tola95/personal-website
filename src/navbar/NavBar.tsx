import React from 'react';
import Logo from "../logo/Logo";
import Separator from "../separator/Separator";
import NavBarItem from "./NavBarItem";

export interface NavBarProps {
    items: string[];
}

export interface NavBarState {
    selectedItem: string;
}

export const DEFAULT_SELECTED_ITEM = "home";

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            selectedItem: DEFAULT_SELECTED_ITEM
        }
    }

    public render() {
        const navItems = this.generateNavItems();
        return (
            <div className="NavBar">
                <Logo/>
                <Separator width={80}>
                    {navItems}
                </Separator>
            </div>
        );
    }

    private generateNavItems = () => {
        return this.props.items.map(item => (
            <NavBarItem text={item} key={item} selected={this.state.selectedItem === item} onClick={this.onClick.bind(null, item)}/>
        ));
    };

    private onClick = (item: string) => {
        this.setState({
            selectedItem: item
        });
    }

}