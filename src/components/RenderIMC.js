import React, { Component } from 'react'
import { Text, Image, View,StyleSheet } from 'react-native'


export default class RenderIMC extends Component {
    constructor (props) {
        super(props)
        this.state = {
            errors: props.errors,
            name: props.name,
            imc: props.imc,
            corpulence : () => {
                const imc = this.state.imc;
                if( imc != 0 && imc<18.5){
                    return('S')
                }else if(imc> 18.5 && imc <25){
                    return('M')
                }else if(imc>25 && imc <30){
                    return('L')
                }else if(imc>30 ){
                    return('XL')
                }else{
                    return('')
                }
            }
      }
    }

    corpulanceMessage = (corpulence) => {
        switch (corpulence){
            case 'S':
                return "Vous êtes en situation de maigreur.";

            case 'M':
                return "Vous avez une corpulence normale.";

            case 'L':
                return "Vous êtes en surpoids.";

            case 'XL':
                return "Vous êtes obèse.";

            default:
                return ""
        } 
    }

    imageDisplay = (corpulence) => {
        switch (corpulence){
            case 'S':
                return <Image style={styles.img} source={require('../../assets/img/imc/slim.png')}/>

            case 'M':
                return <Image style={styles.img} source={require('../../assets/img/imc/medium.png')}/>

            case 'L':
                return <Image style={styles.img} source={require('../../assets/img/imc/large.png')}/>

            case 'XL':
                return <Image style={styles.img} source={require('../../assets/img/imc/extra-large.png')}/>

            default:
                return <Image style={styles.imgDefault} source={require('../../assets/img/imc/default.png')}/>
        } 
    }

    componentWillReceiveProps(nextProps){
        if(this.props.imc !== nextProps.imc || this.props.name !== nextProps.name  ){
            this.setState({
                errors: nextProps.errors,
                name: nextProps.name,
                imc: nextProps.imc    
            })
        }
    }

  render () {

    return (
      <View style={styles.result}>
        <Text style={this.state.errors.length > 0 ? styles.titleError : styles.title}>
            {this.state.errors.length > 0 ? this.state.errors : this.state.name +" :"}
        </Text>
        <Text style={styles.imc}>
        {this.state.imc == 0 ? '' :
         'Votre IMC  (indice de masse corporelle) est exactement : ' +this.state.imc.toFixed(2) +'\n'}
        </Text>
          <Text style={this.state.corpulence() == 'M' ? styles.detailGood : styles.detailBad}>
          {this.state.imc == 0 ? '' : this.corpulanceMessage(this.state.corpulence())}
          </Text>
          <View style={styles.container}>
          {this.imageDisplay(this.state.corpulence())}
          </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  result: {
    height: '45%',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 4,
    backgroundColor: '#DEDFE3',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#CDCFCE'
  },
  title: {
    fontSize:22,
    marginTop:6,
    marginBottom:6,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  titleError: {
    fontSize:22,
    marginTop:6,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red'
  },
  imc: {
    fontSize:18,
  },
  detailGood:{
    fontSize:18,
    color:'green',
    textAlign: 'center',
},
detailBad:{
    fontSize:18,
    color:'red',
    textAlign: 'center',
},
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignSelf: 'center'
},
  img:{
    width: 40,
    height: 120,
    resizeMode: 'stretch'
  },
  imgDefault:{
    width: 80,
    height: 80,
    resizeMode: 'stretch'

  }
})
