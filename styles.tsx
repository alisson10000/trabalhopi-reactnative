import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
  },

  logo: {
    width: 60,
    height: 60,
    marginBottom: 40,
    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 40,
  },

  facebookButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 35,
    marginBottom: 15,
  },

  fbIcon: {
    width: 22,       // <= tamanho ajustado para ficar igual ao app real
    height: 22,
    marginRight: 10,
    resizeMode: "contain",
  },

  fbText: {
    fontSize: 16,
    fontWeight: "600",
  },

  createButton: {
    borderColor: "#fff",
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 35,
    marginBottom: 20,
  },

  createText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },

  moreOptions: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 25,
  },

  terms: {
    color: "#e2f5f5",
    fontSize: 13,
    lineHeight: 18,
  },
});
