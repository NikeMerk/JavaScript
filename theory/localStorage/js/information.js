
// ---- localStorage Работа с локальным хранилищем

// Методы localStorage:
// Сохранение Значения:
// localStorage.setItem('Ключ', Значение);
// --
//Получение значения:
// let value = localStorage.getItem('Ключ');
// --
//Удаление значения:
// localStorage.removeItem('Ключ');
// --
//Очистка всего хранилища:
// localStorage.clear();



// ---- С localStorage можно также работать как с обычным массивом:

//Сохранение значения:
// localStorage['Ключ'] = 'Значение';
// --
//Получение значения:
// let value = localStorage['Ключ'];
// --
//Удаление значения:
// delete localStorage['Ключ'];



// ---- Сохранение объектов/массивов/функций:

//Дан объект:
// let obj = {name: 'Иван', arr: [1, 2, 3]};

//Сериализуем его в '{"name": "Иван", "arr": [1, 2, 3]}';
// let json = JSON.stringify(obj);

//Запишем в localStorage с ключом obj:
// localStorage.setItem('obj', json);