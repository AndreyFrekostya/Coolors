import React from 'react'
import { useState, useEffect} from 'react'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Colors from './components/Pallete/Colors';
import funcHex from './func and hooks/funcHex';
import './styles/style.css';
function App() {
  const [colors, setColors] = useState([])
  const [exCol, setEx]=useState([])
  const [exCol2, setEx2]=useState([])
  const [status, setStatus]=useState(true)
  const firstcolor=funcHex(true)
  useEffect(() => {
    setColors(firstcolor)
  }, [])
  const Context=React.createContext()
  
  const stateHex=(e)=>{
    if(e.code === 'Space'){
      if(colors.length>1 && colors.length<11){
        let changeCol=colors.filter(col=>col.isBlocked===false)
        let newColors=funcHex(false, colors.length, colors, setColors)
        setColors(newColors)
      }
    } 
  }
  useEffect(() => {
  
  
  }, [colors.length])
  
  
  
  return (
    <div className="App" tabIndex={0} onKeyDown={(e)=>stateHex(e)} >
      <Header />
      <Menu/>
        <Colors colors={colors} setColor={setColors}/>

    </div>
  );
}

export default App;
