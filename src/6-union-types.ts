// Step 1 -  Basic Union (Primitive)
let id: number | string = '1234';
id = 1234;

// Step 2 - Union Literal (Nilai Langsung)
let statusPesanan: 'pending' | 'canceled' | 'success' | 'kurir dikejar anjing' =
  'pending';
statusPesanan = 'canceled';
statusPesanan = 'success';
statusPesanan = 'kurir dikejar anjing';

// Step 3 - Union Function (Parameter / Return)
function sayHello(nama: number | string): number | string {
  return nama;
}

sayHello('Ucup');
sayHello(12);

// Step 4 - Type Narrowing
function printId(id: number | string | boolean): void {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else if (typeof id === 'boolean') {
    console.log(id.valueOf());
  } else {
    console.log(id.toFixed(2));
  }
}

// Step 5 - Union Object Type
type SuccessResponse = {
  status: 'success';
  data: string;
};

type ErrorResponse = {
  status: 'error';
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
