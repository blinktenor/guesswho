// const CharacterNames = ['Alex', 'Alfred', 'Anita', 'Anne', 'Bernard', 'Bill', 'Charles', 'Claire', 'David', 'Eric', 'Frans', 'George', 'Herman', 'Joe', 'Maria', 'Max', 'Paul', 'Peter', 'Phillip', 'Richard', 'Robert', 'Sam', 'Susan', 'Tom'];

const Pictures = {
  'Connie': '/faces/connie.jpg',
  'Vivian': '/faces/vivian.jpg',
  'Awe': '/faces/awe.jpg',
  'Kate': '/faces/kate.jpg',
  'Mary-Anne': '/faces/maryanne.jpg',
  'Chemda': '/faces/chemda.jpg',
  'Janelle': '/faces/janelle.jpg',
  'Pam': '/faces/pam.jpg',
  'Tangi': '/faces/tangi.jpg',
  'Susan': '/faces/susan.jpg',
  'Amanda': '/faces/amanda.jpg',
  'Danielle': '/faces/danielle.jpg',
  'Jeff': '/faces/jeff.jpg',
  'Tim': '/faces/tim.jpg',
  'Ying': '/faces/ying.jpg',
  'Garret': '/faces/garret.jpg',
  'Henry': '/faces/henry.jpg',
  'Pat': '/faces/pat.jpg',
  'Alfred': '/faces/alfred.jpg',
  'Jason': '/faces/jason.jpg',
  'Michael': '/faces/michael.jpg',
  'Gregg': '/faces/gregg.jpg',
  'Jordan': '/faces/jordan.jpg',
  'Winston': '/faces/winston.jpg',
}

const CharacterNames = Object.keys(Pictures).map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const StartingBoard = {};
CharacterNames.forEach((name) => {
  StartingBoard[name] = false;
});

export { CharacterNames, Pictures, StartingBoard };