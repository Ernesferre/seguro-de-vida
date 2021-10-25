import { useState } from "react";

export const UserValidations = (usuario) => {
  console.log(usuario);

  const [errorName, setErrorName] = useState(false);
  //   const [errorApe, setErrorApe] = useState(false);
  //   const [errorDni, setErrorDni] = useState(false);
  //   const [errorEdad, setErrorEdad] = useState(false);
  //   const [errorGenero, setErrorGenero] = useState(false);
  //   const [errorManeja, setErrorManeja] = useState(false);
  //   const [errorLentes, setErrorLentes] = useState(false);
  //   const [errorDiab, setErrorDiab] = useState(false);
  //   const [errorEnf, setErrorEnf] = useState(false);
  //   const [errorTE, setErrorTE] = useState(false);

  if (usuario.nombre.trim() === "") {
    console.log("campo vacio");
    setErrorName(true);
    return;
  }

  //   if (apellido.trim() === "") {
  //     setErrorApe(true);
  //     return;
  //   }

  //   if (edad.trim() === "") {
  //     setErrorEdad(true);
  //     return;
  //   }

  //   if (dni.trim() === "" || dni.length > 8 || dni.length < 7) {
  //     setErrorDni(true);
  //     return;
  //   }

  //   if (genero === "") {
  //     setErrorGenero(true);
  //     return;
  //   }

  //   if (maneja === "") {
  //     setErrorManeja(true);
  //     return;
  //   }

  //   if (lentes === "") {
  //     setErrorLentes(true);
  //     return;
  //   }

  //   if (diabetico === "") {
  //     setErrorDiab(true);
  //     return;
  //   }

  //   if (enfermedad === "") {
  //     setErrorEnf(true);
  //     return;
  //   }

  //   if (enfermedad === "Si" && tipoEnfermedad === "") {
  //     setErrorTE(true);
  //     return;
  //   }
};
