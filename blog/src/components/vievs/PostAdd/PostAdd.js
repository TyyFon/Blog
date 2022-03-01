import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import PostFormInput from '../PostFormInputs/PostFormInput';
import PostContent from '../PostFormInputs/PostContent';
import styles from '../../features/AddPostForm/AddPostForm.module.scss';


const PostForm = (action, ...props) => {

  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [publishedDate, setPublishedDate] = useState(
      props.publishedDate);
  const [shortDescription, setShortDescription] = useState(
      props.shortDescription);
  const [content, setContent] = useState(props.content);

  const handleSubmit = e => {
      console.log('title:', title)
    e.preventDefault();
    action({ 
        title, 
        author, 
        publishedDate, 
        shortDescription, 
        content 
    });
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
        placeholder="Leave a comment here"
        value={shortDescription}
        action={setShortDescription}
        rows={3}
      />
      <PostContent
        controlId="formContent"
        label="Main content"
        placeholder="Leave a comment here"
        value={content}
        action={setContent}
        rows={10}
      />
      <Button variant="primary" type="submit">Add Post</Button>
    </Form>
  )
}

export default PostForm;