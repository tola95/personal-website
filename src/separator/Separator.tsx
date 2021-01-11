import React from 'react';
import './Separator.css'

export interface SeparatorProps {
    children?: JSX.Element[];
    separator?: JSX.Element;
}

export default class Separator extends React.Component<SeparatorProps> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        const { children, separator } = this.props;
        const separatedElements = separateElements(children, separator);
        return (
            <div className="Separator">
                { separatedElements }
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
                (<div key={`separator_${i}`}>|</div>);
        }
    }
    return separatedElements;
};
