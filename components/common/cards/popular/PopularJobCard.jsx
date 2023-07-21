import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: `https://robohash.org/${item.id}`,
          }}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.infoWrapper}>
          <Text numberOfLines={1}>
            {" "}
            <Text style={styles.publisher(selectedJob, item)} numberOfLines={1}>
              {item?.username} -{" "}
            </Text>
            <Text style={styles.location} numberOfLines={1}>
              {" "}
              {item.email}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
