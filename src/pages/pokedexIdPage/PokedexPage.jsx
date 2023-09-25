import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import useFetch from "../../hooks/useFetch";
import SelectType from "./SelectType";


const PokedexPage = () => {


const [inputValue, setInputValue] = useState('')
const [typeSelected, setypeSelected] = useState('allpokemons')

const trainer = useSelector(store => store.trainer)

const inputSearch = useRef()

const url =`https://pokeapi.co/api/v2/pokemon?offset=0&limit=40`
const [pokemon,getPokemons, getTypePokemon] = useFetch (url)

useEffect(() =>  {
 if (typeSelected === 'allpokemons') {
   getPokemons()
 } else {
  getTypePokemon(typeSelected)
 }
}, [typeSelected])

const handleSearch = e => {
  e. preventDefault()
 setInputValue(inputSearch.current.value.trim().toLowerCase())
}

const pokeFiltered = pokemon?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div>
      <p>Hi {trainer}</p>

      <form  onSubmit={handleSearch}>
        <input type="text" />
        <button>Search</button>
      </form>
       <SelectType
       setypeSelected = {setypeSelected}
       />
      <div>
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