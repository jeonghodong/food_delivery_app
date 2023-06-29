import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

function Settings() {
  const [count, setCount] = useState(0);
  const pressHandleNumber = () => {
    setCount(v => v + 1);
  };

  return (
    <View>
      <Pressable>
        <Text onPress={pressHandleNumber}>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Settings;
