import './style/style.css';
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
        <section className='section section__introduction'>
          <Headline />
        </section>
        <section className='section section__work'>
          <h2>Works</h2>
          <Book />
        </section>
        <section className='section section__skills'>
          <h2>Skills</h2>
          <Skills />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;