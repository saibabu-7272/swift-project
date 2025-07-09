import { useEffect, useState } from 'react'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

const App = () =>{
      const [userDetails, setUserDetails] = useState({})

      const fetchUserData = async () => {
          try{
              const res = await fetch('https://jsonplaceholder.typicode.com/users')
              const theData = await res.json()
             console.log(theData[0])
              if(res.ok){
                  setUserDetails(theData[0])
              }
          }catch(e){
              console.log({err : e.message})
          }
      }
  
      useEffect(()=>{
          fetchUserData()
      },[])

      // const getShortName = ()=>{
      //   const userName = userDetails.name 
      //   let shorter = ''
      //   for (let word of userName.split(' ')){
      //     shorter = shorter + word[0]
      //   }
      //   return shorter.toUpperCase()
      // }
     
     const shortName = 'LS'
      
  return(
    <BrowserRouter>
      <Header shortName={shortName} name={userDetails.name}/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile shortName={shortName} userDetails={userDetails} />} />
      </Routes>
    </BrowserRouter>
)

}

export default App