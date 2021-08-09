import React, {useState, useEffect} from 'react';
import './App.scss';
import Tour from './Types/TourTypes'
import TourList from './Components/TourList'

function App() {

  const [loaded, setLoaded] = useState(false)
  const [tours, setTours] = useState<Tour[] | undefined>(undefined)

  console.log(tours)
  async function fetchTours(){
    setLoaded(false);
    const response = await fetch("https://course-api.com/react-tours-project");
    const t = await response.json();
    console.log(t)
    setTours(t)
    setLoaded(true)
  }

  useEffect(() => {
    fetchTours();

  },[])

  function removeTour(id:string): void {

    let remaining = tours?.filter(tour => tour.id !== id)
    setTours(remaining)
  }


  if (!loaded){
    return (
      <main>
        <div>Cargando</div>
      </main>
      )
  }
  else if (tours?.length === 0){
    return (
    <main>
      <h2>No tours left</h2>
      <button onClick={() => fetchTours()}>Refresh</button>
    </main>
    )
  }
  else {

    return (
      <main>
        <h2>Our tours</h2>
        <TourList tours={tours} removeTour={removeTour}></TourList>
      </main>
      )
  }
}

export default App;
