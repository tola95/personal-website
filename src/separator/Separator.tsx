import React from 'react';
import './Separator.css'

export interface SeparatorProps {
    children?: JSX.Element[];
    separator?: JSX.Element;
    width: number;
}

export default class Separator extends React.Component<SeparatorProps> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        const { children, separator } = this.props;
        const separatedElements = separateElements(children, separator);
        return (
            <div className="Separator" style={{width: this.props.width + "vmin"}}>
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
                (<div className="SeparatorIcon" key={`separator_${i}`} style={{width: "10vmin"}}>|</div>);
        }
    }
    return separatedElements;
};
