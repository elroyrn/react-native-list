import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: `https://robohash.org/${job.id}`,
          }}
          resizeMode="cover"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.name}
        </Text>

        <Text style={styles.jobType} numberOfLines={1}>
          {job?.username}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
