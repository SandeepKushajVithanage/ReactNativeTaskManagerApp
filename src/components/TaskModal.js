import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { addTask, updateTask } from '../redux/actions/taskActions';

const TaskModal = ({ 
    modalVisible, setModalVisible,
    selectedId, setSelectedId,
    title, setTitle,
    description, setDescription
}) => {

    const dispatch = useDispatch();

    const processTask = () => {
        if(selectedId) {
            dispatch(updateTask(selectedId, { title, description }));
            setSelectedId(null);
        } else {
            dispatch(addTask({
                id: Date.now(),
                title: title,
                description: description
            }));
        }
        setTitle('');
        setDescription('');
        setModalVisible(!modalVisible);
    };

    const onCancel = () => {
        setSelectedId(null);
        setTitle('');
        setDescription('');
        setModalVisible(!modalVisible)
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Add Task</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.taskIcon}>Task Title</Text>
                    <TextInput value={title} onChangeText={(text) => setTitle(text)}
                        style={styles.taskValue}
                        placeholder={"Task Title"} placeholderTextColor={"grey"} />
                    <Text style={styles.taskIcon}>Task Description</Text>
                    <TextInput style={[styles.taskValue, styles.descValue]}
                        multiline={true} numberOfLines={10}
                        placeholder={"Description"} placeholderTextColor={"grey"}
                        value={description} onChangeText={(text) => setDescription(text)} />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={onCancel}>
                        <Text style={[styles.btn, styles.cancelBtn]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={processTask}>
                        <Text style={[styles.btn, styles.addBtn]}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default TaskModal;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFF',
        margin: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        height: 550
    },
    titleContainer: {
        margin: 10,
    },
    contentContainer: {
        flex: 1,
        margin: 20,
        marginTop: 0
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20
    },
    btn: {
        width: 120,
        padding: 10,
        color: '#FFF',
        fontWeight: 'bold',
        borderRadius: 5,
        textAlign: 'center'
    },
    cancelBtn: {
        backgroundColor: '#F00'
    },
    addBtn: {
        backgroundColor: '#0F0'
    },
    taskIcon: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 20
    },
    taskValue: {
        backgroundColor: '#FFF',
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 5,
        marginTop: 10
    },
    descValue: {
        height: 220,
        justifyContent: "flex-start",
        textAlignVertical: 'top'
    },
});
