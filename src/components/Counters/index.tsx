import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface IProps {
  name: string;
  number: number;
  nameColor: '#4EA8D3' | '#8284FA';
}

export function Counters({name, number, nameColor}: IProps) {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 14,
        color: nameColor,
        fontWeight: 'bold'
      }}>
        {name}
      </Text>

      <Text style={styles.number}>{number}</Text>
    </View>
  );
}