import React, {useState} from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generteOutput from './NumberPadSection/generateOutput';

type Props = {
  value: number
  onChange: (value: number) => void
  onok?: () => void
}

const NumberPadSection:React.FunctionComponent<Props> = (props)=>{
  const output = props.value.toString()
  const setOutput=(output:string)=>{
    let value
    if(output.length>=16){
      value=parseFloat(output.slice(0,16))
    }else if(output.length===0){
      value= 0
    }else {
      value = parseFloat(output)
    }
    props.onChange(value)
  }
  const onClickButtonWrapper = (e:React.MouseEvent)=>{
  const text = (e.target as HTMLButtonElement).textContent;
  if(text===null){return}
  if(text==='确定'){
   if(props.onok){props.onok()}
    return;}
  if('0123456789.'.split('').concat(['删除']).indexOf(text)>=0){
   setOutput(generteOutput(text,output))
  }

  }
  return(
    <Wrapper>
      <div className="output">￥{output}</div>

      <div className="pad clearfix"  onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="ok">确定</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}


export default NumberPadSection