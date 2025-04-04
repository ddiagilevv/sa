const { createCanvas } = require('canvas');
const fs = require('fs');

// Параметры изображения
const width = 800;
const height = 800;
const maxIter = 1000;

// Область комплексной плоскости
const xmin = -2.5;
const xmax = 1.5;
const ymin = -2;
const ymax = 2;

// HSV → RGB конвертация
function hsvToRgb(h, s, v) {
    let r, g, b;
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    return [
        Math.floor(r * 255),
        Math.floor(g * 255),
        Math.floor(b * 255)
    ];
}

// Основная функция
function mandelbrot(cx, cy) {
    let x = 0, y = 0;
    let iter = 0;

    while (x * x + y * y <= 4 && iter < maxIter) {
        let xTemp = x * x - y * y + cx;
        y = 2 * x * y + cy;
        x = xTemp;
        iter++;
    }

    if (iter === maxIter) {
        return -1; // Точка внутри множества
    }

    // Плавное значение итерации
    let zn = Math.sqrt(x * x + y * y);
    let smooth = iter + 1 - Math.log2(Math.log2(zn));

    return smooth;
}

// Подготовка canvas
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
const imgData = ctx.createImageData(width, height);

// Генерация изображения
for (let px = 0; px < width; px++) {
    for (let py = 0; py < height; py++) {
        const cx = xmin + (xmax - xmin) * px / width;
        const cy = ymin + (ymax - ymin) * py / height;

        const m = mandelbrot(cx, cy);

        let r, g, b;

        if (m === -1) {
            // Черный цвет для внутренних точек
            r = g = b = 0;
        } else {
            const hue = m / maxIter;
            [r, g, b] = hsvToRgb(hue, 1, 1);
        }

        const idx = (py * width + px) * 4;
        imgData.data[idx] = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = 255;
    }
}

// Сохраняем файл
ctx.putImageData(imgData, 0, 0);
const out = fs.createWriteStream(__dirname + '/mandelbrot-colorful.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('Разноцветный Мандельброт сохранён как mandelbrot-colorful.png'));
