import {useEffect, useRef} from 'react';

const useUpdete=(fn:()=>void,deps:any[])=>{
  const count = useRef(0)
  useEffect(()=>{
    count.current+=1;
  })
  useEffect(()=>{
    if (count.current>1){
      fn()
    }
// eslint-disable-next-line
  },[deps])
}

export default useUpdete