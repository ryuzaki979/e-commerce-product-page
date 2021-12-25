import '../styles/globals.css'
import { useContext,useState } from 'react'
import { Context } from '../components/Context'
function MyApp({ Component, pageProps }) {
  const [value,setValue] = useState({quantity:0,price:125})
  return  <>
  
    <Context.Provider value ={{value,setValue}}>
        <Component {...pageProps} />
    </Context.Provider>
  
  </>
  
  
}

export default MyApp
