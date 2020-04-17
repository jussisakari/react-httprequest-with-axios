import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.id && prevProps.id !== this.props.id) {
    //         const url = '/posts/' + this.props.id;
    //         axios.get(url)
    //             .then(response => {
    //                 this.setState({post: response.data});
    //             });
    //     }
    // }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        console.log('ok');
        console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.state.post || (this.state.post && this.state.post.id != this.props.match.params.id)) {
                const url = '/posts/' + this.props.match.params.id;
                axios.get(url)
                    .then(response => {
                        this.setState({post: response.data});
                    });
            }
        }
    }

    deletePostHandler = () => {
        alert("About to delete post " + this.props.match.params.id);
        if (this.props.match.params.id) {
            const url = '/posts/' + this.props.match.params.id;
            axios.delete(url)
                .then(response => {
                    console.log(response);
                });
        }
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            <p style={{textAlign: "center"}}>Loading...</p>;
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;