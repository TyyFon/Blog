import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About.js'
import AddPost from './components/pages/AddPost/AddPost.js'
import EditPost from './components/pages/EditPost/EditPost.js'
import Error from './components/pages/Error/Error.js'
import Main from './components/pages/Main/Main.js'
import Post from './components/pages/Post/Post.js'
import { Container } from 'react-bootstrap';
import Header from './components/vievs/Header/Header.js'
import Footer from './components/vievs//Footer/Footer.js'

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Container>

  );
}

export default App;
