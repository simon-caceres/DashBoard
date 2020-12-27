<template>
  <div>
    <Header title="Actor" />
    <div class="internal-container"> 
      <mdb-row>
        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Autoridades locales</h5>
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
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataAuthority)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable">
              <tr v-for="(item, index) in dataAuthority" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>

        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Seguridad y emergencia</h5>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchSeg">
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="indigo" textWhite>
              <tr>
                <th>Nombre</th>
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataSeg)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable2">
              <tr v-for="(item, index) in dataSeg" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>

      <mdb-row class="internal-row">
        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Organizaciones públicas / privadas</h5>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchOrgPub">
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="green" textWhite>
              <tr>
                <th>Nombre</th>
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataOrgPub)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable3">
              <tr v-for="(item, index) in dataOrgPub" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>

        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Fundaciones u ONGs</h5>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchFundOng">
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="green" textWhite>
              <tr>
                <th>Nombre</th>
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataFundOng)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable4">
              <tr v-for="(item, index) in dataFundOng" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>

      <mdb-row class="internal-row">
        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Organizaciones comunitarias <br> Org. Territoriales</h5>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchOrgTerr">
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="red" textWhite>
              <tr>
                <th>Nombre</th>
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataOrgTerr)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable5">
              <tr v-for="(item, index) in dataOrgTerr" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>

        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Organizaciones comunitarias <br> Org. Funcionales</h5>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchOrgFunc">
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="red" textWhite>
              <tr>
                <th>Nombre</th>
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataOrgFunc)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable6"> 
              <tr v-for="(item, index) in dataOrgFunc" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>

      <mdb-row class="internal-row">
        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Organizaciones comunitarias <br> Org. Ciudadanas</h5>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchOrgCiud">
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="blue" textWhite>
              <tr>
                <th>Nombre</th>
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataOrgCiud)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable7">
              <tr v-for="(item, index) in dataOrgCiud" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>

        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <h5 style="margin-top: 0.2em">Sin Organización</h5>
            </mdb-col>
            <mdb-col class="my-form-inline" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="border-radius: 25px 0px 0px 25px" id="basic-text1">
                    <mdbIcon icon="search"/>
                  </span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Buscar" aria-label="Search" v-model="searchNoOrg">
              </div>
            </mdb-col>
          </mdb-row>
          <mdb-tbl >
            <mdb-tbl-head color="blue" textWhite>
              <tr>
                <th>Nombre</th>
                <th>Cargo - Datos de contacto</th>
                <th><a @click="saveNewTask(dataNoOrg)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable8">
              <tr v-for="(item, index) in dataNoOrg" :key="index">
                <th>{{item.name}}</th>
                <td>{{item.cargo}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>
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
        {name: 'Carlos Maya', cargo: 'Alcalde'},
        {name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira - 3113723743'}
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
          td = tr[i].getElementsByTagName("td")[0];
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