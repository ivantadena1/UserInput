import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: '#02031bff' }]}>Welcome to My App!</Text>


      <Link href="/login" style={styles.link}>
        <Text style={styles.linkText}>LOGIN</Text>
      </Link>

      <Text style={styles.separatorText}>or</Text>
      
      <Link href="/signup" style={styles.link}>
        <Text style={styles.linkText}>SIGN UP</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9bc9c4ff", // Light neutral background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginBottom: 25,
    textAlign: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#4cff3cff", // 
    borderRadius: 10,
    minWidth: 160,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  separatorText: {
    marginVertical: 20,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

