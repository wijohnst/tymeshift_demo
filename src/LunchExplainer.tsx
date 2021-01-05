import React, { ReactElement } from 'react'
import styled from 'styled-components'

import HoursScheduled from './HoursScheduled'
import OOADH from './OOADH'
import AdherenceCircle from './AdherenceCircle'

const ComponentWrapper = styled.div``

const Info = styled.div`
    display: flex;
    justify-content: space-between;
`
const Adh = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function LunchExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Lunch</b> </p>
                <p><HoursScheduled /></p>
                <p><OOADH totalHours={0.5} /></p>
                <p>Formula : <b>3.5 - 0.5 / 3.5</b></p>
            </Info>
            <Adh>
                <h2>Adherence Rate</h2>
                <AdherenceCircle value={'85%'} />
            </Adh>
            <p>
                <i>
                    Selecting Lunch lowered Nate's adherence rate, simply because this wasn't the skill he was assigned. 
                    This also won't count towards his Occupancy Rate because general tasks like lunch aren't considered 
                    productive time. Learn more about Occupancy Rate below or hit 'Reset' above and keep exploring.
                </i>
            </p>
        </ComponentWrapper>
    )
}
