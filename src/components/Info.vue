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
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col" style="text-align: right;">Antecedentes históricos <strong style="margin-left: 8px"> Sí = 7 </strong></div>
              <div class="col"><strong> NO = 0 </strong></div>
            </div>
            <div class="row">
              <div class="col" style="text-align: right;">Carácterísticas del territorio<strong style="margin-left: 8px"> Sí = 7 </strong></div>
              <div class="col"><strong> NO = 0 </strong></div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">Definciones de las variables:</td>
        </tr>
        <th colspan="5" style="text-align: center; background: #eee"><span >Indicaciones para llenado de la matriz</span></th>
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col">
                1. Comuna en la que ha existido oposición de autoridades o vecinos a proyectos
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Considera la oposición de autoridades o vecinos, actual o pasada, a cualquier tipo de proyecto de inversión en el territorio (tanto inmobiliario como de otros 
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                2. Comuna en que Parque Arauco ha tenido algún conflicto con autoridades o vecinos
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Considera los conflictos y oposición que haya tenido la empresa, ya sea con el proyecto que se está evaluando, o con otro proyecto o activo en la misma comuna.
              </div>
            </div>
          </td>
        </tr>
        <th colspan="5" style="text-align: center; background: #eee"><span >Características del territorio</span></th>
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col">
                3. Área o zona con alta congestión vehicular
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Existe alta congestión vehicular en al menos un determinado momento del día en las calles y avenidas cercanas al proyecto o activo.
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                4. Área o zona de alto riesgo delictual o problemas graves de seguridad
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Existen graves problemáticas de seguridad o riesgo delictual asociado a zonas especificas de la comuna o a dínamicas urbanas del sector.
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                5. Terreno valorado por la comunidad (valor de uso productivo o agrícola del terreno; áreas verdes, árboles, zona de patrimonio o inmuebles históricos valorados por la comunidad)
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                El terreno en el que se instalará el proyecto es valorado por la comunidad y por tanto el proyecto podría generar controversia al utilizarlo. Algunos usos valorados del terreno pueden ser: uso agrícola, destinación a otros usos en plan regulador (educacional, cultural, áreas verdes), existencia de áreas verdes o árboles valorados, presencia de inmuebles históricos, patrimoniales o valorados como tales por la comunidad)
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="5" style="color: #35ad39; font-style:italic">
            Indicaciones para la búsqueda de información:
          </td>
        </tr>
        <tr>
          <td colspan="5">
              Para los antecedentes históricos, se debe realizar una <strong> revisión de prensa rápida </strong> que permita identificar oposiciones, manifestaciones o conflictos en función de otros proyectos de inversión en el área de influencia y con Parque Arauco. 
  Si se está aplicando esta herramienta a un proyecto, la búsqueda debe apuntar a identificar conflictos que hayan tenido lugar en la zona debe hacerse hincapié en otros conflictos en la zona, mientras que para el caso de un activo en funcionamiento es relevante indagar además en torno a noticias asociadas la construcción del mismo activo, y de otros proyectos de inversión en la zona.   
          </td>
        </tr>
        <tr>
          <th colspan="5" style="text-align: left; background: #f49d50; color: white"><span >II. Impactos del proyecto o activo </span></th>
        </tr>
        <tr>
          <td colspan="5">
            <div class="row" style="padding: 1px 15px 1px 15px">Cada variable busca medir si los vecinos se verán afectados por cada uno de los impactos listados</div>
            <div class="row" style="padding: 1px 15px 1px 15px">Para cada uno de los impactos definidos, se definen 3 posibles niveles de impacto:.</div>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <div class="row" style="padding: 1px 15px 1px 15px"> <strong style="color: #3dce42; margin-right: 9px">Nulo: </strong>  No existe o existirá este impacto sobre los vecinos (Puntaje = 0).</div>
            <div class="row" style="padding: 1px 15px 1px 15px"> <strong style="color: #3c9e3f; margin-right: 9px">Bajo:  </strong> Los vecinos se verán un poco afectados por este elemento o proceso (Puntaje = 1).</div>
            <div class="row" style="padding: 1px 15px 1px 15px"> <strong style="color: #e03f1f; margin-right: 9px">Medio o alto: </strong>  Los vecinos se verán bastante o muy afectados por este elemento o proceso (Puntaje = 2).</div>
          </td>
        </tr>
        <tr >
          <td colspan="5">Definciones de las variables:</td>
        </tr>
        <th colspan="5" style="text-align: center; background: #eee"><span >Construcción</span></th>
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col">
                6. Horarios de construcción extendidos
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por la extensión de los horarios de construcción, que pueden estar asociados a la existencia de plazos muy acotados para la entrega de un proyecto u otros condicionantes.
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                7. Ruidos y vibraciones de faenas
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por la generación de ruidos y vibraciones molestos asociados a la construcción.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col">
                8. Aumento de congestión vehicular
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por un aumento en la congestión vehicular en las calles y avenidas próximas, ya sea por el aumento del número de vehículos que transitan en fase de cosntrucción, o por el cierre total o parcial de alguna vía en algún momento de esta fase.
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                9. Tránsito de vehículos pesados de construcción
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por el tránsito de camiones y otros vehículos de construcción, lo cual puede generar afectaciones en materias de seguridad vial, contaminación acústica, congestión vehicular y daños a calles o árboles.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col">
                10. Levantamiento de polvo
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por la generación de polvo y material en suspensión en la fase de construcción.
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                11. Detonaciones o demoliciones
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por detonaciones o demoliciones que se realicen en el proceso de la construcción.
              </div>
            </div>
          </td>
        </tr>
        <th colspan="5" style="text-align: center; background: #eee"><span >Operación</span></th>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                12. Aumento de congestión vehicular
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por el aumento de la congestión vehicular en las calles y avenidas próximas, asociadas al aumento del número de vehículos debido a la existencia del activo, o al uso de dichas calles como estacionamientos irregulares.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col">
                13. Ruidos 
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por ruidos asociados a la operación del activo, como el tránsito y descarga de camiones, los equipos de clima o electrógenos u otras fuentes de ruido.
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5">
            <div class="row">
              <div class="col">
                14. Contaminación visual
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por la presencia del activo debido a luces molestas o carteles que generen contaminación visual, o bien debido a que la infraestructura implique un bloqueo visual del paisaje para los vecinos.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <div class="row">
              <div class="col">
                15. Residuos y olores asociados a la operación 
              </div>
              <div class="col" style="border-left: 1px solid #eee">
                Definir si los vecinos se verán o no afectados por los residuos asociados a la operación (gestión y retiro de basura, generación de residuos por los usuarios del centro comercial) o por olores emitidos debido a dicha operación (residuos, restaurantes, patios de comida).
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td colspan="5" style=" color: #e03f1f">
           Indicaciones para el llenado y la búsqueda de información
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <div class="row" style="padding: 1px 15px 10px 15px">
              Tanto para proyectos a construir como para ampliaciones, será necesario responder ambas dimensiones de impactos: construcción y operación. Solo para el caso de activos en operación se responde solo una de ellas, la de operación, omitiendo los impactos de construcción.
            </div>
            <div class="row" style="padding: 1px 15px 10px 15px">
              Para responder sobre los impactos en etapa de construcción, se debe utilizar los insumos de los estudios que se tengan a disposición. Para el caso de operación el center manager de responder de acuerdo a su criterio y utilizar como insumo, si existe, información de las plataformas disponibles como por ejemplo, Servicio al Cliente, Ethics Point u otro.
            </div>
          </td>
        </tr>
        <th colspan="5" style="text-align: left;  color: white" class="indigo"><span >III. Ponderador de impactos: tipos de vecinos </span></th>
        <tr>
          <td colspan="5">Se define un valor para ponderar los impactos de acuerdo a dos variables que caracterizan el tipo de vecinos del proyecto o activo:</td>
        </tr>
        <tr >
          <td colspan="5" >
            <div class="row" style="padding: 1px 15px 5px 15px"><strong style="margin-right: 8.6rem">Colindante: </strong> Comparte un muro o pandereta con el proyecto o activo.</div>
            <div class="row" style="padding: 1px 15px 5px 15px"><strong style="margin-right: 7.4rem">No colindante: </strong>Se encuentra separado del proyecto o activo por al menos una calle o pasaje</div>
            <div class="row" style="padding: 1px 15px 5px 15px"><strong style="margin-right: 9rem"> Residente:</strong>Edificios o casas de uso residencial</div>
            <div class="row" style="padding: 1px 15px 5px 15px"><strong style="margin-right: 8rem"> No residente:</strong>Edificios o casas con otros usos: industrias, oficinas, comercio</div>
          </td>
        </tr>
        <tr>
          <td colspan="5">Debe responderse "Sí" a todos los tipos de vecinos que correspondan. Luego, la fórmula de cálculo del ponderador de impactos <strong> seleccionará el mayor ponderador </strong> para utilizarlo en la fórmula. </td>
        </tr>
        <th colspan="5" style="text-align: left;color: white; background: #f2b179" ><span >III. Ponderador de impactos: tipos de vecinos </span></th>
        <tr>
          <td colspan="5">
            <div class="row" style="padding: 1px 15px 5px 15px">
              La presente matriz realiza de manera automática los cálculos una vez que se llenen las celdas anteriormente descritas <strong> No se debe modificar ninguna de las fórmulas incorporadas en la hoja "Matriz"</strong>pues podría afectar el cálculo final del factor de pertinencia comunitaria.
            </div>
            <div class="row" style="padding: 1px 15px 5px 15px">
              El valor obtenido de la fórmula será el factor de PC del proyecto. Según este puntaje, se definen en la hoja "Clasificación" los distintos requerimientos que tendrá el proyecto en materia de relacionamiento comunitario.
            </div>
          </td>
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