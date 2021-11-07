// Задание 1

function parseCount (number) {
    let parsed = Number.parseInt(number, 10);
    if (isNaN(parsed)) {
      throw new Error ("Невалидное значение");
    } else {
      return parsed;
    }
  } 
  
  function validateCount (number) {
    try {
      let parsed2 = parseCount (number);
      return parsed2;
    } catch (err) {
      return err;
    }
  }

// Задание 2

class Triangle {

    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
    getPerimeter() {
      let trianglePerimeter = this.a + this.b + this.c;
      return +trianglePerimeter.toFixed(3);
    }
  
    getArea() {
      let p = this.getPerimeter() * 0.5;
      let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +s.toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch(err) {
      return {
        getPerimeter: () => "Ошибка! Треугольник не существует",
        getArea: () => "Ошибка! Треугольник не существует"
      }
    }
  }
  