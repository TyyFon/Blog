import PostForm from '../PostForm/PostForm.js'
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from '../../../redux/postsRedux.js';
import { useNavigate, Navigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostId } from '../../../redux/postsRedux.js';

const EditPostForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector(state => getPostId(state, id))
  
  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate("/");
  }

  if (!postData) 
    return <Navigate to ='/' />
  
  return (
    <PostForm 
        action={handleSubmit} 
        actionText= {'Edit post'} 
        title={postData.title} 
        author={postData.author} 
        publishedDate={postData.publishedDate}
        shortDescription={postData.shortDescription} 
        content={postData.content}
    />
  )
}

export default EditPostForm;