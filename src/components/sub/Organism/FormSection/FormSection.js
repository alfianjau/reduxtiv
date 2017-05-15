import React from 'react'
import Forms from '../../Molecule/Forms'
import FormTexts from '../../Molecule/FormTexts'
import { Grid } from 'semantic-ui-react'
import './form-section.scss'

const FormSection = () => (
  <div className='FormSection container'>
  	<h3>Form Group</h3>
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column>
          <FormTexts />
        </Grid.Column>
        <Grid.Column>
          <Forms />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default FormSection

