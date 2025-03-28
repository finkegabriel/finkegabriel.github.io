import React, { Component } from 'react';
import Card from '../components/card'
import posts from '../posts/generateBlog';

class Blog extends Component {
    render() {
        return (
            <div>
                {posts.posts.post.slice(0).reverse().map(p => (
                    <Card
                        props={this.props}
                        url={p.uuid}
                        isDisabled={p.isDisabled}
                        title={p.post.title}
                        style={{ marginTop: `${1}rem` }}
                        date={p.post.date}
                        imageStyle={{
                            borderRadius: '75px',
                            height:'44vh',
                        }}
                        cover_photo={p.post.cover_photo}
                        status={p.status}
                    ></Card>
                ))}
            </div>
        )
    }
}

export default Blog;