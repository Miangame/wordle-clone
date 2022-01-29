import { WORD_LENGTH } from '../constants/words'
import { words } from '../data/words'

class WordsService {
  public static getRandomWord() {
    const validWords = words.filter((word) => word.length === WORD_LENGTH)

    return validWords[Math.floor(Math.random() * validWords.length)]
      .normalize('NFD')
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
  }
}

export default WordsService
