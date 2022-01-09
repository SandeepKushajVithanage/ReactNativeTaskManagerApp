import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { removeTask } from '../redux/actions/taskActions';

const TaskCard = ({
    item, dispatch, setSelectedId,
    setTitle, setDescription, modalVisible,
    setModalVisible
}) => {

    const onDelete = () => {
        dispatch(removeTask(item.id));
    }

    const onEdit = () => {
        setSelectedId(item.id);
        setTitle(item.title);
        setDescription(item.description);
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.time}>{moment.utc(new Date(item.id)).local().startOf('seconds').fromNow()}</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={onEdit}>
                    <Text style={[styles.btn, styles.editBtn]}>Edit</Text>
                </TouchableOpacity>
                <View style={styles.btnSeperator}/>
                <TouchableOpacity onPress={onDelete}>
                    <Text style={[styles.btn, styles.deleteBtn]}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TaskCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    btn: {
        width: 60,
        height: 20,
        borderRadius: 5,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnContainer: {
        marginTop: 'auto'
    },
    editBtn: {
        backgroundColor: '#00F',
    },
    deleteBtn: {
        backgroundColor: '#F00',
    },
    time: {
        marginTop: 10,
        fontSize: 12,
        textAlign: 'center'
    },
    btnSeperator: {
        height: 5
    }
});
