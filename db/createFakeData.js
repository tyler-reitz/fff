const fs = require("fs")
const faker = require("faker")

const data = {
  users: []
}

for (let i = 0; i < 40; i++) {
  data.users.push(faker.helpers.contextualCard())
}

fs.writeFile(__dirname + "/db.json", JSON.stringify(data), () => console.log("data set generated"))
