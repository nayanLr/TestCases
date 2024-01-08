import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SubmitButton from '../components/SubmitButton';

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 18,
          color: '#3D3B40',
        }}>
        Navigate to the profile screen
      </Text>
      <SubmitButton
        title="Go to profile"
        handleSubmitButton={() => navigation?.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
