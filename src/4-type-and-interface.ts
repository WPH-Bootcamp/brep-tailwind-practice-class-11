type UserType = {
  nama: string;
  umur: number;
  alamat: string;
  isLogin: boolean;
};

type ID = string | number;

type TeacherType = UserType & {
  NIT: number;
};

interface UserInterface {
  nama: string;
  umur: number;
  alamat: string;
  isLogin: boolean;
}

interface TeacherInterface extends UserInterface {}

type Gabungan = {
  teacher: TeacherInterface;
  user: UserType;
};
