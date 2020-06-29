import React from 'react';
import useTags from '../useTags';
import {useParams} from 'react-router-dom'
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Button from '../components/Button';
import styled from 'styled-components';
import Input from '../components/Input';
import Center from '../components/Center';
import Space from '../components/Space';

type Params = {
  id : string
}

const InputWrapper = styled.div`
background: white;
padding: 14px 16px;
margin-top:16px ;
`

const Topbar = styled.header`
display: flex;
justify-content: space-between;
line-height: 20px;
padding: 14px;
background: white;
align-items: center;
`

const TagEdit:React.FunctionComponent = () =>{
  const {findTag,deleteTag} = useTags()
  let {id:idString} = useParams<Params>()

  const tag = findTag(parseInt(idString))
  return(
    <Layout>
      <Topbar>
        <Icon name='left'/>
          <span>
        编辑标签
      </span>
        <Icon />
      </Topbar>

      {tag?<div>
        <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名"/>
        </InputWrapper>
        <div>
          <Center>
            <Space/>
          <Button onClick={()=>deleteTag(tag.id)}>删除标签</Button>
          </Center>
        </div>
      </div>:<div>tag不存在</div>}

    </Layout>

)
}

export default TagEdit