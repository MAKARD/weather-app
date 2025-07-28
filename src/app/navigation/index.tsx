import { createStaticNavigation } from '@react-navigation/native';

import { RootStack } from './stacks/root.stack';

export const Navigation = createStaticNavigation(RootStack);
