const fs = require("fs")
const faker = require("faker")

const data = {
  users: []
}

for (let i = 0; i < 40; i++) {
  const user = faker.helpers.contextualCard();
  user.id = faker.random.uuid();
  data.users.push(user);
}

fs.writeFile(__dirname + "/db.json", JSON.stringify(data), () => console.log("data set generated"))
