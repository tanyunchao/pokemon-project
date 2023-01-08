import { useEffect, useState } from "react";

const Catchnow = () => {

    const [random, setRandom] = useState(15);
    const [tries, setTries] = useState(1);
    const [guess, setGuess] = useState(null);
    const [correct, setCorrect] = useState(false);
    const [reset, setReset] = useState(false);

    const [error, setError] = useState('')
    const higherr = "too high, try again"
    const lowerr = "too low, try again"

    //function to randomise value
    function RNG() {
        return Math.floor(Math.random() * 50) + 1;
    }
    

    useEffect(() => {
        setRandom(RNG());
    }, [reset])

    const handleSubmit = e => {
        e.preventDefault();
        if(guess == random){
            setCorrect(true);
        } else if (guess > random) {
            setError(higherr);
        } else {
            setError(lowerr);
        }

        setTries(tries + 1);
        if(tries === 5 && correct === false){
            setTimeout(() => {
                window.location.reload(false);
            }, 3000);
        }
    }

    return ( 
        <div className="catch">
            <p>answer: {random}</p>
            {!correct && 
                <form onSubmit={handleSubmit}>
                    <label>Catch a pokemon by guessing the correct number from 1 to 50: </label>
                    <p> Tries left: {6 - tries }</p>
                    <input 
                    type="text"
                    required
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    />
                    <button type="submit">Guess</button>

                </form>            
            }

            {(error && !correct) && <p>{error}</p>  }
            {(tries === 6 && !correct) && 
                <p>Ran out of tries, game will auto reset after 3s</p>
            }

            {correct && 
            
                <p>Congrats you caught a ...</p>
            }
        </div>
     );
}
 
export default Catchnow;