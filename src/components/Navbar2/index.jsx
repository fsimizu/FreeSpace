import { Link } from 'react-router-dom';

export function Navbar2() {
    return (
    
        <div className="navbar__container">
            <nav className={"navbar-expand-sm navbar"}>
                <div className="container-fluid align-items-end max-width">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/logo.svg" 
                            alt="freeSpace_logo"
                            style={{border: "none"}}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}