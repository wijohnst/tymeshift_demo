import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Intro from './Intro'
import Adherence from './Adherence'
import Occupancy from './Occupancy'

const ComponentWrapper = styled.div`
  margin: 5pt;
`

export default function App(): ReactElement {
  return (
    <ComponentWrapper>
      <Header />
      <Intro />
      <Adherence />
      <Occupancy />
    </ComponentWrapper>
  )
}
