import * as React from 'react';
import { Platform, Text, View, ViewStyle } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { styles } from './styles';

interface Props {
  title: string;
  size: 'small' | 'big';
  style?: ViewStyle;
}

export const Tile: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  size,
  children,
  style
}) => {
  return (
    <View style={[styles.container, size === 'big' && styles.bigContainer, style]}>
      <BlurView
        style={styles.blurView}
        blurType="light"
        blurRadius={Platform.select({ android: 25, default: undefined })}
        blurAmount={5}
      />
      <Text style={styles.headerText}>
        {title}
      </Text>
      {children}
    </View>
  );
};
