"use client"
import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { labels, risks, types } from "./data"

const tasks = Array.from({ length: 100 }, () => ({
  id: faker.datatype.number({ min: 1000, max: 9999 }),
  name: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  type: faker.helpers.arrayElement(types).value,
  label: faker.helpers.arrayElement(labels).value,
  risk: faker.helpers.arrayElement(risks).value,
  security_policy: faker.datatype.string(),
  iam: faker.datatype.string(),
  compliance: faker.datatype.string()
}))

fs.writeFileSync(
  path.join(__dirname, "applications.json"),
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Tasks data generated.")
