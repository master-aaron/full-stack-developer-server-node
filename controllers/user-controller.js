import people from "./users/users.js";
let users = people;

const userController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get('/api/users/:uid', findUserById);
};

const findUsersByType = (type) => users.filter((s) => s.type === type);

const findAllUsers = (req, res) => {
  const type = req.query.type;
  if (type) {
    res.json(findUsersByType(type));
    return;
  }
};

const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users.find(u => u._id === userId);
  res.json(user);
 }
 

export default userController;
