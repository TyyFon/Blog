import PostAdd from '../../vievs/PostAdd/PostAdd.js';
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
    < PostAdd action={handleSubmit} />
  )
}

export default AddPostForm;