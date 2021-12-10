import React from 'react';
import ReactMarkdown from 'react-markdown';

const options = {
};

export default function Markdown(props) {
    return <ReactMarkdown options={options} {...props} />;
}