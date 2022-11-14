
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View styles={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Goal!' />
        <Button title='Add Goal' />

       </View>
      <View>
        <Text> List of Goals...</Text>

      
      </View>
    
   
        
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
  


  
});
