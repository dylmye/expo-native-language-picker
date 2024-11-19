package expo.modules.dylmye

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class LangPickerPluginModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("LangPickerPlugin")
    AsyncFunction("setValueAsync") { value: String ->
      // Send an event to JavaScript.
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }
  }
}
