import {useEffect, useRef, useState} from 'react';
import creatId from '../lib/creatId';
import useUpdete from './useUpdete';

const useTags = () =>{
  const [tags,setTags] = useState<{id:number;name:string}[]>([]);
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags') ||"[]")
    if(localTags.length===0){
      localTags= [
        {id:creatId(),name:'衣'},
        {id:creatId(),name:'食'},
        {id:creatId(),name:'住'},
        {id:creatId(),name:'行'}
      ]
    }
    setTags(localTags)
  },[])
  useUpdete(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])
  const findTag = (id:number) => tags.filter(tag=>tag.id ===id)[0]
  const findTagIndex = (id:number) =>{
    let result = -1
    for (let i=0;i<tags.length;i++){
      if(tags[i].id===id){
        result = i
        break
      }
    }
    return result;
  }
  const updateTag = (id:number,obj: {name:string}) =>{
    const index = findTagIndex(id)
    const tagsClone =JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index,1,{id:id,name:obj.name})
    setTags(tagsClone)
  }
  const deleteTag=(id:number)=>{
    const index = findTagIndex(id)
    const tagsClone =JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index,1)
    setTags(tagsClone)
  }
  const addTag =()=>{
    const tagName=window.prompt('标签名称为')
    if (tagName!==null && tagName!==''){
      setTags([...tags,{id:creatId(),name:tagName}])
    }
  }

  const getName =(id:number)=>{
     const tag = tags.filter(t=>t.id===id)[0]
    return tag ? tag.name :''
  }

  return {getName,useRef,tags,addTag,setTags,findTag,updateTag,findTagIndex,deleteTag};
}

export default useTags