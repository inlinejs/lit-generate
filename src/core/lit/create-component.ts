import chalk = require("chalk");
import { execSync } from "node:child_process";
import type { ComponentPrompts } from "../../commands/component";

/**
 * Convert an @phase2/outline component to an @inlinejs/inline component.
 *
 * @param {string} prompts - prompts: Object of the values from the prompt questions;
 * @returns NULL
 */
export const createComponent = (prompts: ComponentPrompts): void => {
  console.log(prompts);
  try {
    execSync(`echo "Creating ${prompts.componentName}..."`);
  } catch (error) {
    throw console.error(`${chalk.red("error")}: ${error}`);
  }
};
