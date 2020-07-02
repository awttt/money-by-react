import React from 'react';
import classnames from 'classnames'
require('../icons/money.svg')
require('../icons/icon_label.svg')
require('../icons/chart.svg')
require(`../icons/left.svg`)
require(`../icons/right.svg`)

type Props={
  name?:string
}& React.SVGAttributes<SVGElement>

const Icon =(props:Props)=>{
  const {name,children,className,...rest} = props
 return(
   <svg className={classnames('icon',className)} {...rest}>
     {props.name && <use xlinkHref={'#'+props.name}/>}
   </svg>
 )
}

export default Icon