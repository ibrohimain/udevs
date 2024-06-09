import React from 'react'
import './App.css'
import Header from './components/header_component/Header'
import UdevsInfo from './components/udevs_info_components/UdevsInfo'
import OurSevices from './components/our_services/OurSevices'
import Team from './components/team_components/Team'
import Devolopment from './components/development_components/Devolopment'
import Erpe from './components/erpe_components/Erpe'
import Desigin from './components/desigin/Desigin'
import Optimaziton from './components/optimization_component/Optimaziton'
import Consulting from './components/consulting/Consulting'
import Tols from './components/tols_components/Tols'
import OurClient from './components/our_client/OurClient'
import Delever from './components/delever/Delever'
import Smsuz from './components/smsuz/Smsuz'

const App = () => {
  return (
    <div className='udevs_bg max-w-[1550px] w-[1500px] mx-auto'>
      <Header/>
      <UdevsInfo/>
      <OurSevices/>
      <Team/>
      <Devolopment/>
      <Erpe/>
      <Desigin/>
      <Optimaziton/>
      <Consulting/>
      <Tols/>
      <OurClient/>
      <Delever/>
      <Smsuz/>
    </div>
  )
}

export default App
