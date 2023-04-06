
import './App.css';
import Header from './components/Header';
import Firstsection from './components/Firstsection';
import Footer from './components/Footer';
import Secondsection from './components/Secondsection';

function App() {
  return (
    <div className="App">
      <Header />
      <Firstsection />
      <section>
        <Secondsection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
