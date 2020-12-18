import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: "bold", borderBottomWidth: 2, borderColor: "black", marginBottom: 10}}>Main Desk</Text>
      
      <TouchableOpacity
      onPress={() => navigation.navigate('Products')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Products Manager</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Employees')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Employees Manager</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Orders')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Orders Manager</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const ProductsScreen = ({navigation}) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: "bold", borderBottomWidth: 2, borderColor: "black", marginBottom: 10}}>Products List</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('ProDetails')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Product 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('ProDetails')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Product 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const ProDetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: "bold", borderBottomWidth: 2, borderColor: "black", marginBottom: 10}}>Products Details</Text>

    </View>
  );
}

const EmployeesScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: "bold", borderBottomWidth: 2, borderColor: "black", marginBottom: 10}}>Employees List</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('EmpDetails')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Employee 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('EmpDetails')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Employee 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const EmpDetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: "bold", borderBottomWidth: 2, borderColor: "black", marginBottom: 10}}>Employees Screen</Text>
    </View>
  );
}

const OrdersScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: "bold", borderBottomWidth: 2, borderColor: "black", marginBottom: 10}}>Orders List</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('OrdDetails')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Order 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('OrdDetails')}
      >
        <View style={{justifyContent: "space-between" , backgroundColor: "black", width: "80%", alignSelf: "center", padding: 30, margin: 5, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Order 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const OrdDetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: "bold", borderBottomWidth: 2, borderColor: "black", marginBottom: 10}}>Orders Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={MainScreen} options={{title: 'Admin App of E-Commerce Site'}}/>
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="ProDetails" component={ProDetailsScreen} />
        <Stack.Screen name="Employees" component={EmployeesScreen} />
        <Stack.Screen name="EmpDetails" component={EmpDetailsScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="OrdDetails" component={OrdDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
