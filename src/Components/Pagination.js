import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as theme from '../Config/style';

const Containter = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const PaginationUl = styled.ul`
    display:flex;
    flex-wrap: wrap
`;

const PaginationList = styled.li`
    list-style: none;
    margin: 2px;
`;

const PaginationButton = styled.button`
    font-weight: ${props => props.theme.bold}
`;

const Pagination = (props) => {

    const pageNumbers = [];

    // Loop pour savoir le nombre de pages nécessaires :
    for (let i = 1; i <= Math.ceil(props.totalCities / props.citiesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ThemeProvider theme={theme}>
            <Containter>
                <PaginationUl>
                    {pageNumbers.map(value => (
                        <PaginationList key={value}>
                            <PaginationButton onClick={() => props.paginate(value)}>
                                {value}
                            </PaginationButton>
                        </PaginationList>
                    ))}
                </PaginationUl>
            </Containter>
        </ThemeProvider>
    )
}

export default Pagination;