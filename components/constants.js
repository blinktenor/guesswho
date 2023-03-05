const CharacterNames = ['Alex', 'Alfred', 'Anita', 'Anne', 'Bernard', 'Bill', 'Charles', 'Claire', 'David', 'Eric', 'Frans', 'George', 'Herman', 'Joe', 'Maria', 'Max', 'Paul', 'Peter', 'Phillip', 'Richard', 'Robert', 'Sam', 'Susan', 'Tom'];

const StartingBoard = {};
CharacterNames.forEach((name) => {
  StartingBoard[name] = false;
});
export { CharacterNames, StartingBoard };