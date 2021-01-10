import React from 'react';
import './Separator.css'
import NavBarItem from "../navbar/NavBarItem";

export interface SeparatorProps {
    children?: JSX.Element[];
    separator?: JSX.Element;
}

export default class Separator extends React.Component<SeparatorProps> {
    private separatedElements: JSX.Element[] = [];

    public constructor(props: any) {
        super(props);
        const { children, separator } = this.props;
        this.separatedElements = separateElements(children, separator);
    }

    public render() {
        return (
            <div className="Separator">
                { this.separatedElements }
            </div>);
    }
}

const separateElements = (originalElements?: JSX.Element[], separator?: JSX.Element): JSX.Element[] => {
    let separatedElements: JSX.Element[] = [];

    if (!originalElements) {
        return separatedElements;
    }

    for (let i = 0; i < (originalElements.length * 2) - 1; i++) {
        if (i % 2 === 0) {
            separatedElements[i] = originalElements[i/2];
        } else {
            separatedElements[i] = separator ||
                (<NavBarItem text={
                "|"
                } key={`separator_${i}`}/>);
        }
    }
    return separatedElements;
};
