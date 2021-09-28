import './App.scss';
import './App.css';
import {Main} from './component/Main.jsx'
import {ListManage} from './component/ListManage.jsx'

const App = () => {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <Main />
      <ListManage />
    </div>
  );
}

export default App;
