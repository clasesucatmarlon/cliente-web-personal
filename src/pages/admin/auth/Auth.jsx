import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import './Auth.scss';
import logo  from "../../../assets/images/svg/tincode-white.svg" 

export const Auth = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    // const openLogin = () => {
    //     setActiveIndex(0);
    // };

    const panes = [
        {
            menuItem: "Enter",
            render: () => (
                <Tab.Pane>
                    <h3>Login Form</h3>
                </Tab.Pane>
            )
        },
        {
            menuItem: "User New",
            render: () => (
                <Tab.Pane>
                    <h3>Register Form</h3>
                </Tab.Pane>
            )
        }
    ];

    return (
        <div className="auth">
            <img src={logo} alt="Logo" className="logo"/>
            <h1>Estamos en auth</h1>
            <Tab
                panes={panes}
                className="auth__forms"
                activeIndex={activeIndex}
                // onTabChange={(_, data) => console.log(data)}
                onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
            />
        </div>
    );
};
