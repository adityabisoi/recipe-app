import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css'

const App = () => {
  const APP_ID = '' //https://developer.edamam.com/edamam-docs-recipe-api
  const APP_KEY = ''

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(()=> {
    getRecipes()
  },[query])

  const getRecipes = () => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response=>response.json())
    .then(data=>{setRecipes(data.hits);console.log(data)})
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getQuery = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return(
    <div className='App'>
      <form onSubmit={getQuery} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(data => (
          <Recipe title={data.recipe.label} calories={data.recipe.calories} image={data.recipe.image} ingredients={data.recipe.ingredients} />
        ))}
      </div>
    </div>
  )
}

export default App