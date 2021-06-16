import GlobalStyle from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div>
      <TopBar />
      <div className={GlobalStyle.container}>
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
