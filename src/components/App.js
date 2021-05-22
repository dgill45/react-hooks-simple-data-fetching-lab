// create your App component here
import React, {useState, useEffect} from "react"



function App() {
    const [randomDog, setRandomDog] = useState(null);

    useEffect(() => {
            fetch("https://dog.ceo/api/breeds/image/random") 
          .then((r) => r.json())
          .then((data) => {
            setRandomDog(data.messages);
          });
    },
         []);

        if(!randomDog) return <p>Loading . . . </p>;

            return <img src = {randomDog} alt = "A random dog"></img>
    
}

export default App;