import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import useFetch from "../../hooks/useFetch";
import SelectType from "./SelectType";
import './HomePage.css/PokedexPage.css'


const PokedexPage = ({}) => {


const [inputValue, setInputValue] = useState('')
const [typeSelected, setTypeSelected] = useState('allPokemons') 

const trainer = useSelector(store => store.trainer)

const inputSearch = useRef()

const url ='https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
const [pokemons,getPokemons, getTypePokemon] = useFetch(url)

useEffect(() =>  {
 if (typeSelected === 'allPokemons') {
   getPokemons()
 } else {
  getTypePokemon(typeSelected)
 }
}, [typeSelected])

const handleSearch = e => {
  e.preventDefault()
  setInputValue(inputSearch.current.value.trim(). toLowerCase())
}

const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div className="container-name">  
      <div className='btums'>
            <button className='btm2'></button>
            <img className="img__fondo" src="images/react-ent5.png" alt="" />
            <img className="img__pokedex" src="images/poke.png" alt="" />
            </div> 
      
      <form className="pokedex__form" onSubmit={handleSearch}>
      <p className="pokedex__greeting">Hi {trainer}, welcome. Here you can find your favorite pokemon. </p>
        <input className="pokedex__input" placeholder="Search pokemon" ref={inputSearch} type="text" />
        <button className="pokedex__button">Search</button>
      </form >
       <SelectType
       setTypeSelected = {setTypeSelected}
       />

      <div className="container__pokecard">
        {
          pokeFiltered?.map(poke => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
            ) )
          }
      </div>
    </div>
  )
}

export default PokedexPage