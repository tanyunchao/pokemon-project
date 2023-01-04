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


    return ( 
        <div>

            <p>Here are all the available pokemons</p>
            {data && 
            
                data.map(pokemon => (
                    <div>
                        <p>pokemon.name</p>
                        <p>pokemon.hp</p>
                    </div>
                ))
            }
        </div>

     );
}
 
export default Pokedex;