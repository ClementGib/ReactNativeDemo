import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import RenderIMC from './RenderIMC'

export default class CalculIMC extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: [
        'saisissez le nom. \n',
        'saisissez la taille. \n',
        'saisissez le poids. \n'
      ],

      name: '',
      height: 0,
      weight: 0,
      imc: 0,
    }
  }

  handleCalculate = () => {
    let newErrors = []
    let { name, height, weight } = this.state

    if (name === '') {
      newErrors.push('saisissez le nom. \n')
      console.log(newErrors)
    }

    if (height === '') {
      newErrors.push('saisissez la taille. \n')
      console.log(newErrors)
    }

    if (weight === '') {
      newErrors.push('saisissez le poids. \n')
      console.log(newErrors)
    }

    //transform to adapted float
    height /= 100
    try {
      this.setState(
        {
          errors: newErrors
        },
        () => {
          if (this.state.errors.length == 0) {
            this.setState({
              imc: Number(weight / Math.pow(height, 2)),
            })
          }
        }
      )
    } catch (err) {
      this.setState({
        errors: new Array(err)
      })
    }
  }


  render () {
    
     var errors = this.state.errors;
     var  name = this.state.name;
     var  imc = this.state.imc;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.block}>
            <Text style={styles.title}>Nom : </Text>
            <TextInput
              name='Nom'
              style={styles.input}
              placeholder='Nom'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ name: value })}
            />
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Taille (cm) : </Text>
            <TextInput
              name='Taille'
              style={styles.input}
              placeholder='Taille'
              keyboardType='numeric'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ height: Number(value) })}
            />
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Poids (kg) : </Text>
            <TextInput
              name='Poids'
              style={styles.input}
              placeholder='Poids'
              keyboardType='numeric'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ weight: Number(value) })}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonForm}
            activeOpacity={0.5}
            onPress={() => this.handleCalculate()}
          >
            <Text style={styles.textButton}> Calculer IMC </Text>
          </TouchableOpacity>
        </View>
        <RenderIMC  errors={errors} name={name} imc={imc} update={this.state.update} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
 
  },
  form: {
    marginVertical: 12,
    marginLeft: 8,
    marginRight: 8
  },
  block: {
    marginBottom: 12
  },
  title: {
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 18
  },
  input: {
    paddingLeft: 10,
    borderRadius: 8,
    height: 40,
    borderColor: '#65C5F0',
    fontSize: 16,
    borderWidth: 1.4
  },
  buttonForm: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    height: 60,
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
