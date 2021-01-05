import React, { ReactElement } from 'react'
import styled from 'styled-components'

import HighlightBox from './HighlightBox'
import FT from './FT'
import AdhDemo from './AdhDemo'

const ComponentWrapper = styled.div`
    /* border: solid thin black; */
    margin: 1.5rem;
    padding: 1rem;
    background-color: lightblue;
`
const HighlightText = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
`
const Formula = styled.span`
    font-weight: 700;
`
const Terms = styled.section`
   padding-left: 2rem;
   margin-top: 1rem;
`

export default function Adherence(): ReactElement {
    return (
        <ComponentWrapper>
            <HighlightText>Adherence Rate</HighlightText>
            <p>Let's break down exactly how your Adherence Rate is calculated.</p>
            <HighlightBox>
                <Formula>
                    <span>{'('}</span>
                    <FT color={'green'} text ={"Scheduled Time"} />
                    <span>{`-`}</span>
                    <FT color={'orange'} text={"Time Out of Adherence"} />
                    <span>{')'}</span>
                    <span>{` / `}</span>
                    <FT color={'green'} text={"Scheduled Time"} />
                    <span>{` = `}</span>
                    <FT color={'red'} text={'Adherence Rate'} />
                </Formula>
            </HighlightBox>
            <Terms>
                <b>Let's look at each of those terms:</b>
                <ul>
                    <li><b>Scheduled Time</b></li>
                    <ul>
                        <li>
                            Number of hours that an agent is scheduled for a given period of time
                        </li>
                        <li><i>"Will is scheduled a full week, so his scheduled time is 40 hours."</i></li>
                    </ul>
                    <li><b>Time Out of Adherence</b></li>
                    <ul>
                        <li>
                            Amount of Time not spent on an assigned skill or task
                        </li>
                        <li><i>"Jon had 15 minutes added to x his Time Out of Adherence after he was late returning from lunch."</i></li>
                    </ul>
                </ul>
            <b>Now see what happens to Adherence Rate when you change the current task below.</b>
            <HighlightBox>
                <AdhDemo />
            </HighlightBox>
            </Terms>
        </ComponentWrapper>
    )
}
