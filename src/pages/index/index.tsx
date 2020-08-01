import React, { FC, useState } from 'react'
import { View, Button } from '@tarojs/components'
import './index.scss'

const Index: FC = () => {
  const [list, setList] = useState(['张三', '李四', '王二', '赵五', '王六']);
  const changeList = () => {
    setList(['王六', '王二', '赵五'])
  }
  return (
    <View>
      <Button onClick={changeList}>改变数据</Button>
      <View className='list'>
        {list.map(i => (
          <View
            className='list-item'
            key={i}
            onClick={() => {
              console.log('item click', i)
            }}
          >
            {i}
          </View>
        ))}
      </View>
    </View>
  )
}

export default Index;
