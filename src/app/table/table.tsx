'use client'
import { useState, useEffect } from 'react'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel,getSortedRowModel,SortingFn, ColumnDef } from '@tanstack/react-table'


type PropsType = {
  columns: any
  data: object[]
}

const Table: React.FC<PropsType> = ({ columns, data }) => {
     
  const [pagination, setPagination] = useState({
    pageIndex: 0, 
    pageSize: 5, 
  });
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })
  
  

  return (
    <>
      <div className="w-[50px] h-[200px] flex flex-col justify-between items-center fixed top-[250px] left-[520px]">
        <p className = "text-center">First page</p>
        <button className = "w-[50px] h-[50px] bg-sky-300 text-xl font-bold border-4 border-sky-950 hover:bg-gray-700 "
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <p className = "text-center">Prev page</p>
        <button className = "w-[50px] h-[50px] bg-sky-300 text-xl font-bold border-4 border-sky-950 hover:bg-gray-700 "
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
      </div>
      <div className="w-[50px] h-[200px] flex flex-col justify-between items-center fixed top-[250px] right-[20px]">
      <p className = "text-center">Last page</p>
        <button className = "w-[50px] h-[50px] bg-sky-300 text-xl font-bold border-4 border-sky-950 hover:bg-gray-700 "
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <p className = "text-center">Next page</p>
        <button className = "w-[50px] h-[50px] bg-sky-300 text-xl font-bold border-4 border-sky-950 hover:bg-gray-700 "
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
      </div>
      <select 
          className = "text-2xl fixed"
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      <div className="w-full h-full flex justify-center items-center flex-col" >
        <table className="text-3xl text-sky-950 border-collapse: collapse;">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="h-[100px]">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="text-start border-8 border-sky-950 px-10 bg-sky-300">
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="h-[100px]">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="border-8 border-sky-950 pl-8">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ div>
    </>

  )
}

export default Table