/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import { Command } from "@oclif/core";
import * as inquirer from "inquirer";
import { createComponent } from "../core/lit/create-component";

export type ComponentPrompts = {
  componentName: string;
  destinationPath: string;
  feedback: string;
};

/**
 * Generate a Lit2 component.
 *
 * @example
 * $ lit-generate component
 *
 * your-component
 * ┣── README.md
 * ┣── index.ts
 * │
 * └───src
 *     ┣── your-component.ts
 *     ┣── your-component.css.ts (optional)
 *     │
 *     └── test (optional)
 *         └── your-component.test.ts
 */
export default class Component extends Command {
  static description = "Creates a new Lit Web Component.";
  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    /**
     * Gather the name of the new local component to be used.
     */
    const componentName = await inquirer.prompt([
      {
        name: "name",
        message: "What is the name of the new component?",
        type: "input",
        default: "inline-card",
        validate: function (input: string) {
          if (input && typeof input === "string") {
            return true;
          }

          return false;
        },
      },
    ]);

    /**
     * Gather the path to the new local component to be used.
     * This will be a relative path from the root of the project.
     */
    const destinationPath = await inquirer.prompt([
      {
        name: "path",
        message: "Where should the copied component live?",
        type: "input",
        default: "src/components",
        validate: function (input: string) {
          if (input && typeof input === "string") {
            return true;
          }

          return false;
        },
      },
    ]);

    /**
     * Let the user describe the experience they had during the inquisition.
     */
    const feedback = await inquirer.prompt([
      {
        // prettier-ignore useless-escape
        name: "impression",
        message: "How does this tool make you feel?",
        type: "list",
        choices: [
          { name: "amazing" },
          { name: "great" },
          { name: "decent" },
          { name: "meh" },
          { name: "angry" },
        ],
        validate: function (input: string) {
          if (input && typeof input === "string") {
            return true;
          }

          return false;
        },
      },
    ]);

    const prompts = {
      componentName: componentName.name,
      destinationPath: destinationPath.path,
      feedback: feedback.impression,
    };
    createComponent(prompts);
  }
}
