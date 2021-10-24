const fs = require("fs/promises");
const path = require("path");
const contactsPath = require("./contactsPath");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  // console.table(contacts);
  return contacts;
};

module.exports = getAll;
