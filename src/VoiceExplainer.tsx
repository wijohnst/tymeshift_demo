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

export default function VoiceExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Voice</b> </p>
                <p><HoursScheduled /></p>
                <p><OOADH totalHours={'None'} /></p>
                <p>Formula : <b>3.5 - 0.0 / 3.5</b></p>
            </Info>
            <Adh>
                <h2>Adherence Rate</h2>
                <AdherenceCircle value={'100%'} />
            </Adh>
            <p>
                <i>
                    Selecting voice matches with Nate's schedule, so this will add to his adherence rate. 
                    Keep reading to explore Occupancy Rate or hit 'Reset' above to keep exploring.
                </i>
            </p>
        </ComponentWrapper>
    )
}
