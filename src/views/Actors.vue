<template>
  <div>
    <Header title="Actor" />
    <div class="internal-container container"> 
        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 class="mt-2 ml-4">Mapa de Actores</h5>
            </mdb-col>
            <mdb-col style="display: flex">
              <p class="mt-2 mr-2">filtrar por:</p>
              <select class="browser-default custom-select mb-4" style="width: 70%" v-model="filtrar">
                <option selected value="nombre">Nombre</option>
                <option value="cargo">Cargo</option>
                <option value="contacto">Contacto</option>
                <option value="email">Email</option>
                <option value="tipo_autoridad">Tipo de Autoridad</option>
                <option value="institucion">Institucion</option>
              </select>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group " >
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                  <input  class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchAuthority" >
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="indigo" textWhite >
              <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Contacto</th>
                <th>Email</th>
                <th>Tipo de autoridad</th>
                <th>Institucion</th>
                <th><a @click="saveNewTask(dataAuthority)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable">
              <tr v-for="(item, index) in dataAuthority" :key="index">
                <th class="nombre">{{item.name}}</th>
                <td class="cargo">{{item.cargo}}</td>
                <td class="contacto">{{item.contact}} </td>
                <td class="email">{{item.email}}</td>
                <td class="tipo_autoridad">{{item.tipo_autoridad}}</td>
                <td class="institucion">{{item.institucion}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      
    </div>
    <mdb-modal frame position="bottom" direction="bottom" :show="modal" @close="modal = false">
        <mdb-modal-body class="text-center row">
          <div class="col">
            <mdb-input placeholder="Nombre" :required="true" v-model="form.name" class="mb-3 mt-0">
              <span class="input-group-text md-addon" slot="prepend"><mdb-icon far icon="user" /></span>
            </mdb-input>
          </div>
          <div class="col">
            <mdb-input placeholder="Cargo - Datos de contacto" :required="true"  v-model="form.contact" class="mb-3 mt-0">
              <span class="input-group-text md-addon" slot="prepend"><mdb-icon  icon="phone-volume" /></span>
            </mdb-input>
          </div>
          <div class="col">
            <mdb-btn color="secondary" @click.native="modal = false">Cerrar</mdb-btn>
            <mdb-btn color="primary" @click="saveTask()">Guardar</mdb-btn>
          </div>
        </mdb-modal-body>
    </mdb-modal>
  </div>
</template>

<script>
//import _ from 'lodash'
import Header from '@/components/Header'
import {mdbRow, mdbCol, mdbTbl, mdbTblHead, mdbTblBody, mdbIcon,mdbModal, mdbModalBody, mdbBtn, mdbInput, } from 'mdbvue';
export default {
  components: {
    Header,
    mdbRow,
    mdbCol,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbIcon,
    mdbModal,
    mdbModalBody,
    mdbBtn,
    mdbInput
  },
  data () {
    return {
      filtrar: 'nombre',
      form:{
        name: '',
        contact: ''
      },
      arrayContain: null,
      modal: false,
      some: '',
      //inputs
      searchAuthority: '',
      searchSeg: '',
      searchOrgPub: '',
      searchFundOng: '',
      searchOrgTerr: '',
      searchOrgFunc: '',
      searchOrgCiud: '',
      searchNoOrg: '',
      //data Containers
      dataAuthority: [
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'local', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'Local', institucion: 'Alcaldia'},
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Salud y Emergencia', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'Salud y Emergencia', institucion: 'Alcaldia'},
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. públicas / privadas', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'Org. públicas / privadas', institucion: 'Alcaldia'},
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. Territoriales', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'Org. Territoriales', institucion: 'Alcaldia'},
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Fundaciones u ONGs', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'Fundaciones u ONGs', institucion: 'Alcaldia'},
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. Funcionales', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'Org. Funcionales', institucion: 'Alcaldia'},
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. Ciudadanas', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'Org. Ciudadanas', institucion: 'Alcaldia'},
        {name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Sin Org.', institucion: 'Alcaldia'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '3113723743', email: 'some@email.com', tipo_autoridad: 'sin Org.', institucion: 'Alcaldia'},
      ],
      dataSeg: [
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
      ],
      dataOrgPub: [
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
      ],
      dataFundOng: [
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
      ],
      dataOrgTerr: [
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
      ],
      dataOrgFunc: [
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
      ],
      dataOrgCiud: [
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
      ],
      dataNoOrg: [
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
      ]
    }
  },
  created: function () {
    //this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    onChange (evt) {
      console.log(evt)
      console.log(this.searchAuthority)
    },
    saveNewTask(array) {
      this.modal = true
      this.arrayContain = array
    },
    saveTask() {
      if (this.form.name === '') {
        alert('nombre requerido')
      } else if (this.form.contact === '') {
        alert('contacto requerido')
      } else{
        let obj = {
          name: this.form.name,
          cargo: this.form.contact
        }
        this.arrayContain.push(obj)
        this.modal = false
        this.arrayContain = null
        this.form.name = ''
        this.form.contact = ''
      }
    }
  },
  watch: {
    searchAuthority: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByClassName(`${this.filtrar}`)[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    },
    searchSeg: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable2");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    },
    searchOrgPub: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable3");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    } ,
    searchFundOng: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable4");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    } ,
    searchOrgTerr: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable5");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    } ,
    searchOrgFunc: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable6");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    },
    searchOrgCiud: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable7");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    } ,
    searchNoOrg: function(first){
      var filter, table, tr, td, i, txtValue;
      filter = first.toUpperCase();
      table = document.getElementById("myTable8");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
    }  
  },

}
</script>

<style>
body {
  color: rgb(90, 84, 84)
}
.internal-container {
  padding: 10px
}
.internal-row {
  margin-top: 1rem
}
.my-form-inline {
  margin-bottom: 0.5em;
}
.my-form-inline .md-form {
  margin-top: 0rem;
  margin-bottom: 0.5rem;
}
.my-form-inline .md-form .form-control {
  padding: 0;
  margin-left: 0.5rem;
  width: 140%;
}
h4 {
  text-align: justify;
}
h5 {
  text-align: justify;
}
.internal-container .card {
  margin: 0.6rem;
  padding: 10px;
  border-radius: 10px;
}
</style>