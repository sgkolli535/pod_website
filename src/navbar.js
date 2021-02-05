import './App.css';

function Navbar() {
  return (
    <div id="navbar">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1A46E3' }}>
        <a className="navbar-brand" id="link1" href="#wrapper"><img src="mlhLogoBlack.png" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#home" id="link2">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#meet" id="link3">Meet the Pod</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#projects" id="link4">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

