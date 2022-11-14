
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.someText}>Another piece of text!</Text>
      </View>
      <Text 
      style={styles.someText}>Hello World!</Text>
      <Button title='Click Here' />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  someText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16,


  }
});
