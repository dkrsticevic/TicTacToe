import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { Room } from "./pages/Room"


function App() {

  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/TicTacToe" element={<Home/>} />
        <Route path="/r" element={<Room/>} />
      </Routes>
    </Container>
    </>
  )
}

export default App
