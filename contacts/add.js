const getAll = require("./getAll");
const nanoid = require("nanoid");
const updateContacts = require("./updateContacts");

const add = async (data) => {
  const contacts = await getAll();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = add;
