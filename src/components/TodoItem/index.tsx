import React, { useState } from 'react';
import { Pressable, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';
import { colors } from '../../screens/Home/styles';

interface IProps {
  task: TaskType;
  onDelete: (item: TaskType) => void;
  onCheck: (item: TaskType) => void;
}

export type TaskType = {
  id: string;
  taskDescription: string;
  isCompleted: boolean;
}

export function TodoItem({ task, onCheck, onDelete }: IProps) {
  const [checked, setChecked] = useState(task.isCompleted);

  const [isPressed, setIsPressed] = useState(false);

  function handlePressCheckbox() {
    setChecked(!checked);
    onCheck(task);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={handlePressCheckbox}
      >
        {checked && <Ionicons name="checkmark" size={8} color="white" />}
      </Pressable>

      <Text style={[styles.text, checked && styles.completedText]}>{task.taskDescription}</Text>

      <TouchableHighlight
        style={[styles.deleteBtn, isPressed && styles.deleteBtnPressed]}
        activeOpacity={1}
        underlayColor={colors['gray-400']}
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        onPress={() => onDelete(task)}
      >
        <Ionicons name='trash' size={16} color={!isPressed ? colors['gray-300'] : colors.danger} />
      </TouchableHighlight>
    </View>
  );
}