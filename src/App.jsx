//import { useState } from 'react';
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(2)
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Dark mode enable')
  const [alert, setAlert] = useState(null)
  const handleCount = () => {
    setCount( count + 1)
  }
  const showAlert = (type,message) => {
    setAlert({
      type:type,
      message:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
    
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      setText('Light mode enable')
      showAlert('success','dark mode has been mode enable')
    }
    else{
      setMode('light')
      setText('Dark mode enable')
      showAlert('success','light mode has been mode enable')
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar 
          title="hamro bazzar" 
          toggleMode={toggleMode} 
          text={text}
          mode={mode}
        />
        <Alert 
          alert={alert}
          />
            <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
