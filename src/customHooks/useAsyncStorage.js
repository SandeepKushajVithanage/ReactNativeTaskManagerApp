import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = (key) => {
    const [storedValue, setValue] = useState(null);

    const getStoredData = async () => {
        try{
            const data = await AsyncStorage.getItem(key);
            return data != null ? JSON.parse(data) : null;
        }catch (err) {
            console.log(err);
            return null;
        }
    }
   
    const checkStoredValue = async () => {
        const data = await getStoredData();
        if (data) {
            setValue(data);
        } else {
            updateStoredValue();
        }
    }

    const updateStoredValue = async () => {
        const newValue = {
            data: 'New Value for Async Storage'
        };
        try{
            await AsyncStorage.removeItem(key);
            await AsyncStorage.setItem(key, JSON.stringify(newValue));
            setValue(newValue);
        }catch (e) {
            setValue(null);
        }
    }

    useEffect(() => {
        checkStoredValue();
    }, [])

    return [storedValue, updateStoredValue];
  }

  export default useAsyncStorage;