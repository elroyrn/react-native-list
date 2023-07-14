import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./cardvertical.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const CardVertical = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Card Vertical List</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => <NearbyJobCard job={job} key={`nearby-job-${job.id}`} handleNavigate={() => router.push(`/card-details/${job.id}`)} />)
        )}
      </View>
    </View>
  );
};

export default CardVertical;
