const cors = require("cors");
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.db = router.db;

const rules = auth.rewriter({
  users: 660,
  products: 444,
  cart: 640,
  "/users*": "/600/users$1",
  "/products*": "/444/products$1",
  "/cart*": "/640/cart$1",
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
