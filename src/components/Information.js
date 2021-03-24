import React, { Component } from 'react'
//TouchableOpacity for custom button
import { View, Text, StyleSheet } from 'react-native'

//puce liste
import Unorderedlist from 'react-native-unordered-list'


export default class Information extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'Développeur Full-stack',
      informations: [
        'Nom : Gibert Clément',
        'Ville : Paris',
        'Email : c.gibertpro@gmail.com',
        'Technologies : Java & JavaScript'
      ],
      more:
        "Passionné par le développement logiciel et le développement mobile, je souhaite produire de nombreuses applications à l'aide de React Native."
    }
  }

  render () {
    const infos = this.state.informations
    return (
      <View style={styles.container}>
        <View style={styles.informations}>
          <Text style={styles.title}> {this.state.title} </Text>
          <View style={styles.details}>
            {infos.map((info, id) => (
              <Unorderedlist key={id} bulletUnicode={0x2022} style={styles.list}>
                <Text key={id} style={styles.content}>
                  {info}
                </Text>
              </Unorderedlist>
            ))}
          </View>
          <Text style={styles.more}> {this.state.more} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  informations: {
    height:'97%',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 8,
    marginBottom: 6,
    backgroundColor: '#DEDFE3',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#CDCFCE',


  },
  title: {
    paddingVertical: 8,
    color: '#4F96B5',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  details: {
    paddingHorizontal: 10,
    height: 130,
    flex:1,
    justifyContent:'space-around'
  },
  list: {
    fontSize: 22 ,
  },
  content: {
    fontSize: 22 ,
    textAlign: 'left'
  },
  more: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 26,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  features: {

  },
  buttonFeature: {

    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#65C5F0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textButton: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
