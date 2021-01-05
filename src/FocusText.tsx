import React, { Children, Component, ReactElement } from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 1rem;
    border-left: solid thick black;
    background: linear-gradient(90deg, lightblue 0%, rgba(35, 255, 242, 0) 69.63%);
`

export default function FocusText(props: { children: React.ReactNode }): ReactElement {
    return (
        <ComponentWrapper>
            {props.children}
        </ComponentWrapper>
    )
}
