const { execSync } = require("child_process")

const output = process.argv[2]

if (!output) {
  console.error("Please provide an output file name.")
  process.exit(1)
}

execSync(`tsc && pkg . --compress=GZip --output=dist/${output}`, { stdio: "inherit" })