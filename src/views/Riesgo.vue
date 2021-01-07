<template>
  <div>
    <Header title="Riesgo" />
    <section class="container">
      
      <div style="padding: 20px" >
        <div class="title-head-container indigo z-depth-2">
          <h3 style="text-align: left; position: relative;">I. Impactos</h3>
        </div>
          <mdb-collapse style="position:relative; margin-top:2rem" :toggleTag="['button']" :togglers="1" :toggleClass="['btn btn-primary', 'btn-toggle', 'my-btn']" :toggleText="[``]">
            <mdb-tbl>
              <mdb-tbl-head color="indigo" textWhite>
                <tr>
                  <th style="text-align: justify;">Impacto de la operación del activo</th>
                  <th>Nivel de impacto</th>
                  <th>Puntaje</th>
                </tr>
              </mdb-tbl-head>
              <mdb-tbl-body >
                <tr v-for="(item, index) in dataImp" :key="index">
                  <td style="text-align: justify;"> {{item.name}} </td>
                  <td> {{item.level}} </td>
                  <td> <input class="form-control" style="text-align: center" type="number" v-model="item.pts"> </td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-head color="indigo" textWhite> 
                <tr>
                  <th style="background: white;"></th>
                  <th>Total inpacto</th>
                  <th style="font-weight: bold"> {{getTotal(dataImp)}} </th>
                </tr>
              </mdb-tbl-head>
            </mdb-tbl>
          </mdb-collapse>
      </div>

      <div style="padding: 20px">
        <div class="title-head-container green z-depth-2">
          <h3 style="text-align: left; position: relative;">II. Ponderador de impactos: Tipo de vecinos</h3>
        </div>
          <mdb-collapse style="position:relative; margin-top:2rem" :toggleTag="['button']" :togglers="1" :toggleClass="['btn btn-primary', 'btn-toggle', 'my-btn']" :toggleText="['']">
            <mdb-tbl>
              <mdb-tbl-head color="green" textWhite>
                <tr>
                  <th style="text-align: justify;">El proyecto o activo tiene vecinos...</th>
                  <th>Sí / No</th>
                  <th>Ponderador</th>
                </tr>
              </mdb-tbl-head>
              <mdb-tbl-body >
                <tr v-for="(item, index) in dataVec" :key="index">
                  <td style="text-align: justify;"> {{item.name}} </td>
                  <td> {{item.level}} </td>
                  <td> <input class="form-control" style="text-align: center" type="number" v-model="item.pts"> </td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-head color="green" textWhite> 
                <tr>
                  <th style="background: white;"></th>
                  <th>Total inpacto</th>
                  <th style="font-weight: bold">{{getTotal(dataVec)}}</th>
                </tr>
              </mdb-tbl-head>
            </mdb-tbl>
          </mdb-collapse>
      </div>

      <div style="padding: 20px">
        <div class="title-head-container red z-depth-2">
          <h3 style="text-align: left; position: relative;">III. Características del Área de Influencia</h3>
        </div>
          <mdb-collapse style="position:relative; margin-top:2rem" :toggleTag="['button']" :togglers="1" :toggleClass="['btn btn-primary', 'btn-toggle', 'my-btn']" :toggleText="['']">
            <mdb-tbl>
              <mdb-tbl-head color="red" textWhite>
                <tr>
                  <th style="text-align: justify;">Impactos sinérgicos en la zona</th>
                  <th>Relevancia</th>
                  <th>Puntaje</th>
                </tr>
              </mdb-tbl-head>
              <mdb-tbl-body >
                <tr v-for="(item, index) in dataInf" :key="index">
                  <td style="text-align: justify;"> {{item.name}} </td>
                  <td> {{item.level}} </td>
                  <td> <input class="form-control" style="text-align: center" type="number" v-model="item.pts"> </td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-head color="red" textWhite> 
                <tr>
                  <th style="background: white;"></th>
                  <th>Total inpacto</th>
                  <th style="font-weight: bold">{{getTotal(dataInf)}}</th>
                </tr>
              </mdb-tbl-head>
            </mdb-tbl>
          </mdb-collapse>
      </div>

      <div style="padding: 20px">
        <div class="title-head-container z-depth-2" v-bind:class="color"> 
          <h3 style="text-align: left; position: relative;">Evaluación de Impactos Comunitarios:</h3>
        </div>
          <mdb-collapse style="position:relative; margin-top:2rem" :toggleTag="['button']" :togglers="1" :toggleClass="['btn btn-primary', 'btn-toggle', 'my-btn']" :toggleText="['']">
            <mdb-tbl style="padding: 0.5rem 2rem 0.5rem 2rem">
              <mdb-tbl-head :color="color" textWhite>
                <tr>
                  <th>TI</th>
                  <th>P</th>
                  <th>AI</th>
                  <th>Total</th>
                  <th>Riesgo</th>
                </tr>
              </mdb-tbl-head>
              <mdb-tbl-body >
                <tr>
                  <td class="text-bold ">{{getTotal(dataImp)}}</td>
                  <td class="text-bold ">{{getTotal(dataVec)}}</td>
                  <td class="text-bold ">{{getTotal(dataInf)}}</td>
                  <td  class="text-bold ">{{getTotal(dataImp) + getTotal(dataVec) + getTotal(dataInf) }}</td>
                  <td class="text-bold ">{{ getStringResult() }}</td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-body >
                <tr>
                  <td colspan="3" style="background-color: green; color: white">Impacto Bajo</td>
                  <td  class="text-bold">0 - 15</td>
                  <td></td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-body >
                <tr>
                  <td colspan="3" style="background-color: orange; color: white">Impacto Medio</td>
                  <td class="text-bold ">16 - 25</td>
                  <td></td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-body style="padding-top: 1rem !important">
                <tr >
                  <td colspan="3" style="background-color: red; color: white;">Impacto Alto</td>
                  <td class="text-bold ">26 - 97</td>
                  <td></td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-body >
                <tr>
                  <td colspan="3">Puntaje minimo</td>
                  <td class="text-bold ">0</td>
                  <td></td>
                </tr>
              </mdb-tbl-body>
              <mdb-tbl-body >
                <tr>
                  <td colspan="3">Puntaje maximo</td>
                  <td class="text-bold ">97</td>
                  <td></td>
                </tr>
              </mdb-tbl-body>
            </mdb-tbl>
          </mdb-collapse>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mdbTbl, mdbTblHead, mdbTblBody, mdbCollapse,  } from 'mdbvue';
export default {
  components: {
    Header,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbCollapse
  },
  data () {
    return {
      color: 'orange',
      dataImp: [
        {
          name: 'Aumento de congestión vehicular',
          level: 'Medio',
          pts: 1
        },
        {
          name: 'Afectación a la seguridad del entorno',
          level: 'Medio',
          pts: 1
        },
        {
          name: 'Ruidos (tránsito y descarga de camiones, equipos de clima o electrógenos, otras fuentes de ruido)',
          level: 'Medio',
          pts: 1
        },
        {
          name: 'Contaminación visual (bloqueo de vista o presencia de luces molestas)',
          level: 'Bajo/Nulo',
          pts: 1
        },
        {
          name: 'Residuos y olores asociados a la operación',
          level: 'Medio',
          pts: 1
        },
        {
          name: 'Horarios de construcción extendidos',
          level: 'Medio',
          pts: 1
        },
        {
          name: 'Ruidos y vibraciones de faenas',
          level: 'Medio',
          pts: 1
        },
      ],
      dataVec: [
        {
          name: 'Colindantes - Casa(s) o edificio(s) residencial(es)',
          level: 'No',
          pts: 0
        },
        {
          name: 'Colindantes - No residenciales (comercio, oficinas, industrias)',
          level: 'No',
          pts: 0
        },
        {
          name: 'No colindantes o separados por una calle o pasaje - Residenciales',
          level: 'Si',
          pts: 2
        },
        {
          name: 'No colindantes o separados por una calle o pasaje - No residenciales',
          level: 'Si',
          pts: 1
        }
      ],
      dataInf: [
        {
          name: 'El centro comercial se encuentra en una zona con problemas de congestión vehicular ',
          level: 'Alta',
          pts: 1
        },
        {
          name: 'El centro comercial se encuentra en una zona con problemas de seguridad o actividades delictuales',
          level: 'Baja',
          pts: 2
        },
        {
          name: 'Zona en la que Parque Arauco ha tenido conflictos con trabajadores internos o proveedores',
          level: 'Baja',
          pts: 0
        }
      ]    
    }
  },
  methods: {
    getTotal (array) {
      let acumulador = 0
      array.forEach(element => {
        acumulador = acumulador + (element.pts === '' ?  0 : parseInt(element.pts))
      })
      return acumulador
    },
    getStringResult () {
      let total = this.getTotal(this.dataImp) + this.getTotal(this.dataVec) + this.getTotal(this.dataInf)
      if( total >= 0 && total <= 15 ) {
        this.color = 'green'
        return 'Bajo'
      }
      if( total >= 16 && total <= 25 ) {
        this.color = 'orange'
        return 'Medio'
      }
      if( total >= 26 && total <= 97 ) {
        this.color = 'red'
        return 'Alto'
      }
      
    }
  },
  mounted (){
      var btn = document.getElementsByClassName('my-btn')
      btn.forEach(e => {
        var i = document.createElement('i')
        i.classList = 'fas fa-caret-down'
        e.append(i)
      })
    } 

}
</script>

<style>
.text-bold {
  font-weight: bold; 
  color: #91918e
}
.title-head-container {
  color:white;
  height: 3rem;
  border-radius: 25px 25px 20px 20px;
  padding-left: 25px;
  padding-top: 6px;
}
.btn-toggle {
  position: absolute;
  top: -86px;
  right: 10px;
  border-radius: 150%;
  padding: 0px 14px 0px 14px !important;
  font-weight: bold;
  font-size: 2rem;
}
</style>