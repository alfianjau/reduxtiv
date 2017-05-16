import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import Mapper from '../../components/sub/Atom/Map'
import FormSection from '../../components/sub/Organism/FormSection'

import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container-fluid text-center'>
    <Header />
    <Content />
    <div className='core-layout__viewport'>
      { children }
    </div>
    <FormSection />
    <Mapper />
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
