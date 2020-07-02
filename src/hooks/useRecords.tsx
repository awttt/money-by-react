import {useEffect, useState} from 'react';
import useUpdete from './useUpdete';

type newRecordItem = {
  tagIds:number[]
  note:string
  category:'+' |'-'
  amount:number
}
type RecordItem=newRecordItem &{
  createdAt:string
}



const useRecords=()=>{
  const [records,setRecords] =useState<RecordItem[]>([])

  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
  },[])

  const addRecords=(newrecord:newRecordItem)=>{
    const record={...newrecord,createdAt:(new Date()).toISOString()}
      setRecords([...records,record])
  }

  useUpdete(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])

  return{records,addRecords}
}

export default useRecords