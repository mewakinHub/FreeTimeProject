import "./App.css"

const Content = ( {items, handleDelete, handleCheck} ) => {
  return (

    <ul>
        {items.map((comp) =>
        <><li key={comp.id}>
              <div className = "mid">
                <input id = "check" type='checkbox' checked = {comp.checked} 
                onChange = {() => handleCheck(comp.id)}></input>
                <label style = {(comp.checked) ? {textDecoration : "line-through"} : null}
                onClick = {() => handleCheck(comp.id)}>{comp.name}</label></div>

            </li>
            <button id = "delete" onClick = {() => handleDelete(comp.id)}>Delete</button></>
          
        )}

    </ul>
  
  )}
  

export default Content