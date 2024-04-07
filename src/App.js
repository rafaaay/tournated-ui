import SideProfile from './components/navigations/sideProfile';
import SideNav from './components/navigations/sidenav';
import Club from './components/pages/club';
import Home from './components/pages/club';
import Header from './components/sections/header';
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <div className='layout'>
        <SideNav />
        <div className='content'>
          <Header />
          <Club />
        </div>
        <SideProfile />
      </div>
    </div>
  );
}

export default App;
