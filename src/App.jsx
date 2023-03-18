
import './App.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'


function App() {
 

  return (
    <div className="App">
     <h2>My favourite movies</h2>
     <p>The Sword and the Switchblade describes how bad guys like you whose only survival was the sword encontered the cross and that that change the course of their lives.</p>
     <img src={img1} alt="" width={500} height={500} />
     <img src={img2} alt="" width={500} height={500} />
     <h3>Vacation</h3>
     <p>My vacation this year would be travelling around the most beatiful places of the world.</p>

    </div>
  )
}

export default App
