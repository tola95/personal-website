import React from 'react';
import './Panel.css';
import Separator from "../separator/Separator";
import { PanelEntryProps, default as PanelEntry } from "./PanelEntry";

export interface PanelProps {
    title: string;
    entries: PanelEntryProps[];
}

class Panel extends React.Component<PanelProps> {
    public render() {
        const { title, entries } = this.props;
        const panelEntries = generatePanelEntries(entries);
        return (
            <div className="Panel" style={{animation: `movePanelsUp 1s ease-out`}}>
                <h2>{title}</h2>
                <Separator orientation="vertical" width={80}>{panelEntries}</Separator>
            </div>
        );
    }
}

const generatePanelEntries = (entries: PanelEntryProps[]): JSX.Element[] => {
    return entries.map((entry: PanelEntryProps) => {
        const { title, link, description } = entry;
        return <PanelEntry title={title} description={description} link={link}/>
    });
};

export default Panel;