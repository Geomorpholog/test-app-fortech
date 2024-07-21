import { json } from "stream/consumers";
import { User} from "../users/users";

export type Data<T> = {
  data:T
};

export const getData = async (): Promise<Data<User[]> | undefined> => {
  const res = await fetch('https://dummyjson.com/users')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
