<template>
    <b-container>
      <b-card>
        <b-card-header class="d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Lista de Entregas</h5>
        <b-button variant="success" @click="$router.push('/entregas/nueva')">
            Nueva Entrega
        </b-button>
      </b-card-header>
        <b-card-body>
          <b-table :items="entregas" :fields="fields" striped bordered responsive>
            <template #cell(tipo_boton)="data">
              <b-button variant="primary">{{ data.value }}</b-button>
            </template>
          </b-table>
        </b-card-body>
      </b-card>
    </b-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        entregas: [],
        fields: [
          { key: "nombre_entrega", label: "Nombre de Entrega" },
          { key: "nombre_negocio", label: "Nombre del Negocio" },
          { key: "fecha", label: "Fecha" },
          { key: "tipo_boton", label: "Tipo de Botón" },
          { key: "observaciones", label: "Observaciones" },
          { key: "componentes", label: "Componentes" },
        ],
      };
    },
    methods: {
      async fetchEntregas() {
        try {
          const response = await this.$axios.get("/entregas");
          this.entregas = response.data;
        } catch (error) {
          console.error("Error al obtener entregas:", error);
        }
      },
    },
    mounted() {
      this.fetchEntregas();
    },
  };
  </script>
  