import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home"


function App() {

  return (
    <>
      <Router basename="/igloo-clone">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
