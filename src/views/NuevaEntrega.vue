<template>
    <b-container>
      <b-card title="Nueva Entrega">
        <b-form @submit.prevent="crearEntrega">
          <b-form-group label="Nombre de Entrega">
            <b-form-input v-model="form.nombre_entrega" required></b-form-input>
          </b-form-group>
  
          <b-form-group label="Nombre del Negocio">
            <b-form-input v-model="form.nombre_negocio" required></b-form-input>
          </b-form-group>
  
          <b-form-group label="Fecha">
            <b-form-input type="date" v-model="form.fecha" required></b-form-input>
          </b-form-group>
  
          <b-form-group label="Tipo de Botón">
            <b-form-select v-model="form.tipo_boton" :options="['wifi', 'bluetooth', 'nfc']"></b-form-select>
          </b-form-group>
  
          <b-form-group label="Observaciones">
            <b-form-textarea v-model="form.observaciones"></b-form-textarea>
          </b-form-group>
  
          <b-form-group label="Componentes">
            <b-form-tags v-model="form.componentes"></b-form-tags>
          </b-form-group>
  
          <b-button type="submit" variant="primary">Guardar Entrega</b-button>
        </b-form>
      </b-card>
    </b-container>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        form: {
          nombre_entrega: "",
          nombre_negocio: "",
          fecha: "",
          tipo_boton: "wifi",
          observaciones: "",
          componentes: [],
        },
      };
    },
    methods: {
      async crearEntrega() {
        try {
          const response = await axios.post("/entregas", this.form);
          console.log("Entrega creada:", response.data);
          this.$router.push("/entregas"); // Redirigir a la lista de entregas
        } catch (error) {
          console.error("Error al crear entrega:", error.response?.data || error);
        }
      },
    },
  };
  </script>
  