import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class LikeButton extends React.Component {
    render() {
        return React.createElement('button', {class: 'btn btn-primary'}, 'Reply');
    }
}