import './App.css';
import Header from'./components/header';
import TodoList from './components/toDoList';
// import TodoList from './components/toDolistUseReducer';
import Footer from './components/footer';
// import './components/style.css'


function App() {
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  )
}

export default App;
