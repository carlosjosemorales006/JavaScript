// operadores Incremento y decremento

let a,b,c;

// Pre-incremento
a = 0;
++a;
console.log(a);

// Post-incremento
a++;
console.log(a);

// Pre-decremento
b = 2;
--b;
console.log(b);

// Post-decremento

b--;
console.log(b); 

// Ejemplo de uso de incremento y decremento
a = 5;
b = 2;
c = ++a * b--;

console.log(c);
console.log(a);
console.log(b);
