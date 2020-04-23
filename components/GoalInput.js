import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalChangeHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer} >
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        value={enteredGoal}
        onChangeText={goalChangeHandler} />
      <Button title="Add" onPress={onAddGoal.bind(this, enteredGoal)} />
    </View >
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});

export default GoalInput;
