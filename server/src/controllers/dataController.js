const Data = require("../models/Data");

exports.getData = async (req, res) => {
  try {
    const data = await Data.find({}).limit(30);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addData = async (req, res) => {
  try {
    // const newData = new Data(req.body);
    // const savedData = await newData.save();
    const jsonData = req.body; // Assumes the JSON data is sent in the body of the POST request
    await Data.insertMany(jsonData);
    res.status(200).send("Data inserted successfully");
    // res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
