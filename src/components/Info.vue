<template>
  <div>
    <mdb-tbl>
      <mdb-tbl-head>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body>
        <tr>
          <th colspan="2">I. Características del Área de Influencia (AI)</th>
          <td colspan="3">Considera las características del área en la que se inserta el proyecto: sus antecedentes históricos y ciertas características que lo hacen más sensible en materia comunitaria.</td>
        </tr>
        <tr>
          <th colspan="2">II. Impactos del proyecto o activo (TI)</th>
          <td colspan="3">Considera los impactos potenciales o efectivos, dando un puntaje según dichos impactos sean nulos, bajos, o medio/altos.</td>
        </tr>
        <tr>
          <th colspan="2">III. Ponderador de impactos: tipo de vecinos (P)</th>
          <td colspan="3">Define un ponderador según si el proyecto tiene vecinos colindantes o no colindantes, y en edificios residenciales o no residenciales.</td>
        </tr>
        <tr>
            <td colspan="5">De esta manera, el cálculo final del puntaje consiste en la siguiente fórmula:</td>
        </tr>
        <tr >
            <td colspan="5">
                <img src="@/assets/img/factor.png" alt="" srcset="" width="100%" >
            </td>
        </tr>
      </mdb-tbl-body>
        <th colspan="5" style="text-align: center; background: #eee"><span >Indicaciones para llenado de la matriz</span></th>
        <tr>
            <td colspan="5">Para cada una de las variables indicadas, debe indicarse si dicha área cumple o no con la característica señalada.</td>    
        </tr>
        <tr>
            <td colspan="5">Dependiendo de la relevancia de la variable en cuestión, el "sí" es valorado con distintos puntajes:</td>    
        </tr>
    </mdb-tbl>
  </div>
</template>

<script>
  import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
  export default {
    name: 'TablePage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    }
  }
</script>