import isEmpty from 'lodash/isEmpty'
import validator from 'validator'

export default function validation(data){

  var errors = {}

  if(validator.isEmpty(data.firstName)){
    errors.firstName = 'required'
  }

  if(validator.isEmpty(data.lastName)){
    errors.lastName = 'required'
  }

  if(validator.isEmpty(data.username)){
    errors.username = 'required'
  }

  if(validator.isEmpty(data.password)){
    errors.password = 'required'
  }
  else {
    if(validator.isEmpty(data.confirmPass)){
      errors.confirmPass = 'required'
    }
    else if (data.password !== data.confirmPass) {
      errors.confirmPass = 'password not match'
    }
  }





  return {
    errors,
    isValid: isEmpty(errors)
  }


}
