import React from 'react';
import Episode from './Episode'
import { Row } from 'antd';
import { connect } from 'react-redux';

const Episodes = ({episodes}) => {
  return (
    <div className="site-card-wrapper">
        <Row className="flex" gutter={24}>
            {episodes.map((episode) => (
                <Episode episode={episode} key={episode.id}/>
            ))}
        </Row>        
    </div>
  )
}

const mapStateToProps = state => {

    return { episodes: state.episodes }
}

export default connect(mapStateToProps)(Episodes)