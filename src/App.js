import logo from './logo.svg';
import "./_app.scss"
import Header from './Components/header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {Container} from "react-bootstrap"
import Homescreen from './Screens/Homescreen/Homescreen';
import { useState } from 'react';
function App() {
  const[value,setvalue]=useState(false)
  return (
    <>
     <Header value={value} setvalue={setvalue}/>
     <div className='app_container '>
     <Sidebar  value={value}  />
<Container fluid className='app_main '>
<Homescreen/>
</Container>
     </div>
     </>
  );
}

export default App;
