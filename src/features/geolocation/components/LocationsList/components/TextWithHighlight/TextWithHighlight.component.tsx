import * as React from 'react';
import { Text } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';

interface Props {
  textToHighlight: string;
  children: string;
}

export const TextWithHighlight: React.FC<Props> = ({
  children,
  textToHighlight
}) => {
  const items = children.split(textToHighlight);

  if (!textToHighlight || items.length === 1) {
    return (
      <Text style={styles.itemText}>
        {children}
      </Text>
    );
  }

  return (
    <Text style={styles.itemText}>
      {items.map((item) => {
        if (!item) {
          return (
            <Text key={uuid.v4()} style={styles.itemTextHighlighted}>
              {textToHighlight}
            </Text>
          );
        }

        return item;
      })}
      {/* {children.slice(position, textToHighlight.length)} */}
      {/* {textToHighlight} */}
      {/* {children.slice(textToHighlight.length)} */}
      <Text style={styles.itemTextHighlighted}>
        {/* {textToHighlight} */}
      </Text>
      {/* {children.slice(position + textToHighlight.length - 1, -1)} */}
    </Text>
  );
};
