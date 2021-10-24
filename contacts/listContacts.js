const fs = require("fs/promises");
const path = require("path");

const productsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(productsPath);
  const contacts = JSON.parse(data);
  console.table(contacts);
  return contacts;
};

module.exports = listContacts;
