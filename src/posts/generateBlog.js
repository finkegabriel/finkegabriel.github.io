import React from 'react';
import USDA from '../pages/blog/USDA';
// import BAG from '../pages/blog/BAG';
import Posts from './index.js';
import CIRCUIT_PINE from '../pages/blog/CIRCUIT_PINE';

const posts = {
    post: [{ uuid: "/bat/USDA", component: <USDA />, post: Posts.USDA },
    { uuid: "/bat/circuitpine", component: <CIRCUIT_PINE />, post: Posts.CIRCUIT_PINE }
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
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "//acscdn.com/script/atg.js";
        script.async = true;
        script.setAttribute('czid','tj090ao3sj');
        script.setAttribute('data-adel','atag');
    
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
