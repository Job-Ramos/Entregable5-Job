import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { Navigate, useNavigate } from "react-router-dom"


const PokeCard = ({url}) => {

 const [ pokemon, getPokemon] = useFetch(url)

 const negative = useNavigate()

 useEffect(() => {
    getPokemon()
 },[])

const handleNegative = () =>{
  negative(`/pokedex/${pokemon.id}`)
}

  return (
    <article  onClick={handleNegative}>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section>
        <h3>{pokemon?.name}</h3>
        <ul>
          {
            pokemon?.types.map(typeInfo => (
              <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
        <hr />
        <ul>
          {
            pokemon?.stats.map(statInfo => (
              <li key={statInfo.stat.url}>
                <span>{statInfo.stat.name}</span>
                <span>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard