const messageElem = document.querySelector('#randomisedMessage'),
messages = [
  'Needs. More. Dakka.',
  'Twas a silly place anyway, best not go there.',
  'At least I\'m not a teapot.',
  'Ravioli, ravioli, that page doesn\'t exist-ioli.',
  'This page is trying its best.',
  'Roses are red. Violets are blue. I wish I could\'ve found that page for you.',
  '¯\\_(ツ)_/¯'
]

messageElem.innerHTML = messages[RNGesus(0, messages.length - 1)];

function RNGesus(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
