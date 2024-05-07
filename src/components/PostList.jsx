import { useState, useEffect } from 'react';

import Post from './Post';
import classes from "./PostList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isfetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>

      {!isfetching && posts.length > 0 && <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
      </ul>}
      {!isfetching && posts.length === 0 &&
        <div style={{ textAlign: 'center', color: 'white' }} >
          <h2>There are no posts yet.
          </h2><p>Start Adding Some!</p></div>}
      {isfetching && <div style={{ textAlign: 'center', color: 'white' }} >
        <p>Loading post...</p></div>}
    </>
  );
}

export default PostsList;

/* 
  {modalIsVisible ? <Modal onclose={hideModalHandler}>
    <NewPost
    onBodyChange={bodyChangeHandler}
    onAuthorChange={authorChangeHandler} />
  </Modal> : null}
*/