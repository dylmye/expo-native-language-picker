import * as React from 'react';

import { LangPickerPluginViewProps } from './LangPickerPlugin.types';

export default function LangPickerPluginView(props: LangPickerPluginViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
