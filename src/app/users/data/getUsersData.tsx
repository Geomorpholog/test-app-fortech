import { createColumnHelper } from "@tanstack/react-table";
type Data = {
  users: User[];
};
export type User = {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  eyeColor: string
} 
 export const getData = async(): Promise<Data|undefined> => {
    const res = await fetch('https://dummyjson.com/users')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  export const fetchUsers = async (): Promise<User[]> => {
    try {
        const data: Data | undefined = await getData();
        if (data && data.users) {
          return data.users; 
            
        } else {
            console.error("Failed to fetch data, array is empty");
            return [];
        }
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return [];
    }
};

const columnHelper = createColumnHelper<User>();

 export const columns = [
    columnHelper.accessor('id', {
      header: "ID",
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('firstName', {
      header: "First Name",
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: 'Last Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('age', {
      header: 'Age',
      cell: info => info.getValue(),
      sortingFn:'alphanumeric',
      enableSorting:true
    }),
    columnHelper.accessor('gender', {
      header: 'Gender',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('eyeColor', {
      header: 'Eye Color',
      cell: info => info.getValue(),
    }),
  ]
