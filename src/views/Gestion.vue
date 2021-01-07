<template>
  <div>
    <Header title="Gestion" />
    <div class="data_table_container  card-cascade " style="padding: 20px;">
      <!--Card image-->
      <div class="view view-cascade gradient-card-header white-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center z-depth-2" style="margin-top: -2rem; border-radius: 25px 25px 0px 0px; padding-left: 2rem; padding-right: 2rem;">
          <div>
            <button type="button" class="btn btn-outline-blue btn-rounded btn-sm px-2">
              <i class="fas fa-th-large mt-0"></i>
            </button>
            <button type="button" class="btn btn-outline-blue btn-rounded btn-sm px-2">
              <i class="fas fa-columns mt-0"></i>
            </button>
          </div>
          <h4 class="">Gestión Comunitaria</h4>
          <div style="display: flex">
            <a href="">
            </a>
            <p class="px-3 mt-3">Agregar Caso</p>
             <a
              class="" 
              type="button" 
              style="border-radius: 100%" 
              @click="showModal"
             >
               <mdb-icon 
                icon="plus-circle" 
                size="3x" 
                class="indigo-text mt-0  btn-floating  "
               />
             </a>
              
          </div>
      </div>
      <!--/Card image-->
      
      <mdb-datatable
        reponsiveSm
        :data="data"
        refresh
        :tfoot="false"
        bordered
        arrows
        searchPlaceholder="Buscar"
        entriesTitle="Filas a mostrar"
        noFoundMessage="Sin datos por el momento"
        class="my_table"
        style="position:relative"
        focus 
        selectColor="blue lighten-3"
        :scrollY="true"
        :checkbox="checkbox"
        @selectRow="onSelect"
        selectable @selected="selected = $event"
      />
      <div style="text-align: right">
         <button type="button" @click="editOneModal" class="btn btn-outline-blue btn-rounded btn-sm px-2">
          <i class="fas fa-pencil-alt mt-0"></i>
        </button>
        <button type="button" @click="closeOne" class="btn btn-outline-blue btn-rounded btn-sm px-2">
          <i class="fas fa-times mt-0"></i>
        </button>
      </div>
     
    </div>
    
    <mdb-container>
       <mdb-modal position="center" size="lg" :show="login" @close="login = false">

        <mdb-modal-header class="text-center">
           <mdb-modal-title tag="h4" bold class="w-100" v-if="editOneBool">Editar</mdb-modal-title>
          <mdb-modal-title tag="h4" bold class="w-100" v-else >Agregar Nuevo</mdb-modal-title>
        </mdb-modal-header>

        <mdb-modal-body class="mx-3 grey-text">
          <mdb-row>
            <mdb-col>
              <select class="browser-default custom-select mt-4 mb-4" v-model="formSave.pais">
                <option selected>Pais</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Peru">Peru</option>
              </select>
            </mdb-col>
            <mdb-col>
              <select class="browser-default custom-select mt-4 mb-4" v-model="formSave.activo">
                <option selected>Activo</option>
                <option value="Chile">Arauco Kenedy</option>
                <option value="Colombia">Arauco Estacion</option>
                <option value="Peru">Arauco Colombia</option>
              </select>
            </mdb-col>
          </mdb-row>
          
          <mdb-row class="mb-4">
            <mdb-col>
              <mdb-input label="Nombre Caso"  type="text" class="mb-4" v-model="formSave.nombre_caso" />
            </mdb-col>
            <mdb-col>
              <mdb-input label="Actor Principal"  type="text" class="mb-4"  v-model="formSave.actor_principal" />
            </mdb-col>
          </mdb-row>

          <mdb-row class="mb-4">
            <mdb-col>
              <mdb-input label="Otros Actores"  type="text" class="mb-2" v-model="formSave.otros_actores"/>
            </mdb-col>
            <mdb-col>
              <mdb-input label="Categoria"  type="text" v-model="formSave.categoria" />
            </mdb-col>
          </mdb-row>

          <mdb-row class="mb-4">
            <mdb-col>
              <mdb-input label="Sub Categoria"  type="text" class="mb-2" v-model="formSave.sub_categoria" />
            </mdb-col>
            <mdb-col>
              <mdb-input label="Via Recepcion de caso"  type="text" v-model="formSave.recepcion_caso"/>
            </mdb-col>
          </mdb-row>

          <mdb-row class="mb-4">
            <mdb-col>
              <mdb-input label="Datos de Contacto"  type="text" class="mb-2" v-model="formSave.contacto" />
            </mdb-col>
            <mdb-col>
               <datetime format="DD/MM/YYYY" id="datePicker" type="text"  width="100%" style="height: 100%" v-model="formSave.fecha_inicio"></datetime>
            </mdb-col>
          </mdb-row>
          
          <mdb-row class="mb-4">
            <mdb-col>
              <mdb-input label="Medidas Parque Arauco" group type="text" v-model="formSave.medidas_pq_arauco" />
            </mdb-col>
            <mdb-col>
              <mdb-input label="Medidas Otros Actores" group type="text" v-model="formSave.medidas_otros_actores" />
            </mdb-col>
          </mdb-row>
           
          
          <mdb-row>
            <mdb-col>
               <mdb-textarea  label="Descripcion" v-model="formSave.desc" />
            </mdb-col>
            <mdb-col>
               <mdb-textarea  label="Pendientes"  type="name" v-model="formSave.pendientes" />
            </mdb-col>
          </mdb-row>

        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn @click.native="editOne" v-if="editOneBool">Editar</mdb-btn>
          <mdb-btn @click.native="saveOne" v-else>Guardar</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-container>
    <mdb-container>
    <mdb-modal :show="closeCase" @close="closeCase = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Cierre de caso</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <datetime format="DD/MM/YYYY" width="100%" class="mb-5" v-model="formSave.fecha_cierre"></datetime>
        <mdb-input label="Medios de verificacion"  type="email" v-model="formSave.medio_verificacion" class="mb-5"/>
        <mdb-textarea icon="pencil-alt" label="Comentarios" v-model="formSave.comentarios" />
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="closeCase = false" color="unique">Enviar <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>

  </div>
</template>

<script>

const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }
import datetime from 'vuejs-datetimepicker';
import Header from '@/components/Header'
import { mdbDatatable, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbInput, mdbModalTitle, mdbBtn, mdbTextarea, mdbContainer, mdbCol, mdbRow,  } from 'mdbvue';
export default {
  components: {
    datetime,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbTextarea,
    Header, 
    mdbDatatable, 
    mdbIcon, 
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbModalTitle,
    mdbBtn
  },
  data: () => ({
      closeCase: false,
      checkbox: true,
      idForEdit: null,
      login: false,
      search: null,
      searched: [],
      editOneBool: false,
      director: '',
      formSave: {
        id: '',
        pais: 'Pais',
        activo: 'Activo',
        nombre_caso: '',
        actor_principal: '',
        otros_actores: '',
        categoria: '',
        sub_categoria: '',
        recepcion_caso: '',
        contacto: '',
        fecha_inicio: '',
        desc: '',
        medidas_pq_arauco: '',
        medidas_otros_actores: '',
        pendientes: '',
        status: '',
        fecha_cierre: '',
        medio_verificacion: '',
        comentarios: ''
      },
      formClose: {
        fecha_cierre: '',
        medio_verificacion: '',
        comentarios: ''
      },
      data: {
        columns: [
          {
            label: 'Nº',
            field: 'id',
            sort: 'asc',

          },
          {
            label: 'pais',
            field: 'pais',
            sort: 'asc'
          },
          {
            label: 'activo',
            field: 'activo',
            sort: 'asc'
          },
          {
            label: 'nombre caso',
            field: 'nombre_caso',
            sort: 'asc'
          },
          { 
            label: 'Actor Principal',
            field: 'actor_principal',
            sort: 'asc'
          },
          {
            label: 'Otros Actores',
            field:'otros_actores',
            sort: 'asc'
          },
          {
            label: 'Categoria',
            field: 'categoria',
            sort: 'asc'
          },
          {
            label: 'Sub Categoria',
            field: 'sub_categoria',
            sort: 'asc'
          },
          {
            label: 'via recepcion caso',
            field: 'recepcion_caso',
            sort: 'asc'
          },
          {
            label: 'Contacto',
            field: 'contacto',
            sort: 'asc'
          },
          {
            label: 'Fecha de inicio',
            field: 'fecha_inicio',
            sort: 'asc'
          },
          {
            label: 'Descripcion',
            field: 'desc',
            sort: 'asc'
          },
          {
            label: 'Medidas Pque. Arauco',
            field: 'medidas_pq_arauco',
            sort: 'asc'
          },
          {
            label: 'Medidas Otros Actores',
            field: 'medidas_otros_actores',
            sort: 'asc'
          },
          {
            label: 'Pendientes',
            field: 'pendientes',
            sort: 'asc'
          },
          {
            label: 'Status',
            field: 'status',
            sort: 'asc'
          },
          {
            label: 'Fecha de Cierre',
            field: 'fecha_cierre',
            sort: 'asc'
          },
          {
            label: 'Medios de verificacion',
            field: 'medio_verificacion',
          },
          {
            label: 'comentarios',
            field: 'comentarios'
          }
        ],
        rows: [
          
        ]
      },
    }),
    methods: {
      showModal () {
        this.login = true
        if(this.login === true) {
          const datePicker = document.getElementById("datePicker")
          console.log(datePicker)
        }
      },
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      },
      onSelect (items) {
        if (items !== -1 ){
          let selected = this.data.rows.find(i => i.id === items + 1)
          this.formSave = selected
          this.idForEdit = items
        }
        if (items === -1) {
          this.formSave = {
            id: '',
            pais: '',
            activo: '',
            nombre_caso: '',
            actor_principal: '',
            otros_actores: '',
            categoria: '',
            sub_categoria: '',
            recepcion_caso: '',
            contacto: '',
            fecha_inicio: '',
            desc: '',
            medidas_pq_arauco: '',
            medidas_otros_actores: '',
            pendientes: '',
            status: '',
          }
          this.idForEdit = null
        }
      },
      getAlternateLabel (count) {
        let plural = ''

        if (count > 1) {
          plural = 's'
        }

        return `${count} user${plural} selected`
      },
      saveOne () {
        this.formSave.status = "Procesando"
        this.formSave.id = this.data.rows.length + 1
        let objectForPush = this.formSave
        this.data.rows.push(objectForPush)
        this.formSave = {
          id: '',
          pais: '',
          activo: '',
          nombre_caso: '',
          actor_principal: '',
          otros_actores: '',
          categoria: '',
          sub_categoria: '',
          recepcion_caso: '',
          contacto: '',
          fecha_inicio: '',
          desc: '',
          medidas_pq_arauco: '',
          medidas_otros_actores: '',
          pendientes: '',
          status: '',
        }
        this.login = false
      },
      editOneModal () {
        if (this.idForEdit !== null) {
          this.login = true
          this.editOneBool = true
        }
      },
      editOne () {
        this.data.rows.map(element => {
          if(element.id === this.idForEdit) {
            element = this.formSave
          }
        })
        this.formSave = {
          id: '',
          pais: '',
          activo: '',
          nombre_caso: '',
          actor_principal: '',
          otros_actores: '',
          categoria: '',
          sub_categoria: '',
          recepcion_caso: '',
          contacto: '',
          fecha_inicio: '',
          desc: '',
          medidas_pq_arauco: '',
          medidas_otros_actores: '',
          pendientes: '',
          status: '',
        }
        this.login = false
        this.editOneBool = false
      },
      closeOne () {
        if (this.idForEdit !== null) {
          this.closeCase = true
          this.editOneBool = true
        }
      },
      sendOne () {
        this.data.rows.map(element => {
          if(element.id === this.idForEdit) {
            element.status = 'cerrado'
            this.formSave.status = 'cerrado'
            element = this.formSave
            
          }
        })
        this.formSave = {
          id: '',
          pais: '',
          activo: '',
          nombre_caso: '',
          actor_principal: '',
          otros_actores: '',
          categoria: '',
          sub_categoria: '',
          recepcion_caso: '',
          contacto: '',
          fecha_inicio: '',
          desc: '',
          medidas_pq_arauco: '',
          medidas_otros_actores: '',
          pendientes: '',
          status: '',
          fecha_cierre: '',
          medio_verificacion: '',
          comentarios: ''
        }
        this.closeCase = false
        this.editOneBool = false
      }
    },
    created () {
      this.searched = this.users
    },
    mounted () {
      const el = document.getElementsByClassName('table')
      const padre = el[0].parentElement
      padre.className = "my_table_father"
      padre.classList.add('my_new_class')
      const e = document.getElementsByClassName('sorting')
      e.forEach(item => {
        if(item.childNodes[0].data === ' Nº ') {
          item.classList.add("tm-number")
        }
      })
      
    }

}
</script>

<style>
.md-table-cell {
  width: 350px !important;
}
th.md-table-head.md-sortable {
  width: 350px !important;
}
.md-checkbox-container {
  margin-left: 5px;
  margin-right: 20px;
}
.my_table_father,
.my_table > div > div {
  overflow: auto !important;
  width: 100%;
  min-height: 100%;
}

.data_table_container {
  margin: 20px 8px 20px 8px !important;
  position: relative;
  min-height: 85vh;
}
.my_table_father table thead {
  width: 200px;
}
.th-sm.sorting {
  min-width: 150px;
}
.form-control {
  border-radius: 25px;
}
.tm-number {
  min-width: 3rem !important;
}
.datetime-picker input {
  height: 2.5rem;
  margin-top: 1.5rem;
}


</style>