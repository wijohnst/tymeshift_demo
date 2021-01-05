import React, { ReactElement } from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
    background-color: rgba(0,0,0,25%);
    border-radius: 5px;
    padding: 2rem;
    margin-left: 2rem;
    margin-top: 1rem;
    width: fit-content;
    max-width: 75%;
    box-shadow: 2px 2px 12px rgba(0,0,0,.25);
`

export default function HighlightBox(props: { children: React.ReactNode }): ReactElement {
    return (
        <ComponentWrapper>
            {props.children}
        </ComponentWrapper>
    )
}
