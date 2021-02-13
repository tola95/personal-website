import React from 'react';

export interface PanelEntryProps {
    title?: string;
    link?: string;
    description?: string;
}

class PanelEntry extends React.Component<PanelEntryProps> {
    public render() {
        const { title, link, description } = this.props;
        return this.props.title && (
            <div className="PanelEntry">
                <a href={link}><h3>{title}</h3></a>
                <p>{description}</p>
            </div>
        );
    }
}

export default PanelEntry;