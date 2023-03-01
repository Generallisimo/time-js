// даем имя сразу опрделенному значению через >
const items = document.querySelectorAll(".countdown-item > h4")
const countdownElement = document.querySelector(".countdown")
// создаем точку отсчета год месяц день часы минуты секунды и добаляем получение в секундах
let countdownDate = new Date(2024, 01, 01, 10, 12, 00). getTime();
// создаем фун-ию которая будет вызываться каждый раз
function getDownCount(){
    // получаем настоящее время 
    const now = new Date().getTime();
    // получаем разницу
    const distance = countdownDate - now
    // создаем переменные в миллисекундах
    // 1c = 1000мс
    // 1м = 60с
    // 1ч = 60м
    // 1д = 24ч
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // получаем подсчет дней минут секунд
    let days = Math.floor(distance/oneDay);
    // для точного подсчета без остатка
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);;
    let seconds = Math.floor((distance % oneMinute) / 1000);
    // создаем массив с переменным получеными
    const values = [days, hours, minutes, seconds];
    // добавляем значение на страницу foreach выполняет возварт для каждого в массиве где item это значение в массиве а index - это его индекс
    items.forEach(function(item, index){
        item.textContent = values[index]; 
    });
    if(distance < 0){
        clearInterval(countdown);
        // все с помощью innerhtml очистится и будет то, что пропишем при окончание таймера
        countdownElement.innerHTML = "<h4 class='expired'>Время вышло!</h4>";
    }
}
// вызываем фун-ию каждую секунду с помощью интервала
let countdown = setInterval(getDownCount, 1000);
// сразу запускаем 
getDownCount();