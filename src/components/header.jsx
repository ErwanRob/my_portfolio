function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Erwan.</h1>
      <span className="header-decoration">
        ___ _F_ONT ___ _ _D_V _O M_NT__/__C__D_NG_ ___ ____REA_T__ _ _ _ __ ____
      </span>
      <nav className="header-nav">
        <a href="#Works">
          {" "}
          <button>Work</button>
        </a>
        <a href="#Skills">
          {" "}
          <button>Skills</button>
        </a>
        <a href="/">
          {" "}
          <button>Resume</button>
        </a>
        <a href="#Contact">
          <button>Contact</button>
        </a>
      </nav>
    </div>
  );
}

export default Header;
