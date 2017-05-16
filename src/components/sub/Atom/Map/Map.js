// import _ from 'lodash'
import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import './map.scss'

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: -7.7953314, lng: 110.3716048 }}
    scrollwheel={false}
  />
))

const GoogleMapper = () => {
  return (
    <div className='google-map'>
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `400px` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
  />
    </div>
  )
}

export default GoogleMapper

