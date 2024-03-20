import { StyleSheet } from "react-native";

//Estilização da Página Home

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC143C",
    justifyContent: "center",
    alignItems: "center",
  },
  quadrado: {
    backgroundColor: "#ffffff88",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "60%",
    border: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
  },
  Background: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 15,
    fontStyle: "italic",
    color: "white",
    marginTop: "20%",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
  },
});

// Estilização da Página Sobre

export const sobreestilo = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
  },
  secundaryContainer: {
    backgroundColor: "#ffffff88",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "60%",
    border: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
  },
  text: {
    marginTop: 25,
    fontSize: 15,
  },

  back: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

// Estilização da Página Contato

export const StylesContato = StyleSheet.create({
  NomeCaixa: {
    padding: 20,
    fontSize: 20,
    marginTop: 5,
    borderBottomWidth: 1,
    border: "solid",
    borderColor: "black",
  },
  text: {
    marginTop: 25,
    fontSize: 15,
    fontWeight: "bold",
  },
  TherreContainerContact: {
    backgroundColor: "#ffffff88",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "60%",
    border: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
  },
  icon: {
    width: 100,
    height: 100,
  },
  back: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
