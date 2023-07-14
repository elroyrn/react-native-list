import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Name</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info.name}</Text>
      </View>

      <Text style={styles.headText}>Username</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info.username}</Text>
      </View>

      <Text style={styles.headText}>Email</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info.email}</Text>
      </View>

      <Text style={styles.headText}>Phone</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info.phone}</Text>
      </View>

      <Text style={styles.headText}>Address</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{`${info.address.street}, ${info.address.suite}, ${info.address.city}`}</Text>
      </View>
    </View>
  );
};

export default About;
