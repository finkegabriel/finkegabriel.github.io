import React from 'react';
import USDA from '../pages/blog/USDA';
import Posts from './index.js';
import CIRCUIT_PINE from '../pages/blog/CIRCUIT_PINE';
import Cyberdeck from '../pages/blog/Cyberdeck.js';
import Yaris from '../pages/blog/Yaris';

const posts = {
    post: [
        { uuid: "/bat/circuitpine", component: <CIRCUIT_PINE />, post: Posts.CIRCUIT_PINE, isDisabled: true,status:"Halt" },
        { uuid: "/bat/USDA", component: <USDA />, post: Posts.USDA, isDisabled: false, status: "Done" },
        {uuid:"/bat/cyberdeckv1",component:<Cyberdeck/>,post:Posts.Cyberdeck,isDisabled:false,status:"WIP"},
        {uuid:"/bat/yaris",component:<Yaris/>,post:Posts.Yaris,isDisabled:false,status:"Halt"}
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
