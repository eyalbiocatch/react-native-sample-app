import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  BCChangeContext,
  BCUpdateCustomerSessionID,
} from '../BCSDKClientManager';
import {makeid} from '../utils/Helper';

const DashboardScreen = props => {
  const {navigation} = props;
  const logoutUser = () => {
    try {
      const csid = makeid(32);
      console.log('new csid:' + csid);
      const res = BCUpdateCustomerSessionID(csid);
      console.log(`Update CSID: ${JSON.stringify(res)}`);
      navigation.navigate('Login');
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  try {
    const res = BCChangeContext('DASHBOARD');
  } catch (error) {
    console.log(`error: ${error}`);
  }
  return (
    <SafeAreaView style={style.screen}>
      <View style={style.screen}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}></View>
        <TouchableOpacity
          style={style.mainButtonContainer}
          onPress={() => logoutUser()}>
          <Text style={style.mainButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  mainButtonContainer: {
    backgroundColor: '#4793CF',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 64,
    margin: 20,
    marginBottom: 32,
  },
  mainButtonText: {
    fontSize: 20,
    color: '#fff',
  },

  textView: {
    fontSize: 18,
  },
  buttonContainer: {
    padding: 10,
    paddingHorizontal: 64,
    marginBottom: 32,
    color: '#4793CF',
  },
});

export default DashboardScreen;
