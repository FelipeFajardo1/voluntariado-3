import React, { useState } from "react";
import "./RegisterFormVolunteer.css";
import WrongAlert from "../alerts/WrongAlert.jsx";
import { ValidatePasswordFormat } from "../../services/ValidatePasswordFormat.jsx";
import axios from "axios";
import SuccessAlert from "../alerts/SuccessAlert.jsx";

const URI =
  process.env.REACT_APP_URL_SERVER_VOLUNTARIADO + "/usuarios/registro";

function RegisterFormVolunteer() {
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    nombre: "",
    apellido: "",
    telefono: "",
    fechaNacimiento: "",
    idCiudad: "",
    rol: "VOLUNTARIO",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFields = validateFields(formData);
    if (!allFields) {
      return WrongAlert({
        title: "No se pudo registrar",
        message: "Por favor completa todos los campos.",
      });
    }

    if (formData.contrasena !== formData.confirmarContrasena) {
      return WrongAlert({
        title: "Contraseñas no coinciden",
        message: "Por favor asegúrate de que ambas contraseñas sean iguales.",
      });
    }
    const passwordFormat = ValidatePasswordFormat(formData.contrasena);
    if (!passwordFormat.valid) {
      return WrongAlert({
        title: "Contraseña insegura",
        message: `
          Tu contraseña debe cumplir con los siguientes requisitos:
          • Mínimo 8 caracteres
          • Al menos una letra mayúscula y una minúscula
          • Al menos un número
          • Al menos un carácter especial (!, @, #, $, %, etc.)
        `,
      });
    }
    try {
      const response = await axios.post(URI, {
        correo: formData.correo,
        contrasena: formData.contrasena,
        nombre: formData.nombre,
        apellido: formData.apellido,
        telefono: formData.telefono,
        fecha_nacimiento: formData.fechaNacimiento,
        id_ciudad: parseInt(formData.idCiudad),
        rol: "VOLUNTARIO",
      });
      SuccessAlert({
        title: "Bien Hecho!!",
        message: "Te has registrado correctamente",
      });
    } catch (error) {
      console.error("Error al registrar voluntario:", error);
      WrongAlert({
        title: "Error al registrar",
        message: "Ocurrió un problema al intentar registrar al voluntario.",
      });
    }
  };

  // Función de validación general
  function validateFields(data) {
    for (const key in data) {
      if (data[key].toString().trim() === "") {
        return false;
      }
    }
    return true;
  }

  return (
    <form className="register-form-volunteer" onSubmit={handleSubmit}>
      <section className="register-form-left">
        <label className="register-form-label">Nombres</label>
        <input
          className="register-form-input"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Juan"
        />

        <label className="register-form-label">Correo</label>
        <input
          className="register-form-input"
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="ejemplo@ejemplo.com"
        />

        <label className="register-form-label">Ciudad</label>
        <select
          className="register-form-select"
          name="idCiudad"
          value={formData.idCiudad}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Ciudad de nacimiento
          </option>
          <option value="1">Mocoa</option>
          <option value="2">Colón</option>
          <option value="3">Orito</option>
          <option value="4">Puerto Asís</option>
          <option value="5">Puerto Caicedo</option>
          <option value="6">Puerto Guzmán</option>
          <option value="7">Puerto Leguízamo</option>
          <option value="8">San Francisco</option>
          <option value="9">San Miguel</option>
          <option value="10">Santiago</option>
          <option value="11">Sibundoy</option>
          <option value="12">Valle del Guamuez</option>
          <option value="13">Villagarzón</option>
        </select>

        <label className="register-form-label">Contraseña</label>
        <input
          className="register-form-input"
          type="password"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          placeholder="Contraseña"
        />
      </section>

      <section className="register-form-right">
        <label className="register-form-label">Apellidos</label>
        <input
          className="register-form-input"
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Pérez"
        />

        <label className="register-form-label">Teléfono</label>
        <input
          className="register-form-input"
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Número de 10 dígitos"
        />

        <label className="register-form-label">Fecha de nacimiento</label>
        <input
          className="register-form-input"
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
        />

        <label className="register-form-label">Confirmar Contraseña</label>
        <input
          className="register-form-input"
          type="password"
          name="confirmarContrasena"
          value={formData.confirmarContrasena}
          onChange={handleChange}
          placeholder="Contraseña"
        />
      </section>

      <button className="register-form-button" type="submit">
        Registrarse
      </button>
    </form>
  );
}

export default RegisterFormVolunteer;