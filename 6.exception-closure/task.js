﻿function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
      throw new Error("Невалидное значение");
     }
     return parseFloat(value);
 }
 function validateCount(value) {
     try {
         return parseCount(value);
     } 
         catch (error) {
             return error;
         }
 
 }
 
 class Triangle {
 
     constructor(sideA, sideB, sideC) { 
         
         if (sideA + sideB < sideC || sideC + sideB < sideA || sideC + sideA < sideB) {
             throw new Error('Треугольник с такими сторонами не существует'); 
         }
         this.sideA = sideA;
         this.sideB = sideB;
         this.sideC = sideC;
     }
         get perimeter() {
             return (this.sideA + this.sideB + this.sideC);
         }
         get area() {
             return  Number((0.25 * Math.sqrt((this.sideA + this.sideB - this.sideC) 
             * (this.sideA - this.sideB + this.sideC) 
             * (this.sideC + this.sideB - this.sideA ) 
             * (this.sideA + this.sideB + this.sideC))).toFixed(3)); 
         } 
 }
 
 function getTriangle(sideA, sideB, sideC) {
     try {
         return new Triangle(sideA, sideB, sideC)
     }
     catch(error) {
         return {
             get perimeter() {
                 return 'Ошибка! Треугольник не существует';
             },
             get area() {
                 return  'Ошибка! Треугольник не существует'; 
             } 
         } 
     }
 }