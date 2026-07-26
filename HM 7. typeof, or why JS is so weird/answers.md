# Відповіді

| №   | Вираз                        | Моя гіпотеза | Реальний результат | Пояснення           |
| --- | ---------------------------- | ------------ | ------------------ | ------------------- |
| 1   | `typeof 42`                  | Number       | Number             | 42 це число         |
| 2   | `typeof 42n`                 | BigInt       | BigInt             | число з n велике    |
| 3   | `typeof 'hello'`             | string       | string             | слово це string     |
| 4   | `typeof true`                | boolean      | boolean            | true/false boolean  |
| 5   | `typeof undefined`           | undefined    | undefined          | undefined           |
| 6   | `typeof null`                | Object       | Object             | це особливість JS   |
| 7   | `typeof NaN`                 | Number       | Number             | Nun це також число  |
| 8   | `typeof Infinity`            | Number       | Number             | бесконечность число |
| 9   | `typeof Symbol('id')`        | Symbol       | Symbol             | Сам символ          |
| 10  | `typeof {}`                  | Object       | Object             | пустий Object       |
| 11  | `typeof []`                  | Object       | Object             | пустий массив       |
| 12  | `typeof [1, 2, 3]`           | Object       | Object             | масив це Object     |
| 13  | `typeof function() {}`       | Function     | Function           | функція             |
| 14  | `typeof (() => {})`          | Function     | Function           | стрілочна функція   |
| 15  | `typeof (2 + 2)`             | Number       | Number             | Num + Num = Num     |
| 16  | `typeof ('2' + 2)`           | String       | String             | плюс до строки      |
| 17  | `typeof ('foo' - 'bar')`     | String       | Number             | Результат NaN       |
| 18  | `let x; typeof x`            | undefined    | undefined          | Знач не присвоено   |
| 19  | `typeof nonExistentVariable` | undefined    | undefined          | Змінна не оголошена |
| 20  | `typeof typeof 42`           | String       | String             | Результат уже рядок |

## Підозрілі справи

### `typeof null`

Результат `"object"` виглядає як баг, тому що `null` означає відсутність значення, а не об’єкт.

---

### `typeof []`

Результат `"object"` дивує, тому що масив очікується як окремий тип.

Так можна використовувати `Array.isArray(value)`.

---

### `typeof [1, 2, 3]`

Заповнений масив також повертає `"object"`, тому `typeof` не відрізняє масив від звичайного об’єкта.

Використовувати `Array.isArray(value)`.

---

### `typeof function() {}`

Функція технічно є об’єктом, але `typeof` повертає `"function"`.

Функцію зручно перевіряти через `typeof`.

---

### `typeof (() => {})`

Стрілочна функція також повертає `"function"`, хоча функції належать до об’єктів.

---

### `typeof ('foo' - 'bar')`

Віднімання рядків дає `NaN`, але його тип — `"number"`.

---

### `typeof nonExistentVariable`

Неоголошена змінна не викликає помилку після `typeof`, а повертає `"undefined"`.

Перевіряти існування змінної перед її використанням.
