import React, { Fragment } from 'react';
import './styles/App.css';
import { Navbar } from './components/navbar';

const SideMenu = () => {
    return (
        <div className="col-sm-2">
            Side Menu
        </div>
    )
}

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <div className="row">
                    <SideMenu />
                    <div className="col-sm">
                        Boutique
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;