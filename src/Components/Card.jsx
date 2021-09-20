import React from 'react';
import { Card, Col } from 'antd';

const ShowCard = (props) => {
    var data = props.data
    if(data.image){
      return  (
          <Col className="gutter-row" span={[24, { xs: 12, sm: 8, md: 6, lg: 4 }]}>
            <div style={{minWidth: 150}}>
              <Card hoverable style={{ width: 240, backgroundColor: 'black' }}cover={<img alt="example" src={data.image} />}>
                <div className="" style={{ color: "white"}}>            
                    Name: {data.name}
                </div> 
              </Card>
            </div>
          </Col>
        )     
    }else {
      return  (
      <Col className="gutter-row" span={[24, { xs: 12, sm: 8, md: 6, lg: 4 }]}>
        <div style={{minWidth: 150}}>
          <Card hoverable style={{ width: 240, backgroundColor: 'black' }}>
            <div className="" style={{ color: "white"}}> 
                Name: {data.name}
            </div> 
          </Card>
        </div>
        </Col>
      )
    }

  
}

export default ShowCard;