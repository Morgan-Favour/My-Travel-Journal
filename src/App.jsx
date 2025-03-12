
import Entry from './Components/Entry'
import Header from './Components/Header'
import travelData from './data'


function App() {
  return (
    <>
      <Header />
        {travelData.map((data) =>  (
          
          <Entry 
          key={data.id}
          {...data}
          
          />

        ))}
        
    </>
  )

}

export default App
