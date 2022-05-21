import Head from 'next/head'
import Image from 'next/image'
import { SideBar } from '../components/side-bar'
import { useState } from 'react'
import { App } from '../components/app'

export default function Home() {
  
  const [current, setCurrent] = useState(0)
  
  return (
    <div className="app-body">
      <SideBar current={current} setCurrent={setCurrent}/>
      <App/>
    </div>
  )
}
