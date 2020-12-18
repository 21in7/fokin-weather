import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개 심함",
    subtitle: "운전 조심"
  },
  Rain: {
      iconName: "weather-rainy",
      gradient: ["#373B44", "#4286f4"],
      title: "비옴",
      subtitle: "우산챙겨가세요"
  },
  Clear: {
      iconName: "weather-sunny",
      gradient: ["#2980B9", "#6DD5FA"],
      title: "밝음",
      subtitle: "나가기 좋음"
  },
  Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#bdc3c7", "#2c3e50"],
      title: "구름낌",
      subtitle: "운전 조심"
  },
  Snow: {
      iconName: "weather-snowy",
      gradient: ["#274046", "#E6DADA"],
      title: "눈옴",
      subtitle: "빙판조심"
  },
  Thunderstorm: {
      iconName: "weather-lightning-rainy",
      gradient: ["#000000", "#434343"],
      title: "태풍",
      subtitle: "이불밖은 위험"
  },
  Dust: {
      iconName: "weather-fog",
      gradientL: ["#181818", "#BA8B02"],
      title: "황사 or 미세먼지",
      subtitle: "중국 씨발련들"
  }
};

export default function Weather({ temp,condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="ligth-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
      fontWeight: "600",
    color: "white",
    fontSize: 24
  },
  textContainer: {
      paddingHorizontal:20,
      alignItems: "flex-start"
  }
});
