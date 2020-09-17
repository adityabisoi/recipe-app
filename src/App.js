import React, { useEffect } from 'react'
import './App.css'

const App = () => {
  const APP_ID = '8d2c3366'
  const APP_KEY = 'd9dd82d3f064130f4bc2777c203095c2'

  useEffect(()=> {
    getRecipe()
  },[])

  const getRecipe = () => {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response=>response.json())
    .then(data=>console.log(data))
  }

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default App