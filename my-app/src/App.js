import logo from './logo.svg';
import './App.css';
import { ProfileMaster } from './profile'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Counter } from './counter';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Dashboard = () => <h1>Dashboard</h1>
const Transactions = () => <h1>Transactions</h1>

const Layout = () => {
  return (
    <div>
      <h1>Pratian Technology : React Redux Router App</h1>
      <hr/>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/transcations">Transactions</Link>
          </li>
          <li>
            <Link to="/counter">Redux-Counter</Link>
          </li>
          <li>
            <Link to="/profilemaster">Profile Master-With Thunk</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

const App = () => {
  return <div className="container">
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Child routes */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transcations" element={<Transactions />} />
            <Route path="counter" element={<Counter />} />
            <Route path="profilemaster" element={<ProfileMaster />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>

}

export default App;
