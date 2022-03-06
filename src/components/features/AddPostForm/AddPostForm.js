//import PostAdd from '../../vievs/PostAdd/PostAdd.js';\
import PostForm from '../PostForm/PostForm.js'
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux.js';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate("/");
  }

  return (
    <PostForm
      action={handleSubmit}
      actionText={'Add post'}
    />
  )
}

export default AddPostForm;