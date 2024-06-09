import React from 'react'
import './App.css'
import Header from './components/header_component/Header'
import UdevsInfo from './components/udevs_info_components/UdevsInfo'
import OurSevices from './components/our_services/OurSevices'
import Team from './components/team_components/Team'
import Devolopment from './components/development_components/Devolopment'

const App = () => {
  return (
    <div className='udevs_bg max-w-[1550px] w-[1500px] mx-auto'>
      <Header/>
      <UdevsInfo/>
      <OurSevices/>
      <Team/>
      <Devolopment/>
    </div>
  )
}

export default App
