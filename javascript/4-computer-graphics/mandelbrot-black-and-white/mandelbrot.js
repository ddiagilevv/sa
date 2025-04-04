const { createCanvas } = require('canvas');
const fs = require('fs');

// Параметры изображения
const width = 800;
const height = 800;
const maxIter = 100;

// Комплексная область, которую мы отрисуем
const xmin = -2;
const xmax = 1;
const ymin = -1.5;
const ymax = 1.5;

// Функция проверки принадлежности к множеству Мандельброта
function mandelbrot(cx, cy) {
    let x = 0, y = 0;
    let iter = 0;
    while (x*x + y*y <= 4 && iter < maxIter) {
        const x_new = x*x - y*y + cx;
        y = 2*x*y + cy;
        x = x_new;
        iter++;
    }
    return iter;
}

// Создание изображения
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
const imgData = ctx.createImageData(width, height);

// Отрисовка множества
for (let px = 0; px < width; px++) {
    for (let py = 0; py < height; py++) {
        // переводим координаты пикселя в комплексные числа
        const cx = xmin + (xmax - xmin) * px / width;
        const cy = ymin + (ymax - ymin) * py / height;

        const iter = mandelbrot(cx, cy);

        // Определяем цвет пикселя (чем больше итераций, тем темнее)
        const color = iter === maxIter ? 0 : (255 * iter / maxIter);

        const idx = (py * width + px) * 4;
        imgData.data[idx] = color;      // R
        imgData.data[idx + 1] = color;  // G
        imgData.data[idx + 2] = color;  // B
        imgData.data[idx + 3] = 255;    // A
    }
}

// Выводим изображение в файл
ctx.putImageData(imgData, 0, 0);
const out = fs.createWriteStream(__dirname + '/mandelbrot.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('Фрактал Мандельброта сохранён как mandelbrot.png'));
