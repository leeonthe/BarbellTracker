import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function IntroPage({ navigation }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BarbellTracker!</Text>
      <Button
        title={showInstructions ? "Hide Instructions" : "View Instructions"}
        onPress={handleToggleInstructions}
        color="#1E90FF"
      />
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
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
        color="#20B2AA"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
