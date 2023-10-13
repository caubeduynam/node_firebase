const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  } catch (error) {
    res.send({ error: "Failed to retrieve data" });
  }
});

app.post("/create", async (req, res) => {
  try {
    const data = req.body;
    await User.add(data);
    res.send({ msg: "User Added" });
  } catch (error) {
    res.send({ error: "Failed to create user" });
  }
});

app.post("/update", async (req, res) => {
  try {
    const id = req.body.id;
    const data = req.body;
    delete data.id;
    await User.doc(id).update(data);
    res.send({ msg: "Updated" });
  } catch (error) {
    res.send({ error: "Failed to update user" });
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});
app.listen(4000, () => console.log("Up & RUnning *4000"));
