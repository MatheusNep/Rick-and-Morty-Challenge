import React, { useState } from 'react';
import {
    Form, Button, Input
} from 'antd';
import { SelectCharacters, SelectLocations } from '../api/ApiRequests'
import { connect } from 'react-redux';
import { createEpisode } from './CreateEpisodeReducer';

function nextTodoId(episode) {
    const maxId = episode.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}


function CreateEpisode(props) {
    var [character, setCharacter] = useState([])

    const characterAddition = (x) => {
        setCharacter(x);
    }

    var [location, setLocation] = useState([])

    const locationAddition = (x) => {
        setLocation(x);
    }

    var [episodeList, setEpisode] = useState([])

    const onFinish = (values) => {
        console.log('Success:', values);
        const newEpisode = {
            id: nextTodoId(props.episodes),
            name: values.name,
            idsCharacters: values.character,
            idsLocations: values.location
        }
        episodeList.push(newEpisode)
        setEpisode(episodeList);
        props.createEpisode(newEpisode)
    };
    

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Episode Name"
                name="name"
                rules={[{ required: true, type: 'string' }]}
            >
                <Input placeholder="Input a Name" />
            </Form.Item>
            <Form.Item
                name="character"
                label="Characters"
                rules={[{ required: true, message: 'Please select a Character!', type: 'array' }]}
            >
                <SelectCharacters onChange={characterAddition} />
            </Form.Item>
            <Form.Item
                name="location"
                label="Locations"
                rules={[{ required: true, message: 'Please select a Location!', type: 'array' }]}
            >
                <SelectLocations onChange={locationAddition} />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 17 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}


const mapStateToProps = state => {

    return { episodes: state.episodes }
}
const mapDispatchToProps = dispatch => ({
    createEpisode: (episode) => dispatch(createEpisode(episode))
});

export default connect(mapStateToProps,mapDispatchToProps)(CreateEpisode)