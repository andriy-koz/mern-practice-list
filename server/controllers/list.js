import PracticeListItem from "../models/list.js";

export const getItems = async (req, res) => {
  try {
    const list = await PracticeListItem.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addItem = async (req, res) => {
  const item = req.body;
  const newItem = new PracticeListItem(item);

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

};

export const editItem = (req, res) => { };

export const deleteItem = (req, res) => { };
