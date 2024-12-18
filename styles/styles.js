import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: "cover",
    },
    container: {
      flex: 1,
      backgroundColor: "rgba(240, 244, 248, 0.2)",
      alignItems: "center",
      justifyContent: "center",
    },
    bigTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#333",
    },
    subTitle: {
      fontSize: 16,
      color: "#666",
      marginBottom: 40,
    },
    headText: {
      fontSize: 24,
      fontWeight: "600",
      color: "#333",
      marginBottom: 20,
    },
    loginContainer: {
      width: 300,
      padding: 30,
      marginTop: 0,
      borderRadius: 6,
      backgroundColor: "rgba(0,0,0,0.5)",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 5,
      alignItems: "center",
    },
    inputContainer: {
      width: "100%",
    },
    inputBox: {
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
      padding: 10,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: "#fff",
    },
    button: {
      backgroundColor: "#821131",
      borderRadius: 5,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: "center",
      marginTop: 20,
      marginHorizontal: "auto",
      width: "100%",
    },
    signupButton: {
      backgroundColor: "#821131",
      borderRadius: 5,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: "center",
      marginTop: 20,
      width: 250,
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    center: {
      marginTop: 20,
      alignItems: "center",
    },
    small: {
      color: "#666",
      fontSize: 14,
      marginVertical: 2,
    },
    signupText: {
      color: "#F2E8C6",
      fontWeight: "bold",
    },
    signupContainer: {
      alignItems: "center",
      width: 300,
    },
    colorWhite: {
      color: "#fff",
    },
    orText: {
      textAlign: "center",
      color: "#fff",
      marginVertical: 10,
      marginBottom: 2,
    },
    googleButton: {
      backgroundColor: "#fff",
      flexDirection: "row",
      gap: 10,
      width: 250,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    googleButtonText: {
      color: "#000",
      textAlign:'center',
      width:200
    },
    mainContainer: {
      flex: 1,
      paddingTop: 50,
      padding: 20,
      height: "100%",
      backgroundColor: "#fff",
    },
    logo: {
      fontSize: 20,
      fontWeight: "bold",
    },
    menus: {
      fontSize: 16,
      color: "#3E4E50",
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginHorizontal: 10,
      borderRadius: 20,
      backgroundColor: "#ffffff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      elevation: 2,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 30,
      paddingBottom: 20,
      paddingVertical: 20,
      paddingHorizontal: 8,
      width: "100%",
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 10,
      marginRight: 15,
      borderWidth: 1,
      borderColor: "#ddd",
      overflow: "hidden",
    },
    imageMain: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
    },
    description: {
      width: "50%",
      justifyContent: "center",
      textAlign: "center",
    },
    scrollContainer: {
      paddingVertical: 10,
    },
    imageTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 15,
    },
    imageContainer: {
      marginVertical: 20,
    },
    aboutText: {
      lineHeight: 20,
      marginBottom: 20,
      color: "#666",
      marginTop: 40,
      paddingHorizontal: 20,
      textAlign: "center",
    },
    recipe: {
      marginVertical: 8,
    },
    recipeTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    recipeDescription: {
      paddingLeft: 20,
    },
    contactContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    contactBody: {
      width: 300,
      paddingHorizontal: 20,
      gap: 20,
      justifyContent: "center",
      marginTop: 30,
    },
    contactText: {
      fontSize: 18,
    },
    recipes: {
      marginTop: 20,
      padding: 10,
      backgroundColor: "#f9f9f9",
      borderRadius: 5,
    },
    recipeTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    recipeText: {
      fontSize: 16,
      color: "#333",
    },
    errorText:{
      fontWeight:'bold',
      fontSize:16,
      color:'red',
      marginBottom:10,
      backgroundColor:'#fff',
      padding:10,
      textAlign:'center',
      borderRadius:5,
      borderColor:'#ddd',
      borderWidth:1,
    },
    modalBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
      width: "80%",
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
    },
    modalMessage: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: "#821131",
      padding: 10,
      borderRadius: 5,
      width: "50%",
      alignItems: "center",
    },
  });

  export default styles;