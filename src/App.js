import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br /><br />
        <div className="row">
            <div className="col-9">
                <Main />
            </div>
            <div className="col-3">
                <Nav />
            </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
