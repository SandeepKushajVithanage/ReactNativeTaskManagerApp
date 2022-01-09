import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TaskCard from './src/components/TaskCard';
import TaskModal from './src/components/TaskModal';
import { retrieveTasks } from './src/redux/actions/taskActions';

const ItemSeperator = () => <View style={{ height: 10 }} />;

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const taskList = useSelector(state => state.tasks);
  const [selectedId, setSelectedId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expandedTask, setExpandedTask] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTasks());
  }, []);

  const renderItem = ({ item }) => (
    <TaskCard
      item={item}
      dispatch={dispatch}
      setSelectedId={setSelectedId}
      setTitle={setTitle}
      setDescription={setDescription}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>My Task List</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={[styles.btn, styles.addBtn]}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainerStyle}
        flex={1}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeperator}
      />
      <TaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  headerContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  contentContainer: {

  },
  contentContainerStyle: {
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  addBtn: {
    color: '#FFF',
    fontWeight: 'bold',
    width: 100,
    backgroundColor: '#0F0',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5
  },
});