import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import HomePage from './pages/Home/HomePage';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <Router>
      <TopBar />
      <div className={GlobalStyle.container}>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
