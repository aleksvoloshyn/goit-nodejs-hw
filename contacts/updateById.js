const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const updateById = async (id, name, email, phone) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  await updateContacts(contacts);
  console.table(await getAll());
  return contacts[index];
};

module.exports = updateById;
