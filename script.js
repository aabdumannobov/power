// Возведения в степень

do{num = +prompt('Введите число')} 
while (isNaN(num) || num == 0 || num < 0 )
do{power = +prompt('Введите степень ')}
 while(isNaN(power) || power == 0 || power < 0 )
  let answer = 1;
for( let i = 0; i < power; i++){
 answer = num * answer;
}
alert('Ответ = ' +  answer); 
