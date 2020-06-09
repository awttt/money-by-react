import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('../icons/money.svg')
require('../icons/icon_label.svg')
require('../icons/chart.svg')


const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
display: flex;
>li{
width: 33.33333%;
text-align: center;
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
}
}
`

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className='icon'>
            <use xlinkHref="#icon_label"/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref="#chart"/>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;