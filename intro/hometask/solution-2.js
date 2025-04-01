function calculateY (x) {
    let y;
    if (x < 0) {
        y = -3 - x;
    } else if (x >= 0 && x <= 4){
        y= x - 2;
    } else {
        if (Math.cos(x) >= 0){
            y = 2 * Math.sqrt(Math.cos(x));
        } else {
            throw new Error("косинус отрицательный, нельзя вычислить"); // выбрасыываем исключение
        }
    }
    return y;
}

// todo считать x, вызвать функцию

