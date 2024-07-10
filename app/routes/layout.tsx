import React from 'react';

import NavBarLayer from "@/app/components/main_page/navbar_layer/NavBarLayer";
import {TTComponents} from "@/app/components/generalComponents/TTCompnents"; // Optional: Add any layout-specific styles here
import './forlayout.css'

const RoutesLayout: React.FC = ({children}: {children: React.ReactNode}) => {
    return (
        <div id="routes-layout">
            <NavBarLayer/>
            <div className="content">
                <div className="dailyTTContainer">
                    <h1 style={{marginBottom: '20px', fontSize: '2.5rem'}}>Today's recommendation.</h1>
                    <div className="ttContainer">
                        <TTComponents todaysTopic={'test'}/>
                        <TTComponents todaysTopic={'buffer'}/>
                        <TTComponents todaysTopic={'streams'}/>
                        <TTComponents todaysTopic={'buffer'}/>
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default RoutesLayout;