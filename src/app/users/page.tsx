import { Fragment } from "react";
import getData from "../table/getData"
import Table from "../table/table"



export default async function Users() {
  
  
  const data = await getData()
  // console.log(data)
   return (
    <Fragment>
      <div className = "w-full ml-[500px] min-h-screen bg-sky-100 inline-block">
           <Table dataSet = {data} />
      </div>
    </ Fragment>
  );
}
