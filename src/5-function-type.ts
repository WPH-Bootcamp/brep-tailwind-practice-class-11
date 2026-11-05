// Step 1 - Typing Parameter
function greet(nama: string) {
  console.log(`Halo, ${nama}`);
}
greet('ucup');

// Step 2 - Typing Return Value
function greet2(nama: string): string {
  return `Halo, ${nama}`;
}
console.log(greet2('ucup'));

// Step 3 - Type Inference
function greet3(nama: string) {
  return nama;
}
console.log(greet3('Ucup'));

// Step 4 - Optional Parameter
function greet4(
  nama: string,
  umur: number,
  gender: 'L' | 'P',
  admin?: boolean
): string {
  if (admin) {
    if (umur >= 20) {
      if (gender === 'L') {
        return `Halo, Mr. ${nama}`;
      } else {
        return `Halo, Mrs. ${nama}`;
      }
    } else {
      return `Halo, ${nama}`;
    }
  } else {
    return 'silahkan jadi admin';
  }
}
console.log(greet4('Ucup', 20, 'P', true));

// Step 5 - Void Function
function logMessage(message: string): void {
  console.log(message);
}

logMessage('hello saya adalah void');
