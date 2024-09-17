// Add this at the top of your component file
"use client";

import {TableCell} from "@/components/ui/table"
import { Delete } from "lucide-react";
import { deleteUserBooking } from "@/actions/bookings";
import React from "react";

const DeleteButton = ({ id } : {id:string}) => {
  const handleDelete = async (id: string) => {
    try {
        if(confirm('Click OK to cancel this booking.')){
            await deleteUserBooking(id); // Hypothetical server action
            console.log(`Item with id ${id} deleted successfully.`);
            window.location.reload();
        }else{
            return
        }
     
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  return (
    <TableCell>
      <Delete
        onClick={() => handleDelete(id)}
        className="relative float-right cursor-pointer hover:opacity-[.5]"
      />
    </TableCell>
  );
};

export default DeleteButton;