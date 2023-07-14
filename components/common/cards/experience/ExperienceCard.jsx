import { View, Text, Image } from "react-native";

import styles from "./experiencecard.style";
const ExperienceCard = ({ image, job, place }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={image} resizeMode="cover" style={styles.logImage} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={2}>
          {job}
        </Text>

        <Text style={styles.jobType}>{place}</Text>
      </View>
    </View>
  );
};

export default ExperienceCard;
