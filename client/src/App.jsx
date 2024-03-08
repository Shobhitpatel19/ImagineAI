import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Create from './pages/Create';
import Community from './pages/Community';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/create' element={<Create />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/community' element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
