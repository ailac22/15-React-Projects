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
    try {
      const response = await fetch("https://course-api.com/react-tours-project");
      const t = await response.json();
      console.log(t)
      setTours(t)
      setLoaded(true)
    }
    catch (error){
      console.error(error)
    }
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
        <div className="Loading">
          <h1>Loading...</h1>
        </div>
      </main>
      )
  }
  else if (tours?.length === 0){
    return (
    <main>
      <div className="No-tours">
        <h2>No tours left</h2>
        <button className="Refresh" onClick={() => fetchTours()}>Refresh</button>
      </div>
    </main>
    )
  }
  else {

    return (
      <main>
        <div className="Title">
          <h2>Our tours</h2>
        </div>
        <TourList tours={tours} removeTour={removeTour}></TourList>
      </main>
      )
  }
}

export default App;
