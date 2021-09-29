import React, { Component } from 'react';
import Card from '../components/card'
import Post from '../posts/posts';

class Blog extends Component {
    render() {
        return (
            <div>
                {Post.post.map(p => (
                    <Card
                        props={this.props}
                        url={p.uuid}
                        title={p.post.title}
                        style={{ marginTop: `${1}rem` }}
                        date={p.post.date}
                        imageStyle={{
                            borderRadius: '75px',
                        }}
                        cover_photo={p.post.cover_photo}
                    ></Card>
                ))}
            </div>
        )
    }
}

export default Blog;