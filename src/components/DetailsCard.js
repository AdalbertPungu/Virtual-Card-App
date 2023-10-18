import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function DetailsCard({ navigation }) {

  const backToCard = () => {
    navigation.navigate("Card");
  }

  const [hideContent, setHideContent] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const hideContentBalance = () => {
    setHideContent(!hideContent);
  }

  const toggleContent = () => {
    setShowContent(!showContent);
  }; 

  return (
    <ScrollView>

      <View style={styles.container}>

        <View style={styles.iconRow}>

          <TouchableOpacity onPress={backToCard}>
            <EntypoIcon name="chevron-left" style={styles.icon}></EntypoIcon>
          </TouchableOpacity>

          <TouchableOpacity>
            <FeatherIcon name="settings" style={styles.icon2}></FeatherIcon>
          </TouchableOpacity>

        </View>
        

        <View style={styles.group9}>
          <View style={styles.cardRedDetails}>
            <Text style={styles.titleCard1}>Kalash</Text>
            <Text style={styles.typePinkVirtualCard1}>Pink virtual card</Text>
            <View style={styles.dollarBalance1Row}>
              <Text style={styles.dollarBalance1}>Dollar balance</Text>

              <TouchableOpacity onPress={hideContentBalance}>
                <FeatherIcon name="eye-off" style={styles.iconHide}></FeatherIcon>
              </TouchableOpacity>

            </View>
            
            <View style={styles.balance1Row}>
              {hideContent &&
              <Text style={styles.balance1}>$0.89</Text>
              }
              <Text style={styles.visa1}>VISA</Text>
            </View>
            
          </View>
        </View>
        
        <View style={styles.groupRowTransaction}>

          <TouchableOpacity>
          <View style={styles.groupShowDetails}>
            <FeatherIcon name="eye" style={styles.iconShowDetails}></FeatherIcon>
            <Text style={styles.showDetails}>Show details</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.groupFundCard}>
              <FeatherIcon name="credit-card" style={styles.iconFundCard}></FeatherIcon>
              <Text style={styles.fundCard}>Fund card</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.groupWithdraw}>
              <FeatherIcon name="download" style={styles.iconWithdraw}></FeatherIcon>
              <Text style={styles.withdraw}>Withdraw</Text>
            </View>
          </TouchableOpacity>

        </View>
        
        <View style={styles.groupTransaction}>
          <View style={styles.transactionsRow}>
            <Text style={styles.transactions}>Transactions</Text>
            <TouchableOpacity onPress={toggleContent}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        
        <TouchableOpacity>
          <View style={styles.cardFundedTransaction}>
            <View style={styles.icon6Row}>
              <FontAwesomeIcon
                name="credit-card"
                style={styles.icon6}
              ></FontAwesomeIcon>
              <View style={styles.cardFundedColumn}>
                <Text style={styles.cardFunded}>Card funded</Text>
                <Text style={styles.datecardFunded}>22 Marh 2023 | 01:12</Text>
              </View>
              <Text style={styles.cardFundedBalance}>+ $6.00</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.group7}>
            <View style={styles.icon7Row}>
              <FontAwesomeIcon
                name="credit-card-alt"
                style={styles.icon7}
              ></FontAwesomeIcon>
              <View style={styles.withdrewToWalletColumn}>
                <Text style={styles.withdrewToWallet}>Withdrew to wallet</Text>
                <Text style={styles.dateWithdrewToWallet}>21 March 2023 | 23:18</Text>
              </View>
              <Text style={styles.balanceWithdrewToWallet}>- $8.00</Text>
            </View>
          </View>
        </TouchableOpacity>

        {showContent && 

          <TouchableOpacity>
            <View style={styles.group8}>
              <View style={styles.icon8Row}>
                <FontAwesomeIcon
                  name="credit-card"
                  style={styles.icon8}
                ></FontAwesomeIcon>
                <View style={styles.cardFunded1Column}>
                  <Text style={styles.cardFunded1}>Card funded</Text>
                  <Text style={styles.dateCardFunded1}>16 March 2023 | 22:18</Text>
                </View>
                <Text style={styles.balanceCardFunded1}>+ $5.00</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: "4%",
  },
  icon: {
    top: 20,
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  icon2: {
    top: 20,
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    marginLeft: 290
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 3,
    marginRight: 20
  },
  group9: {
    width: 353,
    height: 220,
    marginTop: 57,
    marginLeft: 11
  },
  cardRedDetails: {
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
  },
  titleCard1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 20,
    marginLeft: 18
  },
  typePinkVirtualCard1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 5,
    marginLeft: 18
  },
  dollarBalance1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 3
  },
  iconHide: {
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
    marginLeft: 18,
    marginRight: 233
  },
  balance1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  visa1: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 270,
    marginTop: 6,
  },
  balance1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 18,
    marginRight: 24
  },
  iconShowDetails: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  showDetails: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    marginTop: 7
  },
  groupFundCard: {
    width: 79,
    height: 61,
    marginLeft: 55
  },
  iconFundCard: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginLeft: 24
  },
  fundCard: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    marginTop: 7,
    marginLeft: 22,
  },
  groupWithdraw: {
    width: 50,
    height: 61,
    marginLeft: 72
  },
  iconWithdraw: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  withdraw: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    marginTop: 9,
  },
  groupRowTransaction: {
    height: 50,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 50,
    marginRight: 40
  },
  groupTransaction: {
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 12
  },
  transactionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 345,
  },
  transactions: {
    fontamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    width: 94,
  },
  seeAll: {
    flexDirection: "row",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 41,
    height: 17
  },
  cardFundedTransaction: {
    width: 143,
    height: 34,
    marginTop: 45,
    marginLeft: 10
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 8
  },
  cardFunded: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 2
  },
  datecardFunded: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: 4
  },
  cardFundedColumn: {
    width: 120,
    marginLeft: 10,
    marginTop: 1
  },
  cardFundedBalance: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 150
  },
  icon6Row: {
    height: 35,
    flexDirection: "row",
    marginTop: -1,
    marginRight: -206
  },
  group7: {
    width: 158,
    height: 34,
    marginTop: 36,
    marginLeft: 12
  },
  icon7: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 11
  },
  withdrewToWallet: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 1
  },
 dateWithdrewToWallet: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: 4
  },
  withdrewToWalletColumn: {
    width: 130,
    marginLeft: 10,
    marginTop: 1
  },
  balanceWithdrewToWallet: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    marginLeft: 136
  },
  icon7Row: {
    height: 42,
    flexDirection: "row",
    marginTop: -8,
    marginRight: -191
  },
  group8: {
    width: 157,
    height: 34,
    marginTop: 33,
    marginLeft: 12
  },
  icon8: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 8
  },
  cardFunded1: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 2
  },
  dateCardFunded1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: 4
  },
  cardFunded1Column: {
    width: 130,
    marginLeft: 10,
    marginTop: 1
  },
  balanceCardFunded1: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 150
  },
  icon8Row: {
    height: 37,
    flexDirection: "row",
    marginTop: -3,
    marginRight: -194
  }
});

export default DetailsCard;
