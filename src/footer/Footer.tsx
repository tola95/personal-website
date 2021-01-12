import React from 'react';
import './Footer.css'
import github from './github.png';
import linkedIn from './linkedIn.png';
import twitter from './twitter.png'
import Separator from "../separator/Separator";

export interface SocialIcon {
    icon: string,
    target: string
}

export const socialsList: SocialIcon[] = [
    {
        icon: github,
        target: "https://github.com/tola95"
    },
    {
        icon: linkedIn,
        target: "https://linkedin.com/in/omotola-babasola-2a8540a7"
    },
    {
        icon: twitter,
        target: "https://twitter.com/tolz_b"
    }
];

class Footer extends React.Component {
    public render() {
        const smIcons = generateSMIcons();
        return (
            <div className="Footer">
                <div className="FooterSocials">
                    <Separator width={80}>
                        {smIcons}
                    </Separator>
                </div>
                <div className="Copyright">
                    all views expressed on this site are mine © Omotola Babasola {getCurrentYear()}
                </div>
            </div>
        );
    }
}

const getCurrentYear = () => new Date().getFullYear();

const generateSMIcons = () => {
    return socialsList.map((socialIcon) => {
        const {icon, target} = socialIcon;
        return (
            <div className="SMIcon" key={icon}>
                <a href={target}>
                    <img width="20" height="20" src={icon} alt={icon.valueOf()}/>
                </a>
            </div>
        );
    })
};

export default Footer;
