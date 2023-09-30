// Если мы уверены в том, что этот объект нигде больше не будет использоваться,
// то можно не прописывать для него interface или type, а привязаться к нему через typeof
const dataFromControl = {
  water: 200,
  el: 300,
};

function checkReadings2(data: typeof dataFromControl): boolean {
  // data: typeof dataFromControl = (parameter) data: {water: number; el: number;}
  const dataFromUser = {
    water: 200,
    el: 300,
  };

  if (dataFromUser.el !== data.el && dataFromUser.water !== data.water)
    return false;

  return true;
}

const PI = 3.14;
let PIClone = typeof PI; // ? ==== PIClone почему-то не наследует тип 3.14 ==== ?
