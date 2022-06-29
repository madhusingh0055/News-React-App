
import './App.css';
import NewsCard from './components/NewsCard';
import NewsList from './components/NewsList'
import ShowNews from './components/ShowNews';
import {BrowserRouter as Router,Routes, Route,  Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
         <Route path="/" element={<NewsList />}></Route>
          <Route path="/news" element={<ShowNews />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
