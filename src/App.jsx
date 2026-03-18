import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data/data"
import square1 from "./assets/images/square1.jpg"

function App() {
  const mappedData = data.map((house) => {
    return <Main 
                 header={house.header}
                 location={house.location}
                 locationLink={house.locationLink}
                 meters={house.meters}
                 availableRooms={house.availableRooms}
                 yearVisit={house.yearVisit}
                 comments={house.comments}
                 img={square1}
                 />
  })
  return (
    <>
      <Header />
      <main>
        {mappedData}
      </main>
    </>
  )
}

export default App