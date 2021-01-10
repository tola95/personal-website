import React from 'react';
import Logo from "../logo/Logo";
import Separator from "../separator/Separator";
import NavBarItem from "./NavBarItem";
// import NavBarSeparator from "./NavBarSeparator";

export interface NavBarProps {
    items: string[];
}

export default class NavBar extends React.Component<NavBarProps> {
    private navItems: JSX.Element[] = [];

    public constructor(props: any) {
        super(props);
        this.navItems = generateNavItems(this.props.items);
    }

    public render() {
        console.log(JSON.stringify(this.navItems));
        return (
            <div className="NavBar">
                <Logo />
                <Separator>
                    {this.navItems}
                </Separator>
            </div>
        );
    }
}

const generateNavItems = (items: string[]) => {
    return items.map(item => (
        <NavBarItem text={item} key={item}/>
    ));
};

// const navBarSeparator = () => {return (
//     <NavBarSeparator />
// )};