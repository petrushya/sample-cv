import { useState } from 'react'
import Nickname from './assets/nickname'
import './App.css'

export default function App() {

  const [data, setData] = useState({});

  return (
    <>
      <Nickname data={data} setData={setData} />
    </>
  )
}
