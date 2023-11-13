import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Detail from './pages/detail/index.jsx';
import DetailPayment from './pages/payment/detailPayment.jsx';
import DoPayment from './pages/payment/doPayment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>),
  },
  {
    path: "/detail",
    element: (<Detail/>),
  },
  {
    path: "/detail-payment",
    element: (<DetailPayment/>),
  },
  {
    path: "/payment",
    element: (<DoPayment/>),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
