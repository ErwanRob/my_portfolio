import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Skills from './components/skills';
import Headline from './components/headLine';


function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <Header />
        <section className='section section_introduction'>
          <Headline />
        </section>
        <section className='section section_work'>
          <h2>Works</h2>
          <Book />
        </section>
        <section className='section section_skills'>
          <h2>Skills</h2>
          <Skills />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;





/* <h2>About</h2> */
/* <p className='introduction'>
            Hello 👋 <br />
            I'm Erwan Robin - curious<br />
            designer & web developper <br />
            based in Strasbourg, France.</p> */
