const fs = require("fs/promises");
const path = require("path");
// const crypto = require("crypto");
const nanoid = require("nanoid");
const readData = async () => {
  const result = await fs.readFile(
    path.join(__dirname, "db/contacts.json"),
    "utf8"
  );
  return JSON.parse(result);
};

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  return await readData();
};

const getContactById = async (contactId) => {
  const contacts = await readData();
  const [result] = contacts.filter((contact) => contact.id === contactId);
  return result;
};

function removeContact(contactId) {
  // ...твой код
}

const addContact = async (name, email, phone) => {
  const contacts = await readData();
  const newContact = {
    // id: crypto.randomBytes(16).toString("hex"),
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "db/contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
