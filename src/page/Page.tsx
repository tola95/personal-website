import React from 'react';
import EmptyPage from './subPage/EmptyPage';
import HomePage from './subPage/HomePage';

export interface PageProps {
    id: string
}

class Page extends React.Component<PageProps> {
    public render() {
        return (
            <div className="Page">
                {mapPageIDToComponent(this.props.id)}
            </div>
        );
    }
}

export const mapPageIDToComponent = (id: string): JSX.Element => {
    switch (id) {
        case "home": return <HomePage />;
        default: return <EmptyPage />;
    }
};

export default Page;