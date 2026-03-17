import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <>
      <Header />
      <Main   header="Villa Miwani"
              location="Kisumu, KE"
              locationLink="https://maps.app.goo.gl/tLXx46nAgSPut29cA"
              meters="[1160 m"
              availableRooms="[2"
              yearVisit="[2025]"
              comments="Experienced really heavy rainfalls. The lights were out for the most 
                        part but there was no issue with the drainage system in the area"
              src="/src/assets/images/square1.jpg"
              alt="hot air balloon"
              />
      <Main   header="Tunataka Pawa"
              location="Nairobi, KE"
              locationLink="https://maps.app.goo.gl/tLXx46nAgSPut29cA"
              meters="[1160 m"
              availableRooms="[4"
              yearVisit="[2024]"
              comments="Such a great experience 10/10"
              src="/src/assets/images/square1.jpg"
              alt="hot air balloon"
              />
    </>
  )
}

export default App