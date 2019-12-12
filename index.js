module.exports = (value, special, charactersLimit=0) => {

  // no inputs
  if (!value) {
    return;
  }

  // charactersLimit should be greater than 0
  if (charactersLimit < 1) {
    throw new Error('Characters limit should be greater than 0');
  }

  // build regex
  const regex = new RegExp(`.{1,${charactersLimit}}`, 'g');

  // add input special character at every xth character position
  value = value.split(special).join('');
  const matches = value.match(regex);
  if (!matches || matches.length === 0) {
    return value;
  }

  return value = matches.join(special);
};
