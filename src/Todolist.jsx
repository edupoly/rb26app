import React from 'react'

function Todolist() {
  var [todos,setTodos]=React.useState(["cleaning car","get water bottles","pay manu bus fee"])
  function addTodo(){
    var nt = document.getElementById("d1").value;
    setTodos([...todos,nt])
  }
  return (
    <div style={{border:'1px solid',padding:'10px',margin:'10px'}}>
        <h1>Todolist</h1>
        <input type="text" id='d1'/>
        <button onClick={()=>{addTodo()}}>Add Todo</button>
        <ul>
          {
            todos.map((todo)=>{
              return <li>
                {todo}
                <button>Done</button>
                <button>Delete</button>
                </li>
            })
          }
        </ul>
    </div>
  )
}

export default Todolist