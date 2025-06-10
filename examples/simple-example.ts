import { Agent, Browser, BrowserConfig } from "../src";
import { AzureChatOpenAI } from '@langchain/openai';
import * as dotenv from "dotenv";

dotenv.config();

// Simple task to find the founders of browser-use
const task =
`
You are an AI assistant executing a website test automation flow.

Required steps to execute or verify:
---
Step 1: Scroll to the section with the instruction 'Select "red" and "ball" from these dropdowns'.
Step 2: Open the dropdown labeled 'Select an object:'.
Step 3: Choose the option 'ball' from the object dropdown.
Step 4: expect 2nd dropdown display 'ball' as the selected options
---



IMPORTANT RULES:
1. CAREFULLY read the step-by-step instructions above.
2. Execute EVERY step in the order of 'Required steps to execute or verify', without skipping ANY steps.
3. The task is done when all steps are completed.
4. Do not using google search.
`;

// Create a browser instance with non-headless mode to see what's happening
const browser = new Browser(
  new BrowserConfig({
    headless: false,
    disableSecurity: true,
  })
);
async function setup (){
const context = await browser.newContext();
// go to https://www.browser-use.com/
await context.navigateTo('https://browser-use.github.io/stress-tests/challenge.html#dropdown-selections');
await context.waitForStableNetwork();

const model = 'gpt-4.1';
const endpointUrl = new URL(process.env['AZURE_OPENAI_ENDPOINT']!);
const instanceName = endpointUrl.hostname.split('.')[0]!;
// Create the agent with direct OpenAI implementation
const agent = new Agent(
  task,
  new AzureChatOpenAI({
    temperature:0.1,
    streaming: true,
    azureOpenAIApiKey: process.env['AZURE_OPENAI_KEY']!,
    azureOpenAIApiVersion: process.env['AZURE_OPENAI_API_VERSION']!,
    azureOpenAIApiDeploymentName: model,
    azureOpenAIApiInstanceName: instanceName,
  }),
  {
    browserContext: context,
    useVision: true,
    toolCallingMethod: 'raw',
    maxActionsPerStep: 5,
  }
);
return agent;
}

// Main function to run the agent
async function main() {
  const agent = await setup();
  // Run the agent
  await agent.run();
}

// Run the example
if (require.main === module) {
  main().catch(console.error);
}
