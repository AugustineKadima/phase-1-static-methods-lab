class Formatter {
  //add static methods here
  static capitalize(s){
    return s.toUpperCase()
  }

  static titleize(s){
  
    let sWords = s.split(" ")
    let newS = ""
    for(let word in sWords){
      if(word != "the" && word != "a" && word != "an" && word != "of" && word != "and" 
      && word != "but" && word != "for" && word != "at" && word != "by" && word != "from"){
        newS += word[0].toUpperCase + word.slice(1).toLowerCase() + " "
      }else{
        newS += word.toLowerCase() + " "

      }
        
    }

    return newS.trim()
  }

  static sanitize(s){
    return s
  }
}