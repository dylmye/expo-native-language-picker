import ExpoModulesCore

public class LangPickerPluginModule: Module {
  public func definition() -> ModuleDefinition {
    Name("LangPickerPlugin")
    AsyncFunction("setValueAsync") { (value: String) in
      // Send an event to JavaScript.
      self.sendEvent("onChange", [
        "value": value
      ])
    }
  }
}
