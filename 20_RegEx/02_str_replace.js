/**
 * Замена: str.replace
 */

/**
 * Метод str.replace(regexp, replacement) заменяет совпадения с regexp в строке str на replacement 
 * (все, если есть флаг g, иначе только первое).
 */

// без флага g
alert("We will, we will".replace(/we/i, "I")); // I will, we will

// с флагом g
alert("We will, we will".replace(/we/ig, "I")); // I will, I will