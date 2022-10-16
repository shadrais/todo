import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import GoogleButton from 'react-google-button'
import { supabase } from './supabaseClient'
import { useEffect } from 'react'

//ZcKZT7bQ6Beho5hJ

function App() {
  const [session, setSession] = useState(null)
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    console.log(data, error)
    setSession(data)
  }

  useEffect(() => {
    const fun = async () => {
      const { data, error } = await supabase.auth.getSession()
      console.log(data, error)
    }
    fun()
  }, [])

  return (
    <>
      <div className='light-bg'></div>
      <div className='flex justify-center '>
        <div className='w-96'>
          {session && <GoogleButton onClick={signInWithGoogle} />}
          <Header />
          <Input />
        </div>
      </div>
    </>
  )
}

export default App
