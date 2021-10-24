const { Command } = require("commander");
const chalk = require("chalk");
const program = new Command();
const { getAll, getById, add } = require("./contacts");

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
    case "getAll":
      const contacts = await getAll();
      console.table(contacts);
      return await getAll();

    case "getById":
      const contactById = await getById(id);
      console.log(contactById);
      return contactById;

    case "add":
      const newContact = await add({ name, email, phone });
      console.log(chalk.green("Add new contact"));
      console.log(newContact);
      return newContact;

    case "remove":
      // ... id
      break;

    default:
      console.warn(chalk.red("Unknown action type!"));
  }
};

invokeAction(argv);

// invokeAction(argv).then((result) => {
//   console.log("End");
// });
