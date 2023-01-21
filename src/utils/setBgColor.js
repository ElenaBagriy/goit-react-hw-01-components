// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.

function setBgColor() {
  const randomColor =
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase();
  return randomColor;
}

export default setBgColor;
