import React from 'react';
import styled from 'styled-components';

const Pagination = (props) => {

    const pageNumbers = [];

    // Loop pour savoir le nombre de pages nécessaires :
   for(let i = 1; i <= Math.ceil(props.totalCities / props.citiesPerPage); i++) {
        pageNumbers.push(i);
    }

    const Containter = styled.div`
        width: 90%;
        margin: 0 auto;
    `;

    const Nav = styled.nav``;

    const PaginationUl = styled.ul`
        display:flex;
        flex-wrap: wrap
    `;

    const PaginationList = styled.li`
        list-style: none;
        margin: 2px;
    `;

    const PaginationButton = styled.button``;


    return(
        <div>
            <nav>
                <ul id="listPagination">
                {pageNumbers.map(value =>(
                        <li key={value}>
                            <button 
                                onClick={() => props.paginate(value)} href="#"
                            >
                                {value}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;