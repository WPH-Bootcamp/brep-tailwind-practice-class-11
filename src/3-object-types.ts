type UserType = {
  name: string;
  age: number;
};

interface UserInterface {
  name: string;
  age: number;
}

const usersData: UserType = {
  name: 'ucup',
  age: 25,
};

const usersData2: {
  name: string;
  age: number;
  alamat: string;
} = {
  name: 'ucup',
  age: 25,
  alamat: 'jl untung jawa',
};

const usersData3: UserInterface = {
  name: 'ucup',
  age: 25,
};
console.log(usersData);
