import './App.css';
import First from './First';
import { MyContext } from './Context/MyContext';
const mydetails = {
  firstname:'praveen',
  lastname:'gubbala'
}
function App() {
  var firstname="praveen";
  return (
    <MyContext.Provider value={mydetails}>
      <div className='mybox'>
        <h1>App Component:{firstname}</h1>
        <First></First>
      </div>
    </MyContext.Provider>
  );
}

export default App;
// Context - static data=>themes settings,userdetails
// Redux - dynamic state