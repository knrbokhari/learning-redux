import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AddBook from '../fetaures/books/AddBook'
import BooksView from '../fetaures/books/BooksView'
import EditBook from '../fetaures/books/EditBook'

const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/show-books",
            element: <BooksView />,
        },
        {
            path: "/add-book",
            element: <AddBook/>,
        },
        {
            path: "/edit-book",
            element: <EditBook />,
        },
        {
            path: "/*",
            element: <Error/>,
        }
      ],
    },
  ]);
  
  export default routes;