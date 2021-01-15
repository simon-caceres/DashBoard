<template>
  <div>
    <Header title="Actor" />
    <div class="internal-container container"> 
        <mdb-col col="sm" class="card">
          <mdb-row>
            <mdb-col >
              <!-- <h5 class="mt-2 ml-4">Mapa de Actores</h5> -->
              <button @click="onExport" class="btn btn-primary btn-sm float-left"> <h7>Exportar</h7> </button>
            </mdb-col>
            <mdb-col style="display: flex">
              <p class="mt-2 mr-2">filtrar por:</p>
              <select class="browser-default custom-select mb-4" style="width: 70%" v-model="filtrar">
                <option selected value="nombre">Nombre</option>
                <option value="cargo">Cargo</option>
                <option value="contacto">Contacto</option>
                <option value="email">Email</option>
                <option value="tipo_autoridad">Tipo de organización</option>
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
                <th></th>
                <th style="font-weight: bold">Nombre</th>
                <th>Cargo</th>
                <th>Contacto</th>
                <th>Email</th>
                <th style="font-weight: bold">Tipo de organización</th>
                <th>Institucion</th>
                <th><a @click="saveNewTask(dataAuthority)" ><mdb-icon icon="plus" /></a></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body id="myTable">
              <tr v-for="(item, index) in dataAuthority" :key="dataAuthority[index].id" :id="'table_row_'+ dataAuthority[index].id" @change="onChange">
                <td><input type="checkbox"  :id=" 'checkbox_' + dataAuthority[index].id" :value="dataAuthority[index]" v-model="check"></td>
                <th class="nombre" style="font-weight: 400">{{item.name}}</th>
                <td class="cargo">{{item.cargo}}</td>
                <td class="contacto">{{item.contact}} </td>
                <td class="email">{{item.email}}</td>
                <th class="tipo_autoridad" style="font-weight: 400">{{item.tipo_autoridad}}</th>
                <td class="institucion">{{item.institucion}}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      
    </div>
    <mdb-modal  :show="modal"  @close="close">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Agregar nuevo actor</mdb-modal-title>
      </mdb-modal-header>

        <mdb-modal-body class="text-center mx-1">
          
            <mdb-input placeholder="Nombre" :required="true" v-model="form.name" class="mb-3 mt-2">
              <span class="input-group-text md-addon" slot="prepend"><mdb-icon far icon="user" /></span>
            </mdb-input>
          
            <mdb-input placeholder="Cargo" :required="true"  v-model="form.cargo" class="mb-3 mt-2">
              <span class="input-group-text md-addon" slot="prepend"><mdb-icon  icon="info" /></span>
            </mdb-input>

            <mdb-input placeholder="Datos de contacto" :required="true" type="text"  v-model="form.contact" class="mb-3 mt-2">
              <span class="input-group-text md-addon" slot="prepend"><mdb-icon  icon="phone-volume" /></span>
            </mdb-input>

            <mdb-input placeholder="Email" :required="false" type="email"  v-model="form.email" class="mb-3 mt-2">
              <span class="input-group-text md-addon" slot="prepend"><mdb-icon  icon="envelope-open" /></span>
            </mdb-input>

            <select class="browser-default custom-select mt-3 mb-3" v-model="form.tipo_autoridad">
              <option selected disabled>Tipo de organización</option>
              <option value="Autoridad local">Autoridad local</option>
              <option value="Salud y Emergencia">Salud y Emergencia</option>
              <option value="Org. Publicas / privadas">Org. Publicas / privadas</option>
              <option value="Org. Territoriales">Org. Territoriales</option>
              <option value="Fundaciones u ONGs">Fundaciones u ONGs</option>
              <option value="Org. Funcionales">Org. Funcionales</option>
              <option value="Org. Ciudadanas">Org. Ciudadanas</option>
              <option value="Sin Org.">Sin Org.</option>
            </select>

            <mdb-input placeholder="Institucion" :required="false"  v-model="form.institucion" class="mb-3 mt-2">
              <span class="input-group-text md-addon" slot="prepend"><mdb-icon  icon="university" /></span>
            </mdb-input>

          <mdb-modal-footer center>
            <mdb-btn color="secondary" @click.native="close">Cerrar</mdb-btn>
            <mdb-btn color="primary" @click="saveTask()" v-if="!edit">Guardar</mdb-btn>
            <mdb-btn color="primary" @click="editTask()" v-else>Editar</mdb-btn>
          </mdb-modal-footer>

        </mdb-modal-body>
    </mdb-modal>
  </div>
</template>

<script>
//import _ from 'lodash'
import exportFromJSON from 'export-from-json'
import Header from '@/components/Header'
import {mdbRow, mdbCol, mdbTbl, mdbTblHead, mdbTblBody, mdbIcon,mdbModal, mdbModalBody, mdbBtn, mdbInput, mdbModalTitle, mdbModalHeader, mdbModalFooter } from 'mdbvue';
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
    mdbModalTitle,
    mdbModalHeader,
    mdbModalFooter,
    mdbBtn,
    mdbInput
  },
  data () {
    return {
      edit: false,
      filtrar: 'nombre',
      check: [],
      form:{
        id: null,
        name: '',
        contact: '',
        cargo: '',
        email: '',
        tipo_autoridad: 'Tipo de organización',
        institucion: ''
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
        {id: 1, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Autoridad local', institucion: 'Alcaldia'},
        {id: 2, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'Autoridad local', institucion: 'Alcaldia'},
        {id: 3, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Salud y Emergencia', institucion: 'Alcaldia'},
        {id: 4, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'Salud y Emergencia', institucion: 'Alcaldia'},
        {id: 5, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. públicas / privadas', institucion: 'Alcaldia'},
        {id: 6, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'Org. públicas / privadas', institucion: 'Alcaldia'},
        {id: 7, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. Territoriales', institucion: 'Alcaldia'},
        {id: 8, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'Org. Territoriales', institucion: 'Alcaldia'},
        {id: 9, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Fundaciones u ONGs', institucion: 'Alcaldia'},
        {id: 10, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'Fundaciones u ONGs', institucion: 'Alcaldia'},
        {id: 11, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. Funcionales', institucion: 'Alcaldia'},
        {id: 12, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'Org. Funcionales', institucion: 'Alcaldia'},
        {id: 13, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Org. Ciudadanas', institucion: 'Alcaldia'},
        {id: 14, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'Org. Ciudadanas', institucion: 'Alcaldia'},
        {id: 15, name: 'Carlos Maya', cargo: 'Alcalde', contact: '', email: '', tipo_autoridad: 'Sin Org.', institucion: 'Alcaldia'},
        {id: 16, name: 'Sergio Trejo', cargo: 'Subdirector de tránsito Pereira', contact: '+56 987654321', email: 'some@email.com', tipo_autoridad: 'sin Org.', institucion: 'Alcaldia'},
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
    window.onRemove = this.onRemove
    window.onEdit = this.onEdit
    //this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  beforeUpdate () {
   
  },
  updated (){
   
     
  },
  methods: {
    onExport () {
      const data = this.dataAuthority
      const date = new Date()
      const fileName = 'mapa_de_actores_' + date
      const exportType = 'xls'
  
      exportFromJSON({ data, fileName, exportType })
    },
    close () {
      this.modal = false 
      this.edit = false
      this.form.id = null
      this.form.name = ''
      this.form.contact = ''
      this.form.cargo = '',
      this.form.email = '',
      this.form.tipo_autoridad = 'Tipo de Autoridad',
      this.form.institucion = ''
    },
    onChange (evt) {
      var tr = evt.path[2]
      tr.classList.toggle('select_row')
      var is_selected_already = document.getElementById('td_action' + evt.target.id)
      if (is_selected_already) {
        is_selected_already.parentNode.removeChild(is_selected_already)
      } else {
        var a = document.createElement('a')
        var a_remove = document.createElement('a')

        var td = document.createElement('td')
        td.id = 'td_action' + evt.target.id

        var i = document.createElement('i')
        i.classList = 'fas fa-trash mr-3'
        a.append(i) 
        a.setAttribute("onclick",`onRemove(${evt.target.id})`);
      
        var i_remove = document.createElement('i')
        i_remove.classList = 'fas fa-pen'
        a_remove.append(i_remove)

        a_remove.setAttribute("onclick",`onEdit(${evt.target.id})`);

        td.innerHTML += a.outerHTML + a_remove.outerHTML 
        tr.append(td)
      }
      
    },
    onRemove (el)  {
      const str2 = el.id.replace('checkbox_', '');
      const find = this.dataAuthority.find(e => e.id === parseInt(str2))
      this.dataAuthority.splice(this.dataAuthority.indexOf(find), 1)
    },
    onEdit (el) {
      const str2 = el.id.replace('checkbox_', '');
      const find = this.dataAuthority.find(e => e.id === parseInt(str2))
      this.form.id = find.id
      this.form.name = find.name
      this.form.contact = find.contact
      this.form.cargo = find.cargo
      this.form.email = find.email
      this.form.tipo_autoridad = find.tipo_autoridad
      this.form.institucion = find.institucion
      this.edit = true
      this.modal = true
    },
    saveNewTask(array) {
      this.modal = true
      this.arrayContain = array
    },
    editTask() {
      const find = this.dataAuthority.find(e => e.id === this.form.id)

      find.id = this.form.id,
      find.name = this.form.name,
      find.cargo = this.form.cargo,
      find.contact = this.form.contact,
      find.email =  this.form.email,
      find.tipo_autoridad = this.form.tipo_autoridad,
      find.institucion = this.form.institucion

      this.modal = false
      this.arrayContain = null
      this.form.id = null
      this.form.name = ''
      this.form.contact = ''
      this.form.cargo = '',
      this.form.email = '',
      this.form.tipo_autoridad = 'Tipo de Autoridad',
      this.form.institucion = ''
    },
    saveTask() {
      if (this.form.name === '') {
        alert('nombre requerido')
      } else if (this.form.contact === '') {
        alert('contacto requerido')
      } else{
        this.form.id = this.form.id === null ? this.dataAuthority.length + 1 : this.form.id
        let obj = {
          id: this.form.id,
          name: this.form.name,
          cargo: this.form.cargo,
          contact: this.form.contact,
          email: this.form.email,
          tipo_autoridad: this.form.tipo_autoridad,
          institucion: this.form.institucion
        }
        this.dataAuthority.push(obj)
        this.dataAuthority.sort(function (a, b) {
          if (a.tipo_autoridad > b.tipo_autoridad) {
            return 1;
          }
          if (a.tipo_autoridad < b.tipo_autoridad) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        this.modal = false
        this.arrayContain = null
        this.form.id = null
        this.form.name = ''
        this.form.contact = ''
        this.form.cargo = '',
        this.form.email = '',
        this.form.tipo_autoridad = 'Tipo de Autoridad',
        this.form.institucion = ''
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
    // check: function (CHECK) {
    //   if (CHECK[0]) {
    //     console.log('check')
    //   }
    // }
  
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
.select_row {
  background-color: #eeeeee;
}
</style>