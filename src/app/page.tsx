import React from 'react'
import Hero from './component/hero/page'
import Pics from './component/pics/page'
import Service from './component/service/page'
import Contact from './component/contact/page'


function Home() {
  return (
    <div>
<Hero />
<Pics/>
<Service/>
<Contact/>

    </div>
  )
}

export default Home