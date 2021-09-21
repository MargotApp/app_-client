import AWS from 'aws-sdk'
import { util } from 'aws-sdk/dist/aws-sdk-react-native';
import { CognitoIdentityServiceProvider } from 'aws-sdk/dist/aws-sdk-react-native';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from '../../../lib/aws-cognito-identity'

const AWS_COGNITO = {
  UserPoolId: 'us-east-1_0JGYkFsP5',
  ClientId: '4sdi31n1erhtkgs7mjjub4bpg0'
}

export const SignInUser = ({emailOrPhone, password, callback}) => {
  const userPool = new CognitoUserPool(AWS_COGNITO)
  console.log(userPool)
  const authDetails = new AuthenticationDetails({
    Username: emailOrPhone,
    Password: password
  })

  const cognitoUser = new CognitoUser({
    Username: emailOrPhone,
    Pool: userPool
  })

  const start = new Date().getTime()
  cognitoUser.authenticateUser(authDetails, {
    onSuccess: (result) => {
      console.log('authenticateUser timey', new Date().getTime() - start)
      const jwt = parseJwt(result.getAccessToken().getJwtToken)
      console.log(jwt)
    },
    onFailure: (error) => {
      callback(error)
    }
  })
}

