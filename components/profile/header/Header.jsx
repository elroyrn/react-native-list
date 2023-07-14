import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./header.style";
import { icons, images } from "../../../constants";
import { checkImageURL } from "../../../utils";

const HeaderProfile = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={images.profile} style={styles.logoImage} />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>Elroy Reinhard Natalael</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>Mobile Developer / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode="contain" style={styles.locationImage} />
          <Text style={styles.locationName}>Bandung</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderProfile;
