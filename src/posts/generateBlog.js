import React from 'react';
import USDA from '../pages/blog/USDA';
import Posts from './index.js';
import CIRCUIT_PINE from '../pages/blog/CIRCUIT_PINE';
import CHRISTMAS2024 from '../pages/blog/CHRISTMAS2024';
import Privacy from '../pages/blog/privacy_policy.js';

const posts = {
    post: [
        { uuid: "/blog/circuitpine", component: <CIRCUIT_PINE />, post: Posts.CIRCUIT_PINE, isDisabled: true },
        { uuid: "/post/USDA", component: <USDA />, post: Posts.USDA, isDisabled: false },
          { uuid: "/post/2024", component:<CHRISTMAS2024 />, post: Posts.Christmas2024, isDisabled: false},
          {uuid:"/post/privacypolicy",component:<Privacy/>}
],
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
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "//acscdn.com/script/atg.js";
        script.async = true;
        script.setAttribute('czid', 'tj090ao3sj');
        script.setAttribute('data-adel', 'atag');

        document.body.appendChild(script);
    }
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
