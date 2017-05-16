// import _ from 'lodash'
import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import './map.scss'

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  >
  </GoogleMap>
))

const GoogleMapper = () => {
  return (
    <div className='google-map'>
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `300px` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
  />
    </div>
  )
}

export default GoogleMapper

