import "./App.css"
import { useRef } from "react"

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

  const inputRef = useRef()

  return (
    
    <form onSubmit = {handleSubmit}>
    <label htmlFor = "addItem"></label>
        <input 
            autoFocus
            ref = {inputRef}
            id = "addItem"
            type = "text"
            placeholder = "Add Item"
            required
            value = {newItem}
            autoComplete = "off"
            onChange = {(e) => setNewItem(e.target.value)}
            />
        <button id = "add"
            type = "submit"
            aria-label = "Add Item"
            onClick = {() => inputRef.current.focus()}
            >
            +
            </button>

    </form>

  )
}

export default AddItem