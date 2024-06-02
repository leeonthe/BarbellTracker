import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function IntroPage({ navigation }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BarbellTracker!</Text>
      <TouchableOpacity style={styles.button} onPress={handleToggleInstructions}>
        <AntDesign name={showInstructions ? "down" : "right"} size={24} color="white" />
        <Text style={styles.buttonText}>
          {showInstructions ? "Hide Instructions" : "View Instructions"}
        </Text>
      </TouchableOpacity>
      {showInstructions && (
        <View style={styles.instructionsBox}>
          <Text style={styles.instructions}>How to Use:</Text>
          <Text style={styles.instructions}>1. Click "Start Recording"</Text>
          <Text style={styles.instructions}>2. Move the circle to the barbell area</Text>
          <Text style={styles.instructions}>3. Choose a line color (default white)</Text>
          <Text style={styles.instructions}>4. Click "Record!"</Text>
          <Text style={styles.instructions}>5. Then choose an exportable format for the video with insights!</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
        <AntDesign name="camera" size={24} color="white" />
        <Text style={styles.buttonText}>Go to Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    marginTop: 20, 
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 130,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  instructionsBox: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 5,
    color: '#333',
  },
});
