import React from 'react'
import Hero from './Hero'
import Corevalue from './Corevalue'
import Getstarted from './Getstarted'
import Designlang from './Designlang'
import Resources from './Resources'

const Landingpage : React.FC= () => {
  return (
    <div>
     <Hero/>
     <Corevalue/>
     <Getstarted/>
     <Designlang/>
     <Resources/>
    
    </div>
  )
}

export default Landingpage