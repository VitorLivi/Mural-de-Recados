
import { navigation } from './messageConstants'

export const navigationMapper = {
  [navigation.TODAS]: {
    name: 'TODAS',
    filter: (messages) => {
      return messages
    }
  },
  [navigation.PUBLICAS]: {
    name: 'PÚBLICAS',
    filter: (messages) => {
      const newArray = []

      for (let i = 0; i < messages.length; i++) {
        const currentMessage = messages[i]
        if (!currentMessage.Private) {
          newArray.push(currentMessage)
        }
      }

      return newArray
    }
  },
  [navigation.INTERNAS]: {
    name: 'INTERNAS',
    filter: (messages) => {
      const newArray = []

      for (let i = 0; i < messages.length; i++) {
        const currentMessage = messages[i]
        if (currentMessage.Private) {
          newArray.push(currentMessage)
        }
      }

      return newArray
    }
  }
}

export default navigationMapper
