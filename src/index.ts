/**
 * browser-use-ts
 *
 * TypeScript port of browser-use - a framework for building autonomous browser agents
 *
 * @copyright Pankil Joshi
 * @license MIT
 */

// Export browser modules
export { Browser, BrowserConfig } from './browser/browser';
export { BrowserContext, BrowserContextConfig, BrowserSession } from './browser/context';

export type { BrowserContextState } from './browser/context';

export { BrowserState, BrowserStateHistory, BrowserError, URLNotAllowedError } from './browser/views';
export type { TabInfo } from './browser/views';

// Export DOM modules
export { DOMElementNode, DOMHistoryElement, DOMState } from './dom/views';
export type { SelectorMap } from './dom/views';
export { DOMService } from './dom/service';

// Export Agent modules
export { Agent } from './agent/service';
export { AgentSettings, AgentState } from './agent/views';

// Export Controller modules
export { Controller } from './controller/service';
// ControllerSettings is not exported from controller/views

// Export Action models
export {
  SearchGoogleAction,
  GoToUrlAction,
  ClickElementAction,
  InputTextAction,
  DoneAction,
  SwitchTabAction,
  OpenTabAction,
  ScrollAction,
  SendKeysAction,
  ExtractPageContentAction,
  NoParamsAction,
  SelectDropdownOptionAction,
  WaitAction,
  ScrollToTextAction,
  GetDropdownOptionsAction
} from './controller/views';

// Export Registry
export { Registry } from './controller/registry/service';

// Export utilities
export * from './utils';

