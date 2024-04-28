import { useState } from 'react';
import { FlatList, Image, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { randomUUID } from 'expo-crypto';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors, styles } from './styles';
import { Counters } from '../../components/Counters';
import { EmptyList } from '../../components/EmptyList';
import { TaskType, TodoItem } from '../../components/TodoItem';

export function Home() {
  const [todoList, setTodoList] = useState<TaskType[]>([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    if (inputValue.trim() === '') {
      return;
    }

    if (todoList.some(item => inputValue.includes(item.id))) {
      return;
    }

    setTodoList([
      ...todoList,
      {
        id: randomUUID(),
        taskDescription: inputValue,
        isCompleted: false,
      }
    ]);
    setInputValue('')
    return;
  }

  function handleCheckTask(id: string) {
    const updatedTaskList = todoList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: true
        }
      }

      return task;
    });

    setTodoList(updatedTaskList);
  }

  function handleDeleteTask(id: string) {
    setTodoList(prevState =>
      prevState.filter(task => task.id !== id)
    );
  }

  const counters = {
    total: todoList.length,
    completed: todoList.filter(task => task.isCompleted).length,
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />

      <Image
        style={styles.imageLogo}
        source={require('../../../assets/Logo.png')}
      />

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder='Nome do participante'
          placeholderTextColor={colors['gray-300']}
          onChangeText={setInputValue}
          value={inputValue}
        />

        <TouchableHighlight
          style={styles.submitBtn}
          activeOpacity={1}
          underlayColor={colors.blue}
          onPress={handleAddTask}
        >
          <Ionicons name='add-circle-outline' size={16} color={colors['gray-100']} />
        </TouchableHighlight>
      </View>

      <View style={styles.counters}>
        <Counters
          name='Criadas'
          nameColor='#4EA8D3' // blue
          number={counters.total}
        />

        <Counters
          name='Concluídas'
          nameColor='#8284FA' // blue
          number={counters.completed}
        />
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            onCheck={(item) => { handleCheckTask(item.id) }}
            onDelete={(item) => { handleDeleteTask(item.id) }}
            task={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
    </View>
  );
}