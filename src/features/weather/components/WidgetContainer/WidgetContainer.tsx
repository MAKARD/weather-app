import * as React from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string;
  size: 'small' | 'big';
  style?: ViewStyle;
}

export const WidgetContainer: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  size,
  children,
  style
}) => {
  return (
    <View style={[styles.container, size === 'big' && styles.bigContainer, style]}>
      <Text style={styles.headerText}>
        {title}
      </Text>
      {children}
    </View>
  );
};
