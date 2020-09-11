import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand crimson" href="#">
                <i class="fas fa-shopping-cart"></i>Mes Courses en ligne
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ml-auto cart">
                    <div>
                        <form className="search form-inline my-2 my-lg-0">
                            <input 
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Rechercher"
                                aria-label="Rechercher"
                            />
                        </form>
                    </div>
                    <div className="menu-right">
                        {/* cart */}
                    </div>
                </div>
            </div>
            </nav>
    );
};


export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <span className="text-muted">Ecrive votre texte de pied de page ici</span>
            </div>
        </footer>
    );
};


export const Card = () => {
    return (
        <div className="col-sm-4">
            
        </div>
    );
};
