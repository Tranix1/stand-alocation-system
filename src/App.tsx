import React from "react"
import Header from "./Header"
import Home from "./Home/Index"
import Form from "./Form/Index"
  import AvailableStands from "./AvailableStands/Index"
  import SideBar from "./SideBar/Index"

function App() {
  return (
    <>
  <Header/>

    <Home/>
    {/* <Form/> */}
    {/* <AvailableStands/> */}
    <SideBar/>

    </>
  )
}

export default App
