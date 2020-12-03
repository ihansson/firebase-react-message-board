import React from 'react'
import Post from './Post';
import AddPost from './AddPost';
import {PostsContext} from "../providers/PostsProvider";

const Posts = () => {
    const { posts } = PostsContext.Consumer
    return (
        <section className="Posts">
            <AddPost />
            {posts.map(post => <Post {...post} key={post.id} />)}
        </section>
    )
}

export default Posts;
