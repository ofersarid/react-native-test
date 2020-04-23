import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalInput, GoalItem } from '../components';

const Home = () => {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setGoals(currentGoals => [...currentGoals, {
      key: Math.random().toString(),
      text: enteredGoal
    }]);
  };

  const deleteGoalHandler = (enteredGoal) => {
    setGoals(currentGoals => [...currentGoals, {
      key: Math.random().toString(),
      text: enteredGoal
    }]);
  };

  return (
    <View style={styles.screen} >
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={goals} renderItem={d => <GoalItem text={d.item.text} onDelete={console.log} />} />
    </View >
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default Home;
