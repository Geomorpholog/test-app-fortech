"use client"
import { useState, useEffect } from "react";
import { createColumnHelper, ColumnDef} from "@tanstack/react-table";
import { getData, Data } from "../data/getData";
import Table from "../table/table";



export type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    eyeColor: string;
};
export type UsersPropsType = {
    columns: ColumnDef<User,never|any>[];
    data: User[]
}
    

const fetchUsers = async (): Promise<User[]> => {
    try {
        const data: Data<User[]> | undefined = await getData();
        if (data) {
            console.log(data.data)
            return data.data;

        } else {
            console.error("Failed to fetch data, array is empty");
            return [];
        }
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return [];
    }
};

const data = fetchUsers()

const columnHelper = createColumnHelper<User>();


const columns: ColumnDef<User,never|any>[]  = [
    columnHelper.accessor('id', {
        header: 'ID',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('firstName', {
        header: 'First Name',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
        header: 'Last Name',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('age', {
        header: 'Age',
        cell: info => info.getValue(),
        sortingFn: 'alphanumeric',
        enableSorting: true,
    }),
    columnHelper.accessor('gender', {
        header: 'Gender',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('eyeColor', {
        header: 'Eye Color',
        cell: info => info.getValue(),
    }),
];


export default function Users() {



    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const users = await fetchUsers();
                setData(users);
            }
            finally { setLoading(false) }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
          <div className="w-4/4 h-screen flex justify-center items-center">
            <p className="text-5xl animate-bounce">Loading Data...</p>
          </div>
        )
    }

    return (
        <>
            <Table columns={columns} data={data} />
        </>
    )

}