

import './App.css';
import Counter from './Counter';
import Countries from './Countries';
import Regform from './Regform';
import Student from './Student';

function App() {

  return (
    <div className='mybox'>
      <h1>App Component</h1>
      <Regform></Regform>
      <Countries></Countries>
      <Student></Student>
      <Counter></Counter>
    </div>
  );
}

export default App;
// hook is a function dedicated to unique functionality