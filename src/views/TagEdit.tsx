import React from 'react';
import useTags from '../useTags';
import {useParams} from 'react-router-dom'
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Button from '../components/Button';

type Params = {
  id : string
}

const TagEdit:React.FunctionComponent = () =>{
  const {findTag,updateTag} = useTags()
  let {id:idString} = useParams<Params>()

  const tag = findTag(parseInt(idString))
  return(
    <Layout>
      <header>
        <Icon name='left'/>
          <span>
        编辑标签
      </span>
      </header>
      <span>标签名</span>
      <input type="text" placeholder='标签名'
      value={tag.name}
             onChange={(e)=>{
              updateTag(tag.id,{name:e.target.value})
             }}
      />
  <div>
    <Button>删除标签</Button>
  </div>
    </Layout>

)
}

export default TagEdit