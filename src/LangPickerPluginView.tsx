import { requireNativeView } from 'expo';
import * as React from 'react';

import { LangPickerPluginViewProps } from './LangPickerPlugin.types';

const NativeView: React.ComponentType<LangPickerPluginViewProps> =
  requireNativeView('LangPickerPlugin');

export default function LangPickerPluginView(props: LangPickerPluginViewProps) {
  return <NativeView {...props} />;
}
