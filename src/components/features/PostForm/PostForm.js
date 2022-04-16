import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import PostFormInput from '../../vievs/PostFormInputs/PostFormInput';
import PostContent from '../../vievs/PostFormInputs/PostContent';
import styles from './PostForm.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import dateToStr from '../Utils/dateToStr';
import { useForm } from "react-hook-form";
import { getAllCategories } from './../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';


const PostForm = ({
  action,
  actionText,
  ...props }) => {
console.log('props:' , props);
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date() || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  //const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const categories = useSelector(getAllCategories);
  const [category, setCategory] = useState(props.category || '');
  const [categoryError, setCategoryError] = useState(false);
  //const [startDate, setStartDate] = useState(new Date());
  //const [value, setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    setContentError(!content)
    setDateError(!publishedDate)
    setCategoryError(!category)
    if(!content || !publishedDate); 
    else action({ title, author, publishedDate, shortDescription, content, category });
    };
   
  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <PostFormInput
        controlId="formTitle"
        label="Title"
        placeholder="Enter title"
        value={title}
        action={setTitle}
        // {...register("title", { required: true, minLength: 3 })}
      />
      {/* {errors.title && <small 
      className="d-block form-text text-danger mt-2">
        Title is too short (min is 3)
      </small>} */}
      <PostFormInput
        controlId="formAuthor"
        label="Author"
        placeholder="Enter author"
        value={author}
        action={setAuthor}
        // {...register("author", { required: true, minLength: 3 })}
        // className={styles.smallInput}
      />
      {/* {errors.title && <small 
        className="d-block form-text text-danger mt-2">
        Author is too short (min is 3)
      </small>} */}
      <DatePicker 
        selected={publishedDate} 
        onChange={(date) => setPublishedDate(date)} 
      />
      {/* {dateError && <small 
        className="d-block form-text text-danger mt-2">
        Content can't be empty
      </small>} */}
      <Form.Group className="mb-3 col-md-4">
        <Form.Label>Category</Form.Label>
        <Form.Select 
          value={category} 
          onChange={e => setCategory(e.target.value)}>
          <option>
            Select category...
          </option>
          {categories.map(category => <option key={category.id} value={category.titleid}>{category.title}</option>)}
        </Form.Select>
        {/* {categoryError && <small className="d-block form-text text-danger mt-2">Select category!</small>} */}
      </Form.Group>
      <PostContent
        controlId="formDescription"
        label="Short description"
        placeholder="Enter description"
        value={shortDescription}
        action={setShortDescription}
        // {...register("shortDescription", { required: true, minLength: 20 })}
        // rows={3}
      />
       {/* {errors.title && <small 
        className="d-block form-text text-danger mt-2">
        Content is too short (min is 20)
      </small>} */}
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
      />
      {/* {contentError && <small 
        className="d-block form-text text-danger mt-2">
          Content can't be empty
      </small>} */}
      <div className={styles.buttonWrapper}>
        <Button variant="primary" type="submit">{actionText}</Button>
      </div>
    </Form>
  )
}

export default PostForm;