import { useEffect, useState } from "react";

const Catchnow = () => {

    const [random, setRandom] = useState(15);
    const [tries, setTries] = useState(0);
    const [guess, setGuess] = useState(null);
    const [correct, setCorrect] = useState(false);
    const reset = false;
    const higherr = "too high, try again"
    const lowerr = "too low, try again"

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
            setGuess(higherr);
        } else {
            setGuess(lowerr);
        }

        setTries(tries + 1);
        if(tries == 3){
            reset = true;
        }
    }

    return ( 
        <div className="catch">
            {!correct && 
                <form onSubmit={handleSubmit}>
                    <label>Catch a pokemon by guessing the correct number from 1 to 50:</label>
                    <input 
                    type="text"
                    required
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    />
                    <button type="submit">Guess</button>

                </form>            
            }

            {correct && 
            
                <p>Congrats you caught a ...</p>
            }
        </div>
     );
}
 
export default Catchnow;