import React from 'react'
import { ImageBlock } from './image-block'

describe('<ImageBlock />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageBlock />)
  })
})