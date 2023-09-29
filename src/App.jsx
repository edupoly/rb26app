

import { useEffect } from 'react';
import Parent from './Parent';
function App() {
  useEffect(()=>{
      console.log('App Component rendered')
  });
  return (
    <div className='mybox'>
      <h1>App Component</h1>
      <Parent></Parent>
    </div>
  );
}

export default App;
