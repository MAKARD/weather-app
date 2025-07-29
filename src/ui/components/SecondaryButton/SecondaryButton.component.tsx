import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { colors } from '@/ui/colors';

interface Props {
  onPress?: () => void;
  children: string;
  color?: keyof typeof colors;
}

export const SecondaryButton: React.FC<Props> = ({
  onPress,
  children,
  color = 'blue'
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors[color] }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
