import React, { Component } from 'react'
import axios from 'axios'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class ConvertisseurDevise extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dollar: 0,
      yuan: 0,
      euro: 0
    }
  }

  reset = async () => {
    try {
      await this.setState({
        dollar: 0,
        yuan: 0,
        euro: 0
      })
    } catch (err) {
      console.log(err)
    }
  }

  setDollar = async value => {
    try {
      if (!isNaN(value)) {
        await this.setState({
          dollar: Number(value),
          yuan: 0,
          euro: 0
        })
      } else {
        await this.setState({
          dollar: 0,
          yuan: 0,
          euro: 0
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  setYuan = async value => {
    try {
      if (!isNaN(value)) {
        await this.setState({
          dollar: 0,
          yuan: Number(value),
          euro: 0
        })
      } else {
        await this.setState({
          dollar: 0,
          yuan: 0,
          euro: 0
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  setEuro = async value => {
    try {
      if (!isNaN(value)) {
        await this.setState({
          dollar: 0,
          yuan: 0,
          euro: Number(value)
        })
      } else {
        await this.setState({
          dollar: 0,
          yuan: 0,
          euro: 0
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  getValues = async currency => {
    try {
      axios
        .get(`https://api.exchangeratesapi.io/latest?base=${currency}`)
        .then(res => {
          const element = res.data

          switch (currency) {
            case 'USD':
              this.setState({
                yuan: this.state.dollar * Number(element['rates']['CNY']),
                euro: this.state.dollar * Number(element['rates']['EUR'])
              })
              break

            case 'CNY':
              this.setState({
                dollar: this.state.yuan * Number(element['rates']['USD']),
                euro: this.state.yuan * Number(element['rates']['EUR'])
              })
              break

            case 'EUR':
              this.setState({
                dollar: this.state.euro * Number(element['rates']['USD']),
                yuan: this.state.euro * Number(element['rates']['CNY'])
              })
              break
          }

          console.log(element['rates']['USD'])

          console.log(element['rates']['USD'])
        })
    } catch (err) {}
  }

  handleCalculate = () => {
    var currency
    if (this.state.dollar > 0) {
      currency = 'USD'
    } else if (this.state.yuan > 0) {
      currency = 'CNY'
    } else if (this.state.euro > 0) {
      currency = 'EUR'
    } else {
      throw 'No value'
    }

    this.getValues(currency)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.block}>
            <Text style={styles.title}>Dollar ($) : </Text>
            <TextInput
              name='Dollar'
              style={styles.input}
              keyboardType='numeric'
              placeholder={'0'}
              value={this.state.dollar.toString()}
              underlineColorAndroid='transparent'
              onChangeText={value =>
                this.setDollar(value).then(() =>
                  console.log('dollar : ' + this.state.dollar)
                )
              }
              onEndEditing={() =>
                this.reset().then(() =>
                  console.log('dollar : ' + this.state.dollar)
                )
              }
            />
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Yuan (¥) : </Text>
            <TextInput
              name='Yuan'
              style={styles.input}
              keyboardType='numeric'
              placeholder={'0'}
              value={this.state.yuan}
              underlineColorAndroid='transparent'
              value={this.state.yuan.toString()}
              onChangeText={value =>
                this.setYuan(value).then(() =>
                  console.log('yuan : ' + this.state.yuan)
                )
              }
              onEndEditing={() =>
                this.reset().then(() =>
                  console.log('yuan : ' + this.state.yuan)
                )
              }
            />
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Euro (€) : </Text>
            <TextInput
              name='Euro'
              style={styles.input}
              keyboardType='numeric'
              placeholder={'0'}
              value={this.state.euro.toString()}
              underlineColorAndroid='transparent'
              onChangeText={value =>
                this.setEuro(value).then(() =>
                  console.log('euro : ' + this.state.euro)
                )
              }
              onEndEditing={() =>
                this.reset().then(() =>
                  console.log('Euro : ' + this.state.euro)
                )
              }
            />
          </View>
          <TouchableOpacity
            style={styles.buttonForm}
            activeOpacity={0.5}
            onPress={() => this.handleCalculate()}
          >
            <Text style={styles.textButton}> Convertir </Text>
          </TouchableOpacity>
        </View>
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
    height: 65,
    borderColor: '#65C5F0',
    fontSize: 24,
    borderWidth: 1.4
  },
  buttonForm: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    height: 80,
    backgroundColor: '#65C5F0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textButton: {
    color: '#000',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
