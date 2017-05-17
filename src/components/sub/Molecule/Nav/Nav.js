import React from 'react'
// import Card from '../../Atom/Card'
import { IndexLink, Link } from 'react-router'
import { Button } from 'semantic-ui-react'
import './nav.scss'

export const Navbar = () => (
  <div className='Navbar'>
    <div className='container text-right' >
      <IndexLink to='/' activeClassName='route--active'>
        <Button basic inverted>Home</Button>
      </IndexLink>
      <Link to='/counter' activeClassName='route--active'>
        <Button basic inverted>About-us</Button>
      </Link>
      <Link to='/counter' activeClassName='route--active'>
        <Button basic inverted>Counter</Button>
      </Link>
      <Link to='/counter' activeClassName='route--active'>
        <Button basic inverted>Our Work</Button>
      </Link>
      <Link to='/counter' activeClassName='route--active'>
        <Button basic inverted>Contact</Button>
      </Link>
    </div>
  </div>
)

export default Navbar
