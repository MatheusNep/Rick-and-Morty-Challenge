import React from 'react';
import {  List, Avatar } from 'antd';

const ShowList = ({data}) => {

    var result = []
    data.map((character) => (
        result.push(character)
    ))

    if(result[0].image){
        return (
            <List
            itemLayout="horizontal"
            dataSource={result}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image}/>}
                  title={item.name}
                  description=""
                />
              </List.Item>
            )}
          />
        )
    }else {
        return (
            <List
            itemLayout="horizontal"
            dataSource={result}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.name}
                  description=""
                />
              </List.Item>
            )}
          />
        )
    }
    
}

export default ShowList;