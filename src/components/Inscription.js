import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import DatePicker from 'react-native-datepicker'

export default class Inscription extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Veuillez saisir tous les champs.',
      error: false,
      name: '',
      surname: '',
      mail: '',
      password: '',
      passwordConfirm: '',
      date: new Date(),
      address: '',
      city: '',
      zip: ''
    }
  }

  handleForm = () => {
    if (
      this.state.name == '' ||
      this.state.surname == '' ||
      this.state.mail == '' ||
      this.state.password == '' ||
      this.state.passwordConfirm == '' ||
      this.state.address == '' ||
      this.state.city == '' ||
      this.state.zip == ''
    ) {
      this.setState({ error: true,
        message :'Veuillez saisir tous les champs.'})
      
    } else {

        if(this.state.password === this.state.passwordConfirm && this.state.password.length > 8  ){
            console.log(this.state.name)
            console.log(this.state.surname)
            console.log(this.state.mail)
            console.log(this.state.password)
            console.log(this.state.passwordConfirm)
            console.log(this.state.address)
            console.log(this.state.city)
            console.log(this.state.zip)
        }else{
            this.setState({ error: true,
                message :'les mots de passes doivent être identiques et doivent faire plus de 8 caractères.'})

        }
      
    }
  }

  render () {
    console.log('state :' + this.state.date)
    //Limit date of day
    var a = new Date()
    var today =
      ('0' + (a.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + a.getDate()).slice(-2) +
      '-' +
      a.getFullYear()
    console.log(today)

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.block_vertical}>
            <Text style={styles.title}>Informations : </Text>
          </View>
          <View style={styles.block_horizontal}>
            <TextInput
              name='name'
              style={
                this.state.error == false
                  ? styles.input_split
                  : styles.input_split_error
              }
              placeholder='Nom'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ name: value })}
            />
            <TextInput
              name='surname'
              style={
                this.state.error == false
                  ? styles.input_split
                  : styles.input_split_error
              }
              placeholder='Prénom'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ surname: value })}
            />
          </View>
          <View style={styles.block_vertical}>
            <TextInput
              name='mail'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              placeholder='Email'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ mail: value })}
            />
          </View>
          <View style={styles.block_vertical}>
            <Text style={styles.title}>Mot de passe : </Text>
            <TextInput
              name='password'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              secureTextEntry={true}
              placeholder='••••••••'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ password: value })}
            />
          </View>
          <View style={styles.block_vertical}>
            <TextInput
              name='passwordConfirm'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              secureTextEntry={true}
              placeholder='••••••••'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ passwordConfirm: value })}
            />
          </View>
          <View style={styles.block_vertical}>
            <Text style={styles.title}>Date de naissance : </Text>
            <DatePicker
              // defaultDate={new Date()}
              style={styles.datePicker}
              date={this.state.date}
              androidMode={'default'}
              mode='date'
              placeholder='select date'
              format='DD-MM-YYYY'
              minDate='01-01-1900'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={date => {
                this.setState({ date: date })
              }}
            />
          </View>
          <View style={styles.block_vertical}>
            <Text style={styles.title}>Adresse : </Text>
            <TextInput
              name='address'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              placeholder='Rue'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ address: value })}
            />
          </View>
          <View style={styles.block_vertical}>
            <TextInput
              name='city'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              placeholder='Ville'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ city: value })}
            />
          </View>
          <View style={styles.block_vertical}>
            <TextInput
              name='zip'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              keyboardType='numeric'
              placeholder='Code postale'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ zip: value })}
            />
          </View>
          <Text style={styles.titleError}>
            {this.state.error == true ? this.state.message : ''}
          </Text>
          <TouchableOpacity
            style={styles.buttonForm}
            activeOpacity={0.5}
            onPress={() => this.handleForm()}
          >
            <Text style={styles.textButton}> S'inscrire </Text>
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
  block_vertical: {
    marginBottom: 10
  },
  block_horizontal: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 46
  },
  title: {
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 18
  },
  titleError: {
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red'
  },
  input: {
    paddingLeft: 10,
    borderRadius: 8,
    height: 36,
    borderColor: '#65C5F0',
    fontSize: 16,
    borderWidth: 1.4
  },

  input_error: {

    paddingLeft: 10,
    borderRadius: 8,
    height: 36,
    borderColor: 'red',
    fontSize: 16,
    borderWidth: 1.4

  },
  input_split: {
    paddingLeft: 10,
    borderRadius: 8,
    marginRight: 6,
    width: '49%',
    height: 36,
    borderColor: '#65C5F0',
    fontSize: 16,
    borderWidth: 1.4
  },
  input_split_error: {
    paddingLeft: 10,
    borderRadius: 8,
    marginRight: 6,
    width: '49%',
    height: 36,
    borderColor: 'red',
    fontSize: 16,
    borderWidth: 1.4

  },
  buttonForm: {
    marginTop: 4,
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
  },
  datePicker: {
    width: '100%',
    borderTopColor: '#65C5F0',
    borderBottomColor: '#65C5F0',
    borderWidth: 0
  }
})
