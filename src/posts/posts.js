import React from 'react';
import USDA from '../pages/blog/USDA';
import BAG from '../pages/blog/BAG';
import Posts from '../posts/index';

export default {
    post: [{ uuid: "0e3e8a27-6e7d-4c6e-bd32-4a1141645f05", component: <USDA />, post: Posts.USDA },
           { uuid: "0e3e8a27-6e7d-4c6e-bd32-4a1141645f06", component: <BAG />, post: Posts.BAG }],
}