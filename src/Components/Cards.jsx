import React from 'react';
import ShowCard from './Card.jsx'
import { Row } from 'antd';

const Characters = (props) => {
    let bigData = props.bigData
  return (
    <div className="site-card-wrapper">
        <Row className="flex" gutter={24}>
            {bigData.map((data) => (
                <ShowCard data={data} key={data.id}/>
            ))}
        </Row>        
    </div>
  )
}

export default Characters;