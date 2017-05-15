import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Footer.scss'
import { Button } from 'semantic-ui-react'

export const Footer = () => (
  <div className='footer'>
    <h1>footer</h1>
    <IndexLink to='/' activeClassName='route--active'>
      <Button basic>Home</Button>
    </IndexLink>
    <Link to='/counter' activeClassName='route--active'>
      <Button basic inverted>counter</Button>
    </Link>
  </div>
)

export default Footer
