import * as React from 'react'
import { IconButton } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
//reactnavigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

//tools
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

//component
import Information from './Information'

import IMC from './CalculIMC'
import Devise from './ConvertisseurDevise'
import Inscription from './Inscription'
import ListPost from './ListPost'
import Nouveau from './NouveauPost'

//DEFINITION OF ELEMENTS
const InfoStack = createStackNavigator()
function InfoStackScreen () {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen
        name='Information'
        component={Information}
        options={{
          title: 'Information',
          tabBarLabel: 'Information'
        }}
      />
    </InfoStack.Navigator>
  )
}

const NouveauStack = createStackNavigator()
function NouveauStackScreen () {
  return (
    <NouveauStack.Navigator>
      <NouveauStack.Screen
        name='Nouveau'
        component={Nouveau}
        options={{
          title: 'Nouveau poste',
          tabBarLabel: 'Nouveau poste'
        }}
      />
    </NouveauStack.Navigator>
  )
}

const BlogStack = createStackNavigator()
function BlogStackScreen ({ navigation }) {
  return (
    <BlogStack.Navigator>
      <BlogStack.Screen
        name='Blog'
        component={ListPost}
        options={{
          headerRight: () => (
            <View style={styles.header}>
              <IconButton
                icon='plus-circle'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Nouveau')}
              />
              <IconButton
                icon='information'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Information')}
              />
            </View>
          )
        }}
      />
    </BlogStack.Navigator>
  )
}

const IMCStack = createStackNavigator()
function IMCStackScreen ({ navigation }) {
  return (
    <IMCStack.Navigator>
      <IMCStack.Screen
        name='IMC'
        component={IMC}
        options={{
          headerRight: () => (
            <View style={styles.header}>
              <IconButton
                icon='plus-circle'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Nouveau')}
              />
              <IconButton
                icon='information'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Information')}
              />
            </View>
          )
        }}
      />
    </IMCStack.Navigator>
  )
}

const DeviseStack = createStackNavigator()
function DeviseStackScreen ({ navigation }) {
  return (
    <DeviseStack.Navigator>
      <DeviseStack.Screen
        name='Devise'
        component={Devise}
        options={{
          headerRight: () => (
            <View style={styles.header}>
              <IconButton
                icon='plus-circle'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Nouveau')}
              />
              <IconButton
                icon='information'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Information')}
              />
            </View>
          )
        }}
      />
    </DeviseStack.Navigator>
  )
}

const InscriptionStack = createStackNavigator()
function InscriptionStackScreen ({ navigation }) {
  return (
    <InscriptionStack.Navigator>
      <InscriptionStack.Screen
        name='Inscription'
        component={Inscription}
        options={{
          headerRight: () => (
            <View style={styles.header}>
              <IconButton
                icon='plus-circle'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Nouveau')}
              />
              <IconButton
                icon='information'
                color={'#65C5F0'}
                size={28}
                onPress={() => navigation.navigate('Information')}
              />
            </View>
          )
        }}
      />
    </InscriptionStack.Navigator>
  )
}

//MAIN WITH TABS AND SCREENS
const Tab = createBottomTabNavigator()
function HomeTabs () {
  return (
    <Tab.Navigator
      initialRouteName='Blog'
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        showLabel: false,
        showIcon: true,

        style: {
          backgroundColor: '#65C5F0'
        }
      }}
    >
      <Tab.Screen
        name='Blog'
        component={BlogStackScreen}
        options={{
          title: 'Blog',
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='newspaper-variant-outline'
              size={30}
              color={color}
            />
          )
        }}
      />

      <Tab.Screen
        name='IMC'
        component={IMCStackScreen}
        options={{
          title: 'IMC',
          tabBarLabel: 'IMC',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='weight-hanging' size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Convertisseur'
        component={DeviseStackScreen}
        options={{
          title: 'Devise',
          tabBarLabel: 'Devise',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='usd' size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Inscription'
        component={InscriptionStackScreen}
        options={{
          title: 'Inscription',
          tabBarLabel: 'Inscription',
          tabBarIcon: ({ color }) => (
            <Entypo name='add-user' size={26} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

//APP
const RootStack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='Home'
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='Information'
          component={InfoStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='Nouveau'
          component={NouveauStackScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
