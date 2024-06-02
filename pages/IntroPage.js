import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function IntroPage({ navigation }) {
  const [showInstructions, setShowInstructions] = useState(false);
  const [activeSections, setActiveSections] = useState([]);

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const toggleExpand = index => {
    const sections = [...activeSections];
    const position = sections.indexOf(index);
    if (position === -1) {
      sections.push(index);
    } else {
      sections.splice(position, 1);
    }
    setActiveSections(sections);
  };

  const faqData = [
    {
      question: 'What is different in the 6.X version of the app?',
      answer: 'Version 6.X introduces a new user interface and additional features.'
    },
    {
      question: 'How do I export camera?',
      answer: 'You can export the camera by clicking the "Export" button.'
    },
    {
      question: 'How to set position of the barbell to track motion?',
      answer: 'You can set the position of the barbell by moving the circle to the barbell area.'
    },
    {
      question: 'How do I start? What do I do first?',
      answer: 'To start, click the "Go to Camera" button.'
    },
    {
      question: 'Is it required to grant camera permissions?',
      answer: 'Yes, you must grant camera permissions to use the app.'
    },
  ];

  return (
    <ScrollView style={styles.container}>
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
      <TouchableOpacity style={styles.buttonCamera} onPress={() => navigation.navigate('Camera')}>
        <AntDesign name="camera" size={24} color="white" />
        <Text style={styles.buttonText}>Go to Camera</Text>
      </TouchableOpacity>
      <Text style={styles.faqTitle}>FAQ</Text>
      <View style={styles.line}></View>
      {faqData.map((item, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.faqItem} onPress={() => toggleExpand(index)}>
            <Text style={styles.faqQuestion}>{item.question}</Text>
            <AntDesign name={activeSections.includes(index) ? "minus" : "plus"} size={24} color="black" />
          </TouchableOpacity>
          {activeSections.includes(index) && (
            <Text style={styles.faqAnswer}>{item.answer}</Text>
          )}
          <View style={styles.separator}></View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginTop: 20, 
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30, // margin between Welcome to BarbellTracker! and View Instructions
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20, // margin between View Instructions and Go to Camera
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCamera: {
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 100, // margin between Go to Camera and FAQ
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
  },
  instructions: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 5,
    color: '#333',
  },
  faqTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 18,
    flex: 1,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    paddingLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
});
