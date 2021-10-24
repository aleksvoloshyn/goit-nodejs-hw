const { Command } = require("commander");
const chalk = require("chalk");
const program = new Command();
const { getAll, getById, add, updateById, removeById } = require("./contacts");

program
  .requiredOption("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    // Получить все контакты
    case "getAll":
      const contacts = await getAll();
      return await getAll();

    // Вывести список всех контактов
    // node index.js --action list
    case "list":
      const listContacts = await getAll();
      console.table(listContacts);
      break;

    // Получить 1 контакт по ID
    // node index.js --action get --id NxD6YEEpYmkLkmpJ3yTK6
    case "getById":
      const contactById = await getById(id);
      console.log(contactById);
      return contactById;

    // Добавить 1 новый контакт
    // node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
    case "add":
      const newContact = await add({ name, email, phone });
      console.log(chalk.green("Add new contact"));
      console.log(newContact);
      return newContact;
    // Обновить товар по ID
    // yarn start --action updateById --id QGBPvsyAh6p3FT3WCXdX4 --name JohnSnow --email JOHNNNNN@mail.ru --phone 5365333
    case "updateById":
      const updateContact = await updateById(id, name, email, phone);
      console.log(updateContact);
      return updateContact;

    // Удалить контакт по ID
    // node index.js --action remove --id= 0uetW3h_yd5auC3ojrQny
    case "remove":
      const removeContact = await removeById(id);
      console.log(removeContact);
      return removeContact;

    default:
      console.warn(chalk.red("Unknown action type!"));
  }
};

invokeAction(argv);
