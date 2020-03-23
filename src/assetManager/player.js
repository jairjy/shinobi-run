/* eslint-disable no-alert */
import { Player, result } from '../constructor/constructor';

export default function newPlayer() {
  const results = JSON.parse(localStorage.getItem('result'));
  const player1Name = document.getElementById('player1name').value;
  if (results[0].user === '') {
    const player1 = Player(player1Name, 0);
    result.push(player1);
    window.localStorage.setItem('result', JSON.stringify(result));
  } else if (results[0].user !== player1Name) {
    result.splice(0, 1);
    const player1 = Player(player1Name, 0);
    result.push(player1);
    window.localStorage.setItem('result', JSON.stringify(result));
  } else {
    alert('User another name!');
  }
}
