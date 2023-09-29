function findFirstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
