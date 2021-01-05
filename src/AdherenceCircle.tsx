import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
    value: string
}

const ComponentWrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    clip-path: circle(50% at 50% 50%);
`
const Text = styled.span`
    font-size: 3.5rem;
    font-weight: 900;
`

export default function AdherenceCircle({value}: Props): ReactElement {
    return (
        <ComponentWrapper>
            <Text>{value}</Text>
        </ComponentWrapper>
    )
}
