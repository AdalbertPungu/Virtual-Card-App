import React, {useState} from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import DetailsCard from "./DetailsCard";

export default function Card({ navigation }) {

  const [hideContent, setHideContent] = useState(false);
  const [hideContentblack, setHideContentblack] = useState(false);

  const hideContentBalance = () => {
    setHideContent(!hideContent);
  }
  
  const hideContentBalanceBlack = () => {
    setHideContentblack(!hideContentblack);
  }

  const goToDetailsCard = () => {
    //console.log("Bouton 'Commencer' appuyé");
    navigation.navigate("DetailsCard");
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titleVirtualCards}>Virtual cards</Text>
        <Text style={styles.description}>
          Tap on the card to view your card transactions.
        </Text>

        <TouchableOpacity 
          style={styles.cardRed}
          onPress={goToDetailsCard}
        >
          <Text style={styles.titleCard1}>Kalash</Text>
          <Text style={styles.typePinkVirtualCard}>Pink virtual card</Text>
          
          <View style={styles.dollarBalance1Row}>
            
            <Text style={styles.dollarBalance1}>Dollar balance</Text>

            <TouchableOpacity onPress={hideContentBalance}>
              <FeatherIcon name="eye-off" style={styles.iconHide1}></FeatherIcon>
            </TouchableOpacity>

          </View>
          
          <View style={styles.balance1Row}>
            {hideContent &&
            <Text style={styles.balance1}>$0.89</Text>
            }
            <Text style={styles.visa}>VISA</Text>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardBlack}
        >
          <Text style={styles.titleCard2}>Kalash</Text>
          <Text style={styles.typeBlackVirtualCard}>Black virtual card</Text>
          <View style={styles.dollarBalance1Row2}>
            <Text style={styles.dollarBalance2}>Dollar balance</Text>

            <TouchableOpacity onPress={hideContentBalanceBlack}>
              <FeatherIcon name="eye-off" style={styles.iconHide2}></FeatherIcon>
            </TouchableOpacity>

          </View>
          <View style={styles.balance1Row}>
            {hideContentblack &&
            <Text style={styles.balance2}>$0.75</Text>
            }
            <Text style={styles.visa2}>VISA</Text>
          </View>
        </TouchableOpacity>

      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderStyle: "solid",
    left: "4%",
  },
  titleVirtualCards: {
    fontFamily: "roboto-800",
    fontSize: 22,
    marginTop: 60,
    height: 40,
    left: "4%",
  },
  description: {
    alignItems: 'center',
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 12,
    left: "4%",
  },
  cardRed: {
    width: 360,
    height: 220,
    backgroundColor: "rgba(251,74,96,1)",
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(208,2,27,1)",
    marginTop: 80,
    marginLeft: 10
  },
  titleCard1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 18,
    marginLeft: 15
  },
  typePinkVirtualCard: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 5,
    marginLeft: 16
  },
  dollarBalance1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 3
  },
  iconHide1: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginLeft: 6
  },
  dollarBalance1Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 97,
    marginLeft: 15,
    marginRight: 236
  },
  balance1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  visa: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 270,
    marginTop: 6,
    left: 0,
  },
  balance1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 15,
    marginRight: 27
  },
  cardBlack: {
    top: 50,
    left: 10,
    width: 360,
    height: 220,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 8,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)"
  },
  typeBlackVirtualCard: {
    top: 40,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11
  },
  balance2: {
    top: 164,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
  },
  iconHide2: {
    top: 139,
    left: 101,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  titleCard2: {
    top: 18,
    left: 15,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15
  },
  visa2: {
    top: 171,
    left: 270,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  dollarBalance2: {
    top: 142,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },

});

