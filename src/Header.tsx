import React, { ReactElement } from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
    /* border: solid thin black; */
`
const HeaderText = styled.span`
    font-size: 3rem;
    font-weight: 900;
`

export default function Header(): ReactElement {
    return (
        <ComponentWrapper>
            <HeaderText>Tymeshift Demo</HeaderText>
        </ComponentWrapper>
    )
}
