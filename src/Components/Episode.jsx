import React from 'react';
import { Card, Col, Row } from 'antd';
import {ExchangeQueryLocationsIDS, ExchangeQueryCharactersIDS } from '../api/ApiRequests'

const Episode = ({episode}) => {
    
    function title(name){

        return "Name: "+ name 
    }
    
  return  (
        <Col className="gutter-row" span={[8]}>
            <Card title={title(episode.name)} bordered={false}>
                <Row span={[24]}>
                        <Col span={12}>
                            <p>Characters:</p>
                            <ExchangeQueryCharactersIDS ids={episode.idsCharacters}/>                            
                        </Col>
                        <Col span={12}>
                            <p>Locations:</p> 
                            <ExchangeQueryLocationsIDS ids={episode.idsLocations}/>                            
                        </Col>
                </Row>
            </Card>
            
        </Col>
    )
}

export default Episode;