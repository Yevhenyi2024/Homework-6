function camelCase(str, separator) {
  const parts = str.split(separator);
  let camelCased = parts[0].toLowerCase();
  for (let i = 1; i < parts.length; i++) {
      let word = parts[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      camelCased += capitalizedWord;
  }
  return camelCased;
}
const result = camelCase("hello_world_example", "_");
console.log(result);