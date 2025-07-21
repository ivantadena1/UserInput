import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181818",
    padding: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#fafafa",
    marginBottom: 36,
    fontFamily: "sans-serif-medium",
    letterSpacing: 2,
    textShadowColor: "#222",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 14,
  },
  link: {
    width: 260,
    paddingVertical: 14,
    backgroundColor: "#0095f6",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#0095f6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  linkText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 1,
    textShadowColor: "#222",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  linkSecondary: {
    width: 260,
    paddingVertical: 14,
    backgroundColor: "#222",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#444",
    alignItems: "center",
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 2,
  },
  linkTextSecondary: {
    color: "#0095f6",
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 1,
    textShadowColor: "#222",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    width: "80%",
    justifyContent: "center",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#333",
    marginHorizontal: 2,
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 15,
    color: "#aaa",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/instagram.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Instagram</Text>

      <View style={styles.buttonContainer}>
        <Link href="/login" style={styles.link}>
          <Text style={styles.linkText}>Log In</Text>
        </Link>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/signup" style={styles.linkSecondary}>
          <Text style={styles.linkTextSecondary}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}

