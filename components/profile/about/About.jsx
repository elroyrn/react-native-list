import { View, Text } from "react-native";
import { COLORS, icons, images, SIZES } from "../../../constants";
import styles from "./about.style";
import ExperienceCard from "../../common/cards/experience/ExperienceCard";

const AboutProfile = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>
          An ungraduated student at Brawijaya University who is a cheerful and great willing person who likes to explore new things. I'm also hardworking, easy to adapt with others, and right now I have strong interest in Digital &
          Technology particularly in Mobile Development
        </Text>
      </View>

      <Text style={styles.headText}>Experience</Text>
      <View style={styles.contentBox}>
        <ExperienceCard image={images.prasmul} job={"Assistant Mobile Development Lab"} place={"Universitas Prasetiya Mulya"} />
      </View>
      <View style={styles.contentBox}>
        <ExperienceCard image={images.educourse} job={"Mobile Developer Intern"} place={"Educourse.id · Internship"} />
      </View>

      <Text style={styles.headText}>Education</Text>
      <View style={styles.contentBox}>
        <ExperienceCard image={images.brawijaya} job={"University of Brawijaya"} place={"Sistem Informasi"} />
      </View>

      <Text style={styles.headText}>Projects</Text>
      <View style={styles.contentBox}>
        <ExperienceCard image={images.educourse} job={"Digital City Mobile"} place={"React-Native App"} />
      </View>
      <View style={styles.contentBox}>
        <ExperienceCard image={images.educourse} job={"Educourse Mobile"} place={"Flutter App"} />
      </View>
      <View style={styles.contentBox}>
        <ExperienceCard image={images.educourse} job={"Admin Bazar Mobile"} place={"Flutter App"} />
      </View>
    </View>
  );
};

export default AboutProfile;
