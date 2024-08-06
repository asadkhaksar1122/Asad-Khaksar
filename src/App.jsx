import './App.css'
import Navbar from "./navbar";
import Main from "./mainhead"
import Eduction from "./education"
import Contact from "./contact";
import Project from "./project";
function App() {
  window.addEventListener("contextmenu",function (e) {
    e.preventDefault
  })
  return (
    <>
      <Navbar />
      <Main />
      <Eduction />
      <Contact></Contact>
      <Project></Project>
    </>
  )
}

export default App
