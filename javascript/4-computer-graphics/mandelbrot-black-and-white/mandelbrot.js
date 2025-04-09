// импорт функции createCanvas библиотеки canvas. Она в дальнейшем позволит нам содать холст
// https://www.npmjs.com/package/canvas
const { createCanvas } = require('canvas');

//подключаем модуль файловой системы
//https://nodejs.org/api/fs.html
const fs = require('fs');

const width = 900;
const height = 900;

xmin = -2;
xmax = 1;
ymin = -1.5;
ymax = 1.5;

const maxIter = 100;

// проверка принадлежит ли точка (cx, cy) множеству мандельброта
// 
function mandelbrot(cx, cy){
    let x = 0, y = 0;
    let i = 0;

    while (x*x + y*y <= 4 && i < maxIter){
        // пока квадрат |z| <= 4 (по опр.) И итерации не привысили maxIter - продолжаем цикл
        // проверка модуля <=2 (=> квадрат = 4) определяет точка остается? или убегает?
 
        // раскладываем формулу  z = z^2 + c на части
        // данная трансформация перемещает точку в пространстве.
        // если она сидьно растет - точка убегает.
        const x_new = x*x - y*y + cx;
        y = 2*x*y + cy;
        x = x_new;

        i++
    }

    return i;
}


// создается холст canvas
// https://www.npmjs.com/package/canvas
// рисуем не на экране а в памяти. в виде картинки которую потом созраним как файл
const canvas = createCanvas(width, height);

// получение 2d контекста. типо кисть
const ctx = canvas.getContext('2d');

// создание пустой структуры для зранения картинки попиксельно
const imgData = ctx.createImageData(width, height)
// внутри imgData - массив для каждого пикселя - 4 числа: R, G, B, A

for (let px = 0; px < width; px++){
    for (let py = 0; py < width; py++) {
        // преобразование координаты пикселя(px, py) в комплексные числа
        const cx = xmin + (xmax - xmin) * px / width;
        const cy = ymin + (ymax - ymin) * py / height;

        // проверка, сколько итераций потребовалось чтобы точка "убежала"
        // по факту: вызываем ф-цию mandelbrot и получаем результат(число)
        const iter = mandelbrot(cx, cy);

        // вычисление яркости цвета, если точка не убежала - делаем черным
        // иначе - чем быстрее точка убежала - тем светлее.
        // => получаем градацию серого
        const color = iter === maxIter ? 0 : (255 * iter / maxIter);

        // каждому пикселю соответствует 4 эл. в массиве
        // красный, зеленый, синий, альфа

        // вычисляем позицию
        const idx = (py * width + px) * 4;

        // устанавливаем цвет для текущего пикселя.
        imgData.data[idx] = color; // r
        imgData.data[idx + 1] = color; // g
        imgData.data[idx + 2] = color; // b
        imgData.data[idx + 3] = 255; // alpha
    }
}

//"Кладем" на холст
ctx.putImageData(imgData, 0, 0);

// https://medium.com/@shaileshb.0720/node-js-readstream-and-writestream-explained-a-beginners-journey-6b76ffcd804b
const out = fs.createWriteStream(__dirname + '/mandelbrot1.png')
const stream = canvas.createPNGStream();
stream.pipe(out); // забей пока

out.on('finish', () => console.log('фрактал мандельброта сохранен в файл mandelbrot1.png'))

