import { Fragment } from "react";
import Table from "./usersTable";



export default async function UsersPage() {

   return (
    <Fragment>
      <div className = "w-full ml-[500px] min-h-screen bg-sky-100 inline-block">
        <Table/>
      </div>
    </ Fragment>
  );
}
