import React, { ReactElement } from 'react'
import styled from 'styled-components'

import ProductiveTime from './ProductiveTime'
import HoursScheduled from './HoursScheduled'
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

export default function VoiceOccExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Chat</b> </p>
                <p><ProductiveTime value={3} /></p>
                <p><HoursScheduled /></p>
                <p>Formula : <b>3 / 3.5</b></p>
            </Info>
            <Adh>
                <h2>Occupancy Rate</h2>
                <AdherenceCircle value={'86%'} />
            </Adh>
            <p>
                <i>
                    Selecting Voice contributed positivity to Nate's Occupancy Rate. And because he was also scheduled for
                    voice at this time, this will also increase his Adherence Rate. Staying busy with the task or skill you 
                    are scheduled for is the best way to maximize your performance metrics.
                </i>
            </p>
        </ComponentWrapper>
    )
}
