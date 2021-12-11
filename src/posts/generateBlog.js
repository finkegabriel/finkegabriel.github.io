import React from 'react';
import USDA from '../pages/blog/USDA';
import BAG from '../pages/blog/BAG';
import Posts from './index.js';

const posts = {
    post: [{ uuid: "/bat/0e3e8a27-6e7d-4c6e-bd32-4a1141645f05", component: <USDA />, post: Posts.USDA },
    { uuid: "/bat/0e3e8a27-6e7d-4c6e-bd32-4a1141645f06", component: <BAG />, post: Posts.BAG }],
}

function gen(props) {
    let id = props.location.pathname.split('/')[2];
    return posts.post.map((post, index) => {
            if (post.uuid.split('/')[2] === id) {
                return (
                    <div key={index}>
                        {post.component}
                    </div>
                )
            }
            // return null;
        })
}

class GenerateBlog extends React.Component {
    render() {
        return (
            <div>
                {gen(this.props)}
            </div>
        );
    }
}

export default {
    GenerateBlog,
    posts
}
