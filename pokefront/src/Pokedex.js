import { useEffect, useState } from "react";

const Pokedex = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch(`http://localhost:8000/api/pokemon`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                // setError(err);
                setLoading(false);
                setError("error in fetching data");
                console.log("error in fetching data");
            })
            //add .catch for err here 

    }, []); // add vars inside that if changed, would rerun use effect

    const styles = (type) => {
        switch(type){
            case 'Grass':
                return {backgroundColor: "#66ff66"}
            case 'Fire':
                return {backgroundColor: "#ff4d4d"}
            case 'Water':
                return {backgroundColor: "#66ccff"}
            case 'Normal':
                return {backgroundColor: "#f2f2f2"}
            case 'Electric':
                return {backgroundColor: "#ffff00"}
            case 'Ground':
                return {backgroundColor: "#ffa31a"}
            case 'Rock':
                return {backgroundColor: "#cc9900"}
            case 'Fighting':
                return {backgroundColor: "#ff3300"}   
            case 'Psychic':
                return {backgroundColor: "#ff66ff"} 
        }
    }

    return ( 
        <div className="pokelist">

            <h2 className="mt-3">Here are all the available pokemons:</h2>
            {loading && <p>hold up page is loading...</p> }
            {data && 
            
                data.map(pokemon => (
                    <div className="indivPokemon"  style={styles(pokemon.type)} >
                        <p>{pokemon.name}</p>
                        <ul>
                            <li>Hp: {pokemon.hp}</li>
                            <li>Attack: {pokemon.attack}</li>
                            <li>Defense: {pokemon.defense}</li>
                            <li>Type: {pokemon.type}</li>
                        </ul>
                    </div>
                ))
            }
        </div>

     );
}
 
export default Pokedex;