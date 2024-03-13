import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar'
import  { ThemeProvider  } from 'styled-components';

function App() {
const theme = {
  colors: {
    blue: '#8CB9BD',
    snow: '#FEFBF6',
    yellow: '#ECB159',
    brown: '#B67352',
    nude: '#F1E4C3',
  }
}
  return (
    <ThemeProvider theme={theme} >
      <Navbar/>
     <Outlet />
    </ThemeProvider>
  )
}

export default App
