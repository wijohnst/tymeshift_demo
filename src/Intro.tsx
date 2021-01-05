import React, { ReactElement } from 'react'
import styled from 'styled-components'

import FocusText from './FocusText'

const ComponentWrapper = styled.div`
    /* border: solid thin black; */
    padding: 1.5rem;
    margin-top: 1rem;
`

export default function Intro(): ReactElement {
    return (
        <ComponentWrapper>
            <p>This demo is designed to give you a sense of how Tymeshift works behind the scenes.</p>
            <p> 
                Specifically we are going to learn about Adherence and Occupancy, two of the main 
                pieces of data that Tymeshift provides.
            </p>
            <FocusText>
                Let's start with Adherence...
            </FocusText>
        </ComponentWrapper>
    )
}
