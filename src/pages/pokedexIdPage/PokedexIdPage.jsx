import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const PokedexIdPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, getPokemon] = useFetch(url)

    useEffect (() => {
      getPokemon()
    },[id])
    console.log(pokemon);

  return (
	<>
    <div className='information__pokemon'>
		<div className='information__pokemon__img'>
		   <img className='pokemon__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" /> 
		</div>
   
   <section className='pokemons__body'>
   <h2 className='pokemon__id'>#{pokemon?.id}</h2>
     <hr />
     <h2 className='information__pokemon__name'>{pokemon?.name}</h2>
	 <hr/>
	 <br />
     <div className='container-info-pokemon'>
			<div className='data'>
				<div>				
				<p className='data__pokemon__tytle'>Peso</p>
					<span className='data__pokemon'>{pokemon?.weight}KG</span>
				</div>					
				<div>		
				<p className='data__pokemon__tytle'>Altura</p>
				    <span className='data__pokemon'>{pokemon?.height}</span>
				</div>			
			</div>
              <div className='container-stats'>

				<br />
			<div className='types__abilities'>
			    <div className='container__types'>
				  <h3 className='pokemons__name__types'>Type</h3>
					{pokemon?.types.map(types => (
			    <p key={types.type.name} className={`${types.type.name}`}>
			         {types.type.name}
			    </p>
		       ))}
			    </div>
						
				<div className='container__Abilities'>
					<h3 className='card-abilities__info-pokemon-type'>Abilities</h3>
						   {pokemon?.abilities.map(abilities => (
					<p key={abilities.ability.name} className={`${abilities.ability.name}`}>
							{abilities.ability.name}
						</p>
		        ))}
					</div>
			</div>
			<hr/>
						<h1 className='container-stats__tytle'>Stats </h1>
						<hr/>
						<br />
						<br />
						<div className='stats'>
							<div className='stat-group'>
								<span className='container-stats__tytle'>HP:</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
							{pokemon?.stats[0].base_stat}
								</span>
								<br />
							</div>
							<br />
	
							<div className='stat-group'>
								<span className='container-stats__tytle'>Attack:</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats[1].base_stat}
								</span>
							</div>
							<br />
							<div className='stat-group'>
								<span className='container-stats__tytle'>Defense:</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats[2].base_stat}
								</span>
							</div>
							<br />
							<div className='stat-group'>
								<span className='container-stats__tytle'>Special Attack:</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats[3].base_stat}
								</span>
							</div>
							<br />
							<div className='stat-group'>
								<span className='container-stats__tytle'>Speed</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon?.stats[5].base_stat}
								</span>
							</div>
						</div>
               </div>
      </div>
   </section>
		
    </div>
	<div className='card-types__info-pokemon-type'>
	<h4 className='Pokedex__tytle'>MOVES</h4>
	<br />
		{pokemon?.moves.map(moves => (
			<p className='moves'  key={moves.move.name} >
			{moves.move.name}
			</p>
		))}
	</div>
	</>
  );
};



export default PokedexIdPage