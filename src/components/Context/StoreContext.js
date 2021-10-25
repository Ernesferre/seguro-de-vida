import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addUser = (user) => {
    user.cliente = uuidv4();
    setData([...data, user]);
    // localStorage.setItem("usuarios", JSON.stringify(data));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario agregado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Estas Seguro?",
      text: "No podras revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "grey",
      confirmButtonText: "Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setData(data.filter((us) => us.cliente !== id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const userEdited = (id, user) => {
    console.log("User To Edit:", user);
    console.log("Cliente Id: ", id);
    setData(data.map((el) => (el.cliente === id ? user : el)));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario Editado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <StoreContext.Provider
      value={{ data, setData, addUser, deleteUser, userEdited }}
    >
      {children}
    </StoreContext.Provider>
  );
};
