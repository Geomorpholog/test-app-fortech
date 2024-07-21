import { Fragment } from "react";
import Users from "./users";



export default async function UsersPage() {

   return (
    <Fragment>
      <div className = "w-full ml-[500px] min-h-screen bg-sky-100 inline-block">
        <Users />
      </div>
    </ Fragment>
  );
}
