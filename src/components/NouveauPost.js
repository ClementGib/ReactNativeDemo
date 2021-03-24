import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { addPost } from '../store/actions'

class NouveauPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      error: false,
      author: '',
      title: '',
      content: '',
      origin: '',
      created_at: '',
      image: ''
    }
  }

  handleForm = () => {
    // console.log(this.state)
    if (
      this.state.title == '' ||
      this.state.author == '' ||
      this.state.content == '' ||
      this.state.origin == ''
    ) {
      this.setState({
        error: true,
        message: 'Veuillez saisir tous les champs obligatoires.'
      })
    } else {
      if (
        this.state.title.length >= 8 ||
        this.state.author.length >= 3 ||
        this.state.origin.length >= 5 ||
        this.state.content.length >= 30
      ) {
        const newPost = {
          id: 0,
          author: this.state.author,
          title: this.state.title,
          content: this.state.content,
          lovelts: 0,
          origin: this.state.origin,
          created_at: new Date().toJSON(),
          image: this.state.image
        }

        this.props.addPost(newPost)

      } else {
        this.setState({
          error: true,
          message:
            'Veuillez saisir tous les champs obligatoires en respectant la taille demandé.'
        })
      }
    }
  }

  render () {
    return (
      <View>
        <View style={styles.form}>
          <View style={styles.verticalText}>
            <Text style={styles.title}> Titre</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <View style={styles.block_vertical}>
            <TextInput
              name='title'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              placeholder='Titre du poste'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ title: value })}
            />
            <Text style={styles.info}>
              Veuillez saisir au minimum 8 caractères
            </Text>
          </View>

          <View style={styles.block_vertical}>
            <View style={styles.verticalText}>
              <Text style={styles.title}>Auteur </Text>
              <Text style={styles.required}>*</Text>
            </View>
            <TextInput
              name='author'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              placeholder="Nom de l'auteur"
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ author: value })}
            />
            <Text style={styles.info}>
              Veuillez saisir au minimum 3 caractères
            </Text>
          </View>

          <View style={styles.block_vertical}>
            <View style={styles.verticalText}>
              <Text style={styles.title}>Location </Text>
              <Text style={styles.required}>*</Text>
            </View>
            <TextInput
              name='origin'
              style={
                this.state.error == false ? styles.input : styles.input_error
              }
              placeholder='Nom de la ville'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ origin: value })}
            />
            <Text style={styles.info}>
              Veuillez saisir au minimum 5 caractères
            </Text>
          </View>

          <View style={styles.block_vertical}>
            <View style={styles.verticalText}>
              <Text style={styles.title}>Contenu </Text>
              <Text style={styles.required}>*</Text>
            </View>
            <TextInput
              name='content'
              multiline={true}
              numberOfLines={4}
              returnKeyType='done'
              blurOnSubmit={true}
              onSubmitEditing={() => {
                Keyboard.dismiss()
              }}
              style={
                this.state.error == false
                  ? styles.inputContent
                  : styles.inputContent_error
              }
              placeholder='...'
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ content: value })}
            />
            <Text style={styles.info}>
              Veuillez saisir au minimum 30 caractères
            </Text>
          </View>

          <View style={styles.block_vertical}>
            <Text style={styles.title}>Image</Text>
            <TextInput
              name='image'
              style={styles.input}
              placeholder="Nom de l'image"
              underlineColorAndroid='transparent'
              onChangeText={value => this.setState({ image: value })}
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
            <Text style={styles.textButton}> Ajouter </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  form: {
    marginVertical: 12,
    marginLeft: 8,
    marginRight: 8
  },
  block_vertical: {
    marginBottom: 12
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
  required: {
    color: 'red',
    fontSize: 16
  },
  verticalText: {
    flexDirection: 'row'
  },
  input: {
    paddingLeft: 10,
    borderRadius: 8,
    height: 40,
    borderColor: '#65C5F0',
    fontSize: 16,
    borderWidth: 1.4
  },

  input_error: {
    paddingLeft: 10,
    borderRadius: 8,
    height: 40,
    borderColor: 'red',
    fontSize: 16,
    borderWidth: 1.4
  },
  inputContent: {
    paddingLeft: 10,
    borderRadius: 8,
    height: 120,
    borderColor: '#65C5F0',
    fontSize: 18,
    borderWidth: 1.4,
    textAlignVertical: 'top'
  },
  inputContent_error: {
    paddingLeft: 10,
    borderRadius: 8,
    height: 120,
    borderColor: 'red',
    fontSize: 18,
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
  info: {
    marginLeft: 10,
    color: 'grey'
  }
})

export default connect(null, { addPost })(NouveauPost)