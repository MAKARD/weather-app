import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string;
  size: 'small' | 'big';
}

export const WidgetContainer: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  size,
  children
}) => {
  return (
    <View style={[styles.container, size === 'big' && styles.bigContainer]}>
      <Text style={styles.headerText}>
        {title}
      </Text>
      {children}
    </View>
  );
};
