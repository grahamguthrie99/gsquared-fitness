import React from 'react';
import styled from 'styled-components';
import { headingFont, typeScale, primaryTheme } from '../utils';

export const TableTitle = styled.h5`
    font-family: ${headingFont};
    font-size: ${typeScale.header5};
    font-weight: 100;
    color: ${primaryTheme.primaryColor};
    margin: 2px;
`

const Table = styled.table`
    width: 100%;
    border: 1px solid #fff;
    margin-bottom: 15px; 
   
`
const TableBody = styled.tbody`
    width: 100%;
    border: 1px solid #fff;  
`

const TableRow = styled.tr`
    text-align: center;
    border: 1px solid #fff;
 
   
`
const TableHeader = styled.th`
    ext-align: center; 
    border: 1px solid #fff;
   
`
const TableData = styled.td`
    text-align: center;
    border: 1px solid #fff;
   
`


export const WorkoutTable = ({ tableContent }) => {
    const tableHeaders = ['Exercise', 'Sets', 'Reps', 'Weight']
    return (
        <Table>
            <TableBody>
                <TableRow>
                    {
                        tableHeaders.map((input, index) => { return <TableHeader key={index}>{input}</TableHeader> }
                        )
                    }
                </TableRow>
                {
                    tableContent.map((input, index) =>

                        <TableRow key={index}>
                            <TableData>{input.exercise}</TableData>
                            <TableData>{input.sets}</TableData>
                            <TableData>{input.reps}</TableData>
                            <TableData>{input.weight}</TableData>
                        </TableRow>
                    )
                }

            </TableBody>
        </Table>
    )
}
