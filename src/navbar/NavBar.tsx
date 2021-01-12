import React from 'react';
import Logo from "../logo/Logo";
import Separator from "../separator/Separator";
import NavBarItem from "./NavBarItem";

export interface NavBarProps {
    items: string[];
    selectedItem: string;
    onClick: (item: string) => void;
}

export default class NavBar extends React.Component<NavBarProps> {
    public constructor(props: any) {
        super(props);
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
            <NavBarItem text={item} key={item} selected={this.props.selectedItem === item} onClick={this.props.onClick.bind(null, item)}/>
        ));
    };

}