import { NativeModule, requireNativeModule } from 'expo';

import { LangPickerPluginModuleEvents } from './LangPickerPlugin.types';

declare class LangPickerPluginModule extends NativeModule<LangPickerPluginModuleEvents> {
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<LangPickerPluginModule>('LangPickerPlugin');
