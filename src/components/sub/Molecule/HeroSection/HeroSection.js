import React from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'
import './hero-section.scss'

const HeroSection = () => (
  <div className='hero-section container'>
    <Icon inverted size='large' name='instagram' />
    <Icon inverted size='large' name='dribble' />
    <Icon inverted size='large' name='twitter' />
    <Icon inverted size='large' name='vimeo square' />
    <Icon inverted size='large' name='camera retro' />

    <Header as='h1' inverted size='big'>we create simplicity & true beauty in design</Header>
    <Button basic inverted>View Projects</Button>
  </div>
)

export default HeroSection
