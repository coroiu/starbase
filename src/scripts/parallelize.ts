import chalk from "chalk";
import { runParallelShellCommands } from "../commands/run-parallel-shell-commands";
import { environment } from "../environment";

// import concurrently from "concurrently";

/**
 * Run commands in parallel
 *
 * @example `ts-node src/scripts/parallelize 'npm run web:dev' ' npm run server:dev'`
 */
async function run() {
  console.log(chalk.green("# Script: parallelize #"));

  const commands = process.argv.slice(2).map((command, index) => ({
    command,
  }));
  return await runParallelShellCommands(commands);
}

run().catch(console.error);
