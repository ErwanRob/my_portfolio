function Skills() {
  return (
    <div className="section__skills-wrapper">
      <div className="skills">
        <p className="skills-title">HTML</p>
        <div className="skills__container">
          <div className="skills__container-item --html">90%</div>
        </div>
        <p className="skills-title">CSS</p>
        <div className="skills__container">
          <div className="skills__container-item --css">80%</div>
        </div>
        <p className="skills-title">JavaScript</p>
        <div className="skills__container">
          <div className="skills__container-item --js">65%</div>
        </div>
        <p className="skills-title">React</p>
        <div className="skills__container">
          <div className="skills__container-item --react">60%</div>
        </div>
        <p className="skills-title">Redux</p>
        <div className="skills__container">
          <div className="skills__container-item --redux">50%</div>
        </div>
        <p className="skills-title">SASS</p>
        <div className="skills__container">
          <div className="skills__container-item --sass">70%</div>
        </div>
      </div>
      <div className="skills-Two">
        <img className="skills-Two-img" src="./typwrite2.jpg" alt="typwrite" />
      </div>
    </div>
  );
}
export default Skills;
