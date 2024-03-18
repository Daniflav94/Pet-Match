import { Outlet } from 'react-router-dom'
import { Navbar } from './components/navbar'
import  { ThemeProvider  } from 'styled-components';

function App() {
const theme = {
  colors: {
    blue: '#8CB9BD',
    snow: '#FEFBF6',
    yellow: '#ECB159',
    brown: '#B67352',
    nude: '#f0e4c4',
    nude2: '#f5eee8',
    coffee: '#866552',
    gray: '#707070'
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
