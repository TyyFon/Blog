import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import PostFormInput from '../../vievs/PostFormInputs/PostFormInput';
import PostContent from '../../vievs/PostFormInputs/PostContent';
import styles from './PostForm.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const PostForm = ({
  action,
  actionText,
  ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  //const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('content:' , content)
    action({ title, author, publishedDate, shortDescription, content });
  }


  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <PostFormInput
        controlId="formTitle"
        label="Title"
        placeholder="Enter title"
        value={title}
        action={setTitle}
      />
      <PostFormInput
        controlId="formAuthor"
        label="Author"
        placeholder="Enter author"
        value={author}
        action={setAuthor}
        className={styles.smallInput}
      />
      <PostFormInput
        controlId="formDate"
        label="Published"
        placeholder="Enter date"
        value={publishedDate}
        action={setPublishedDate}
        className={styles.smallInput}
      />
      <PostContent
        controlId="formDescription"
        label="Short description"
        placeholder="Enter description"
        value={shortDescription}
        action={setShortDescription}
        rows={3}
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
      />
      <div className={styles.buttonWrapper}>
        <Button variant="primary" type="submit">{actionText}</Button>
      </div>
    </Form>
  )
}

export default PostForm;