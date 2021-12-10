import Posts from './posts';

function generateBlog(routerProps) {
    let id = routerProps.location.pathname.split('/')[1];
    let p = [...Posts.post];
    for (let i = 0; i < p.length; i++) {
        if (id === Posts.post[i].uuid) {
            return Posts.post[i].component;
        }
    }
}

export default generateBlog;
