import React from 'react'
import Header from './Header'
import Content from './Content'
import { useState, useEffect } from 'react'
import AddItem from './AddItem'
import "./App.css"
import SearchItem from './SearchItem'
import apiRequest from './apiRequest'

const App = () => {

  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {

    const fetchItems = async () => {

      try {

        const response = await fetch(API_URL)
        if (!response.ok) throw Error("Did not recieve expected data")
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)

      } catch(err) {

        setFetchError(err.message)
      }

    }

    (async () => await fetchItems())();

  }, [] )

  const addItem = async (name) => {

    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = { id, checked: false, name}
    const listItems = [...items, myNewItem]
    setItems(listItems)

    const postOptions = {

      method : "POST",
      headers : {
        "Content-Type" : "application/json"
  
      },
      body: JSON.stringify(myNewItem)
  
    }
  
      const result = await apiRequest(API_URL, postOptions)
      if (result) setFetchError(result)

  }

  const handleSubmit = (e) => {

    e.preventDefault()
    if (!newItem) return;
    addItem(newItem)
    console.log(newItem)
    setNewItem("")

  }

  const handleDelete = async (id) => {

    
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    const deleteOptions = {method: "DELETE"}
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError (result);

  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked : !item.checked} : item)
    setItems(listItems)
    const myItem = listItems.filter((item) => item.id === id)
    
    const updateOptions = {

      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
          },
      body: JSON.stringify({ checked: myItem[0].checked })
      
    }

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchError (result);

  }

  return (
    <div className = 'all'>
      <Header />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}

      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}

      />
    <main>
      {fetchError && <p style = {{color : "red"}}>{`Error: ${fetchError}`}</p>}
      {!fetchError && <Content 
        handleDelete = {handleDelete}
        items = {items.filter(item => ((item.name).toLowerCase())
        .includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
      />}
    </main>
    </div>
  )
}

export default App