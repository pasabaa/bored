import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  
  const [activities, setActivities] = useState([]);

  const API_URL = 'https://www.boredapi.com/api/activity';
  

  const getActivities = () => {
    axios.get(API_URL)
    .then(response => setActivities(response.data))
    .catch(error => console.log(error))
  }

  console.log(activities)
 
  useEffect(()=> {

    getActivities();

  }, [setActivities])

  return (
    <div className="h-screen grid place-items-center bg-black p-8">
      <div className="w-4/12 mx-auto text-gray-300 sm:w-full">
        <div className="flex flex-col p-8">
          <h1 className="text-6xl font-bold mb-8 sm:text-4xl">Bored?</h1>
          <h1 className="text-4xl text-gray-500 font-light sm:text-lg">{activities.activity}</h1>
          <div className="flex gap-4 my-6">
            <p title="Participants" className="rounded-full py-1 px-2 text-gray-400 text-xs border"><i className="bi bi-person-fill mr-2"></i>{activities.participants}</p>
            <p title="Type" className="rounded-full py-1 px-2 text-gray-400 text-xs capitalize border"><i className="bi bi-bullseye mr-2"></i>{activities.type}</p>
          </div>
          <button className="border border-dashed hover:border-solid py-2 px-3 text-sm text-gray-100 font-bold rounded-full self-end transition-all sm:self-start" onClick={getActivities}>New activity</button>
        </div>

      </div>
    </div>
  )
}

export default App
