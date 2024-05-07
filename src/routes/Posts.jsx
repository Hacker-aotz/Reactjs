import PostList from '../components/PostList';
import { Outlet } from 'react-router-dom';

function Posts() {
  return <>
    <Outlet />
    <main>
      <PostList />
    </main>
  </>
}

export default Posts;
