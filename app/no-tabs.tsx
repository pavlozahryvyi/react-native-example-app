import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default function NoTabls() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No tabs screen</Text>
    </View>
  );
}


