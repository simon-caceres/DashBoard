<template>
    <section class="section-container">
        <mdb-container>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <mdbRow class="md-layout  md-alignment-center-center md-selections" >
                <mdbCol sm="3" class="md-layout-item md-item-selects">
                    <router-link to="/gestion"> 
                        <div class="circle-container blue">
                            <mdb-icon  icon="cog" size="5x" class="white-text" style="margin-top: 1.3rem" />
                        </div>  
                        <h2>Gestion</h2>
                    </router-link>
                </mdbCol>
                <mdbCol  sm="3" class="md-layout-item md-item-selects" >
                    <router-link to="/riesgo">
                        <div class="circle-container red">
                            <mdb-icon class="md-size-4x fa fa-exclamation-triangle md-white white-text" style="margin-top: 1rem" size="5x" />
                        </div>
                        <h2>Riesgo</h2>
                    </router-link>
                </mdbCol>
                <mdbCol sm="3" class="md-layout-item md-item-selects">
                    <router-link to="/actores"> 
                        <div class="circle-container green">
                            <mdb-icon class="md-size-4x fa fa-map md-white white-text" style="margin-top: 1rem" size="5x" />
                        </div>
                        <h2>Mapa Actores</h2>
                    </router-link>
                </mdbCol>
                <mdbCol sm="3" class="md-layout-item md-item-selects">
                    <router-link to="/influencia">
                        <div class="circle-container black">
                            <mdb-icon  icon="vector-square" class="white-text" size="5x" style="margin-top: 1rem" />
                        </div>
                        <h2>Area de Influencias</h2>
                    </router-link>
                </mdbCol>
            </mdbRow>
        </mdb-container>
    </section>
  
</template>

<script>

import {mdbContainer, mdbRow, mdbCol, mdbIcon} from 'mdbvue';

export default {
    name: 'select',
    components: {
		mdbContainer,
		mdbRow,
        mdbCol,
        mdbIcon
    }

}
</script>

<style stylus="css" >
    .section-container{
        width: 98%;
        margin: auto;
    }
    .md-selections {
        padding-top: 15vw
    }
    .md-item-selects {
        text-align: center
    }
    .md-item-selects h2 {
        margin-top: 2rem;
        color: rgb(82, 80, 80)
    }
    .md-icon.md-theme-default.md-icon-font.md-white {
        color: white;
    }
    .circle-container {
        margin: auto;
        border-radius: 100%;
        height: 12vw;
        width: 12vw;
        padding-top: 1.3vw;
        -webkit-box-shadow: 4px 4px 5px 0px rgba(138,136,138,1);
        -moz-box-shadow: 4px 4px 5px 0px rgba(138,136,138,1);
        box-shadow: 4px 4px 5px 0px rgba(138,136,138,1);
    }
    .blue {
        background: rgb(32, 112, 231);
    }
    .red {
        background: rgb(199, 14, 14);
    }
    .green {
        background: rgb(29, 138, 29);
    }
    .black {
        background: rgb(17, 17, 17);
    }
    
</style>