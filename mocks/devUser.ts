export type DevUser = {
  email: string;
  password: string;
  role: "admin" | "artist";
  username?: string;
};

export const devUsers: DevUser[] = [
  {
    email: "admin@duelart.test",
    password: "devpassword",
    role: "admin",
    username: "admin",
  },
  {
    email: "artist@duelart.test",
    password: "artistpass",
    role: "artist",
    username: "victorkael",
  },
];

export default devUsers;
