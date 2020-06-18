import React from 'react';
import styled from 'styled-components'


const List = styled.li`
    list-style: none;
    margin-top: 10px;
`

const ButtonCities = styled.button`
    height: 60px;
    width: 200px;
`

const Cities = (props) => {
    return (
        <List>
            <ButtonCities>
                <span>{props.city}</span><br />
                <span>{props.state}</span>
            </ButtonCities>
        </List>

    )
}

export default Cities;