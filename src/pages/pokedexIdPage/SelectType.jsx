import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({setypeSelected}) => {

    const url = `https://pokeapi.co/api/v2/type`
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    },[])

    console.log(types);

    const handeleChange = e => {
        setypeSelected(e.target.value); 
    }

  return (
    <select onChange={ handeleChange}>
     <option value="allPokemons">all pokemons</option>
        {
            types?.results.map(typeInfo => (
                <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType