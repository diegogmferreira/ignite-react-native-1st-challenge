import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';
import { colors } from '../../screens/Home/styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.divider} /> */}

      <Image
        style={styles.imageBackground}
        source={require('../../../assets/Clipboard.png')}
      />

      <View>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}