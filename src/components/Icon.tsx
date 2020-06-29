import React from 'react';
require('../icons/money.svg')
require('../icons/icon_label.svg')
require('../icons/chart.svg')

type Props={
  name?:string
}

const Icon =(props:Props)=>{
 return(
   <svg className='icon'>
     {props.name && <use xlinkHref={'#'+props.name}/>}
   </svg>
 )
}

export default Icon