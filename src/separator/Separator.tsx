import React from 'react';
import './Separator.css';
import { separateElements } from './helpers';

export type SeparatorOrientation = "vertical" | "horizontal";

export interface SeparatorProps {
    children?: JSX.Element[];
    separator?: JSX.Element;
    width: number;
    orientation?: SeparatorOrientation;
}

export default class Separator extends React.Component<SeparatorProps> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        const { children, separator } = this.props;
        const separatedElements = separateElements(children, separator, this.props.orientation !== "vertical");
        return (
            <div className={this.props.orientation === "vertical" ? "VerticalSeparator" : "Separator"} style={{width: this.props.width + "vmin"}}>
                { separatedElements }
            </div>);
    }
}
