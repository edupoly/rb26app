import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='mybox'>
      <h1>App Component</h1>
      <Link to="/counter">Counter</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries2">Countries2</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries3">Countries3</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
