import React, { ReactElement } from 'react'
import styled from 'styled-components'

import HighlightBox from './HighlightBox'
import FT from './FT'
import OccDemo from './OccDemo'

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
const SmolLi = styled.li`
    font-size: .9rem;
    margin: 5pt;
`

export default function Occupancy(): ReactElement {
    return (
        <ComponentWrapper>
            <HighlightText>Occupancy Rate</HighlightText>
            <p>
                Now that we've looked at Adherence, let's do a deeper dive on Occupancy. Like before, let's look at how your Occupancy rate
                is calculated in Tymeshift.
            </p>
            <HighlightBox>
                <Formula>
                    <span>{'('}</span>
                    <span>{'['}</span>
                    <FT color={'green'} text ={"Ticket, Chat, & Voice Time"} />
                    <span>{`+`}</span>
                    <FT color={'orange'} text={"Productive General Tasks"} />
                    <span>{']'}</span>
                    <span>{')'}</span>
                    <span>{` / `}</span>
                    <FT color={'blue'} text={"Working Time"} />
                    <span>{` = `}</span>
                    <FT color={'red'} text={'Occupancy Rate'} />
                </Formula>
            </HighlightBox>
            <Terms>
                <b>Again, let's break down each of those terms:</b>
                <ul>
                    <li><b>Ticket, Chat, and Voice Time</b></li>
                    <ul>
                        <li> These are the default "productive tasks". </li>
                        <li> Working on these at any time will increase your occupancy rate. </li>
                    </ul>
                    <li><b>Productive General Tasks</b></li>
                    <ul>
                        <li>These are tasks that we at Candid have deemed "productive"</li>
                        <li>These tasks include: </li>
                            <ul>
                                <SmolLi>Follow-up Time</SmolLi>
                                <SmolLi>PCS Work</SmolLi>
                                <SmolLi>Social Time</SmolLi>
                                <SmolLi>Lead Work</SmolLi>
                                <SmolLi>Video Calls</SmolLi>
                                <SmolLi>QA Tasks</SmolLi>
                            </ul> 
                    </ul>
                </ul>
            <b>Use the demo below to explore how changes to your schedule effects Nate's Occupancy rate.</b>
            <HighlightBox>
                <OccDemo />
            </HighlightBox>
            </Terms>
        </ComponentWrapper>
    )
}
