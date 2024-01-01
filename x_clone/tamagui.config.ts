// the v2 config imports the css driver on web and react-native on native

// for reanimated: @tamagui/config/v2-reanimated

// for react-native only: @tamagui/config/v2-native

import {config} from '@tamagui/config/v2';
import {createTamagui} from 'tamagui';
import {Settings, User2} from '@tamagui/lucide-icons'; // Import icons

const appConfig = createTamagui(config);

// Set up icon configuration
appConfig.icons = {
  // Define the icons you want to use
  settings: Settings,
  user2: User2,
};

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
