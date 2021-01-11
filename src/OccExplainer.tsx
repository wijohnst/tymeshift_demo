import React, { ReactElement } from 'react'
import styled from 'styled-components'

import ChatsOccExplainer from './ChatsOccExplainer'
import VoiceOccExplainer from './VoiceOccExplainer'
import TicketOccExplainer from './TicketOccExplainer'
import UntrackedOccExplainer from './UntrackedOccExplainer'
import LunchOccExplainer from './LunchOccExplainer'
import SttOccExplainer from './SttOccExplainer'

import { SelectionObj } from './JobSelect'

interface Props {
    selection : SelectionObj | undefined,
    isVisible : boolean
}

interface StyleProps {
    visibility: string;
}

const ComponentWrapper = styled.div<StyleProps>`
    display: ${p => p.visibility}; 
`

export default function OccExplainer({selection, isVisible}: Props): ReactElement {
    
    const components : any = { 
        chat: <ChatsOccExplainer />,
        voice: <VoiceOccExplainer />,
        ticket: <TicketOccExplainer />,
        untracked: <UntrackedOccExplainer />,
        lunch: <LunchOccExplainer />,
        stt: <SttOccExplainer />
    }

    return (
        <ComponentWrapper visibility={(isVisible ? 'block' : 'none')}>
            {(selection?.text ? components[selection.choice] : <p>Loading...</p>)}
        </ComponentWrapper>
    )
}
