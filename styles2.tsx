import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // efeito escuro bonito
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 40,
    resizeMode: "contain",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.12)",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  button: {
    backgroundColor: "#E50914",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});
