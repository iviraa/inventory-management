"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "../(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 300 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isError || !users) {
    return (
      <div className=" text-center text-red-500 m-5 py-4">
        Failed to fetch users
      </div>
    );
  }

  if (isLoading) {
    return <div className="m-5 py-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className=" bg-white shadow rounded-lg border border-gra-200 text-gray-700"
      />
    </div>
  );
};

export default Users;
