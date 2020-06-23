import {useState} from 'react';
import creatId from './lib/creatId';

const useTags = () =>{
  const [tags,setTags] = useState<{id:number;name:string}[]>
  ([{id:creatId(),name:'衣'},
              {id:creatId(),name:'食'},
              {id:creatId(),name:'住'},
              {id:creatId(),name:'行'}
  ])
  return {tags,setTags}
}

export default useTags