import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routePath } from './routes/route';
import AllPost from './pages/AllPost';


function App() {
  return (
      <Router>
        <Routes>
          <Route path={routePath.home} element = {<Home />} />
          <Route path={routePath.create} element= {<CreatePost />} />
          <Route path={routePath.posts} element={<AllPost />} />
        </Routes>
      </Router>
  );
}

export default App;