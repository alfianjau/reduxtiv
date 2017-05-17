import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './Header.scss'
// import { Button } from 'semantic-ui-react'
import Nav from '../sub/Molecule/nav'
// import Icon from '../sub/Atom/Icon'
import HeroSection from '../sub/Molecule/HeroSection'
export const Header = () => (
  <div className='Header'>
    <Nav />
    <HeroSection />
  </div>
)

export default Header
