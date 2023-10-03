
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <div className='mybox'>
      <h1>App Component</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
