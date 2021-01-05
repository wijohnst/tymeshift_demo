import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { SelectionObj } from './JobSelect'
import JobSelect from './JobSelect'
import AdhExplainer from './AdhExplainer'

interface StyleProps {
    visibility: string;
}
const ComponentWrapper = styled.div``

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
`
const Cell = styled.div`
    border: solid thin black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5pt;
    background-color: ${(props) => props.color || 'white'};
`
const Reset = styled.div<StyleProps>`
    visibility: ${p => p.visibility};
    display: flex;
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        color: white;
    }
`

export default function AdhDemo(): ReactElement {

    const [ selection, setSelection ] = useState<SelectionObj | undefined>(undefined);
    const [ hasSelection, setHasSelection ] = useState(false);

    function handleSelection(selection : SelectionObj){
        console.log(selection)
        setSelection(selection)
        setHasSelection(true);
    }

    return (
        <ComponentWrapper>
            <Grid>
                <Cell>AGENT</Cell>
                <Cell>9:00 am</Cell>
                <Cell>9:30 am</Cell>
                <Cell>10:00 am</Cell>
                <Cell>10:30 am</Cell>
                <Cell>11:00 am</Cell> 
                <Cell>11:30 am</Cell>
                <Cell>12:00 pm</Cell> 
                <Cell>---</Cell>
                <Cell color={'#2C93BF'}>Chat</Cell>
                <Cell color={'#2C93BF'}>Chat</Cell>
                <Cell color={'#FF00EB'}>Break / Huddle</Cell>
                <Cell color={'#60D302'}>Voice</Cell>
                <Cell color={'#60D302'}>Voice</Cell> 
                <Cell color={'#60D302'}>Voice</Cell>
                <Cell color={'#60D302'}>Voice</Cell> 
                <Cell>N. Fritz</Cell>
                <Cell color={'#2C93BF'}>Chat #1</Cell>
                <Cell color={'#2C93BF'}>Chat #3</Cell>
                <Cell color={'#FF00EB'}>Break / Huddle</Cell>
                <Cell color={'#60D302'}>Call #1</Cell>
                <Cell color={'#60D302'}>Call #2</Cell> 
                <Cell color={'#60D302'}>Call #3</Cell>
                {(hasSelection && selection !== undefined ? <Cell color={selection.color}>{selection.text}</Cell> : <Cell><JobSelect handleSelection={handleSelection}/></Cell>)}
            </Grid>
            <Reset visibility={(hasSelection ? "visible" : "hidden")} onClick={() => [setSelection(undefined), setHasSelection(false)]}>Reset</Reset>
            <AdhExplainer selection={selection} isVisible={hasSelection} />
        </ComponentWrapper>
    )
}
