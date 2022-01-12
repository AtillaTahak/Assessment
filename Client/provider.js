import { Publisher } from "@pact-foundation/pact"
const path = require("path")
import childProcess from "child_process";

const exec = command =>
  childProcess
    .execSync(command)
    .toString()
    .trim()

const gitSha = exec("git rev-parse HEAD || echo LOCAL_DEV")
const branch =  exec("git rev-parse --abbrev-ref HEAD || echo LOCAL_DEV")

const opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), "./contracts/")],
  pactBroker: "http://localhost:5001/posts/",
  consumerVersion: gitSha,
  tags: [branch],
}

new Publisher(opts)
  .publishPacts()
  .then(() => {
    console.log(`You can see contract http://localhost:5001/posts/`)
  })
  .catch(e => {
    console.log(e.message)
  })