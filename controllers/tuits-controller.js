import * as tuitsDao from "./tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await tuitsDao.createTuit(newTuit);

  // newTuit.stats = { comments: 123, retuits: 234, likes: 345, dislikes: 345 };
  // newTuit.liked = false;
  // newTuit.disliked = false;
  // newTuit.postedBy = { username: "NASA" };
  // tuits.push(newTuit);
  res.json(newTuit);
};

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
  console.log(res.json(tuits));
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);

  res.send(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

  res.send(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
