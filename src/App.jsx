import './App.module.css';
import Header from './components/Header/Header';
import FormPage from './components/FormPage/FormPage';
import Page2 from './components/Page2/Page2';
import ToDoList from './components/ToDoList/toDoList';
import Items from './components/Items/Gallery/Items';
import ProductPage from './components/Items/ItemPage/ItemPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/page1" element={<FormPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/items" element={<Items />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>




    </BrowserRouter>

  );
}

export default App;
