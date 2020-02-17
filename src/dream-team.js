module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)) {
    return false;
  }

  let name = members.reduce((string, item) => {
    if(typeof item === 'string') {
      let letter = item.trim();
      string.push(letter[0].toUpperCase())
    }
    return string;
  }, []);

  return name.sort().join('');
};