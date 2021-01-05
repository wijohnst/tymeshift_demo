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

export default function ChatsExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Chat</b> </p>
                <p><HoursScheduled /></p>
                <p><OOADH totalHours={.5} /></p>
                <p>Formula : <b>3.5 - 0.5 / 3.5</b></p>
            </Info>
            <Adh>
                <h2>Adherence Rate</h2>
                <AdherenceCircle value={'85%'} />
            </Adh>
            <p>
                <i>Selecting chat lowered Nate's adherence rate, simply because this wasn't the skill he was assigned. 
                But remember, because chat is still considered productive time, this half hour will still count towards 
                his Occupancy Rate. Learn more about Occupancy below or click 'Reset' above to keep experimenting.</i>
            </p>
        </ComponentWrapper>
    )
}
