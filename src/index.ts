// Reexport the native module. On web, it will be resolved to LangPickerPluginModule.web.ts
// and on native platforms to LangPickerPluginModule.ts
export { default } from './LangPickerPluginModule';
export { default as LangPickerPluginView } from './LangPickerPluginView';
export * from  './LangPickerPlugin.types';
