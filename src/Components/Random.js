import React from 'react'
import styled from 'styled-components'
import { useGlobal } from '../context/global';
import { useTheme } from '../context/themeContext';
import GiffItem from './GiffItem';
import Loader from './Loader';

function Random() {
    const {random, loading} = useGlobal()
    const theme = useTheme()
    return (
        <RandomStyled theme={theme}>
            {loading ? <Loader /> : <GiffItem {...random} />}
        </RandomStyled>
    )
}
// background-color: ${(props) => props.theme.colorBg2};
const RandomStyled = styled.article`
    padding: 2rem;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,105,1) 35%, rgba(0,212,255,1) 100%);
    
    border-radius: 1rem;
    width: 50%;
    margin: 0 auto;
`;
export default Random