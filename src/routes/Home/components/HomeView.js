import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import CardGroup from '../../../components/sub/Molecule/CardGroup'
import FormSection from '../../../components/sub/Organism/FormSection'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
    <CardGroup />
    <FormSection />
  </div>
)

export default HomeView
