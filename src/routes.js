
import Product from "./Components/Products/Product.js";
import Comment from "./Components/Comments/Comment.js";
import Order from "./Components/Orders/Order.js";
import Offers from "./Components/Offers/Offers.js";
import Users from "./Components/Users/Users.js";

const routes = [
     { path: "/products", element: <Product /> },
     { path: "/comments", element: <Comment /> },
     { path: "/order", element: <Order /> },
     { path: "/offers", element: <Offers /> },
     { path: "/users", element: <Users /> },

]


export default routes