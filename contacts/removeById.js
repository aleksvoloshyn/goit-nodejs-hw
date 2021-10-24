const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const removeById = async (id) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const removeContact = contacts.splice(index, 1);
  await updateContacts(contacts);
  return removeContact;
};

module.exports = removeById;
