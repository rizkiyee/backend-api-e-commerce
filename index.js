const express = require("express"),
  app = express(),
  PORT = 3000,
  { formatResponse } = require("./helpers/formatResponse"),
  { itemsRouter } = require("./src/router/itemsRouter"),
  { addRouter } = require("./src/router/usersRouter"),
  { userLoginRouter } = require("./src/router/loginRouter"),
  { orderUsers } = require("./src/router/orderRouter");

app.use(express.json());

app.use("/api/v1/items", itemsRouter);
app.use("/api/v1/addUser", addRouter);
app.use("/api/v1/login", userLoginRouter);
app.use("/api/v1/orders", orderUsers);

app.get("*", (req, res) => {
  res.status(404).send("Endpoint not found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
