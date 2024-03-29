import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  OuterContainer: {
    alignItems: 'center',
    marginTop: 18,
  },
  buttonDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
  },
  tochableButtons: {
    height: 50,
    width: 200,
    backgroundColor: '#3256a8',
    marginTop: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonColor: {
    color: 'white',
  },
  subscriptionButton: {
    height: 50,
    width: 200,
    backgroundColor: '#e6e6e6',
    marginTop: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscriptionButtonColor: {
    color: 'black',
  },
  imageContainerDiv: {
    marginTop: 50,
    flexDirection: 'column',
  },
  image: {
    borderRadius: 190,
    height: 150,
    width: 150,
  },
  emailDiv: {
    width: '80%',
    padding: 10,
    alignItems: 'center',
  },
  emailText: {
    fontWeight: 'bold',
    color: 'black',
    
  },
  formData: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  formDataValues: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'grey',
    marginTop: 10,
  },
  formDataValues2: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  formDataValues3: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'grey',
  },
  submitButton:{
    height: 60,
    width: 390,
    backgroundColor: '#3256a8',
    marginTop: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText:{
    color: 'white', fontSize: 20
  },
  SeparatorStyles:{
    height: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#ddd',
  }
});
export default styles;
