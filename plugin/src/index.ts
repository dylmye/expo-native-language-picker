import {
    AndroidConfig,
    ConfigPlugin,
    withAndroidManifest,
    withDangerousMod,
} from "@expo/config-plugins";
import path from "path";
import fs from "fs/promises";

interface NativeLangPickerOptions {
    languages: string[];
}

const withAndroid: ConfigPlugin<NativeLangPickerOptions> = (config, { languages }) => {
    config = withAndroidManifest(config, (cfg) => {
        const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(
            cfg.modResults
        );

        mainApplication.$['android:localeConfig'] = "@xml/locales_config";

        return cfg;
    });

    return withDangerousMod(config, [
        "android",
        async (cfg) => {
            const xmlPath = path.join(cfg.modRequest.platformProjectRoot, 'res/xml/locales_config.xml');

            const localesConfigContents = `<?xml version="1.0" encoding="utf-8"?>
<locale-config xmlns:android="http://schemas.android.com/apk/res/android">
    ${languages.map(l => `<locale android:name="${l}"/>\n\t`)}
</locale-config>
            `;

            await fs.writeFile(xmlPath, localesConfigContents, 'utf-8');

            return cfg;
        }
    ])
}

const withNativeLanguagePicker: ConfigPlugin<NativeLangPickerOptions> = (config, opts) => {
    withAndroid(config, opts)
    return config;
}

export default withNativeLanguagePicker;