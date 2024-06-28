import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import {login , logOut} from './store/authSlice'
import { Footer, Header } from './Components';
import { Outlet } from 'react-router-dom';
function App() {
  // console.log("hu");
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const[loading , setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
     if(userData){
      dispatch(login({userData}))
     }else{
      dispatch(logOut())
     }
    })
    .finally(() => setLoading(false));
  },[])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap justify-between bg-gray-400'>
      <div className='w-full block'>

        <Header />

          <main>

                <Outlet />

          </main>

        <Footer />

      </div>
    </div>
  ) : null

}

export default App
