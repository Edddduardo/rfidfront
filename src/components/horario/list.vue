<template>
    <v-app>

    <v-content>
        <v-toolbar color="#FFFF00">
            <v-btn class="ma-2" text icon color="white" :to="{ name:'start' }">
                <v-icon>home</v-icon>
            </v-btn>
            <v-toolbar-title>
              Horarios
            </v-toolbar-title>
            
            
            <v-spacer></v-spacer> 
            <v-toolbar-items>
                <v-btn color="#FFFF00" text :to="{ name:'pList' }">Profesores</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'aList' }">Alumnos</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'asList' }">Materias</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'hList' }">Horarios</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'asist' }">Asistencia</v-btn>
            </v-toolbar-items>
           
        </v-toolbar>
        
            <v-spacer></v-spacer>
            <v-container>
            <v-data-table
          :headers="headers"
          :items="alumnos"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td >{{ props.item.apellido_paterno }}</td>
            <td >{{ props.item.apellido_materno }}</td>
            <td >{{ props.item.matricula }}</td>
            <td >{{ props.item.rfid }}</td>
            <td > <v-btn fab small dark class="ma-2" color="blue" :to="{ name:'halumno', params: {alumnoid: props.item.id} }" ><v-icon>alarm</v-icon>
      </v-btn>
      <v-btn fab small dark class="ma-2" color="green" :to="{ name:'hm', params: {alumnoid: props.item.rfid} }" ><v-icon>add</v-icon>
   
      </v-btn>
      </td> 
          </template>
        </v-data-table>
    </v-container>
   
    </v-content>
    
    
</v-app>  
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        headers: [
          {
            text: 'Nombre', value: 'nombre'
          },
          { text: 'Apellido Paterno', value: 'apellido_paterno' },
          { text: 'Apellido Materno', value: 'apellido_materno' },
          { text: 'Matricula', value: 'matricula' },
          { text: 'RFID', value: 'rfid' },
          { text: 'Acciones', value: 'actions' },


        ],
        alumnos: [],

      }
    }, created(){
      this.getAlumnos()
    },
     methods:{
      getAlumnos(){
       
        axios.get('http://localhost:3000/alumno')
        .then((response) => {
          this.alumnos = response.data.r
          console.log(response.data.r)
        }).then(error => console.log(error));
      },
      // deleteprofesor(){
      //   const idroute = props.item.id
      //   console.log("Esta cosa es lo que tiene el rout.params "+idroute)
      //   const dataq = { id: 9}
      //   const path = 'http://localhost:3000/profesorDelete'
      //   axios.post(path,dataq).then((response) => {
      //           console.log("Se eliminó esta wea")
      //           })
      //       }
    },
  }
</script>


<style>

</style>
