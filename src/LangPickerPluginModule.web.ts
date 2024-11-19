import { registerWebModule, NativeModule } from 'expo';

import { LangPickerPluginModuleEvents } from './LangPickerPlugin.types';

class LangPickerPluginModule extends NativeModule<LangPickerPluginModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(LangPickerPluginModule);
