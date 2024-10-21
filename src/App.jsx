import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+= "0123456789"
    }
    if(charAllowed){
      str+="{}``(){}!@#$"
    }


  },[length,numberAllowed,charAllowed,setPassword])



  return (
    <>
     <h1>Password generator</h1>
    </>
  )
}

export default App
