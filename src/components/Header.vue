<template>
<div>
  <mdb-navbar color="indigo" dark>
    <mdb-navbar-brand>
      <a href="#" class="open-menu">
        <mdb-icon icon="bars" class="white-text" />
      </a>
      
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-dropdown tag="li" class="nav-item" start>
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed class="px-3">
            <mdb-icon icon="user-astronaut" />
            Usuario
          </mdb-dropdown-toggle>
          <mdb-dropdown-menu color="primary" style="width: 100%">
            <mdb-dropdown-item>Action</mdb-dropdown-item>
            <mdb-dropdown-item>Tareas</mdb-dropdown-item>
            <mdb-dropdown-item>Cerrar Sesion</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
  <!-- Wrapper -->
<div class="wrapper">
 
    <!-- Sidebar -->
    <nav class="sidebar">
 
        <!-- close sidebar menu -->
        <div class="dismiss">
            <i class="fas fa-arrow-left"></i>
        </div>
 
        <div class="logo">
            <h3><a href="index.html">Bootstrap 4 Template with Sidebar Menu</a></h3>
        </div>
 
        <ul class="list-unstyled menu-elements">
            <li class="active">
                <router-link class="scroll-link" to="/home"><i class="fas fa-home"></i> Home</router-link>
            </li>
            <li>
                <router-link class="scroll-link" to="/gestion"><i class="fas fa-cog"></i> Gestion</router-link>
            </li>
            <li>
                <router-link class="scroll-link" to="/riesgo"><i class="fas fa-exclamation-triangle"></i> Riesgo</router-link>
            </li>
            <li>
                <router-link class="scroll-link" to="/actores"><i class="fas fa-map"></i> Mapa Actores</router-link>
            </li>
            <li>
               <router-link class="scroll-link" to="/influencia"><i class="fas fa-vector-square"></i> Area de Influencias</router-link>
            </li>
           <!-- <li>
                <a href="#otherSections" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" role="button" aria-controls="otherSections">
                    <i class="fas fa-sync"></i>Other sections
                </a>
                <ul class="collapse list-unstyled" id="otherSections">
                    <li>
                        <a class="scroll-link" href="#section-3">Our projects</a>
                    </li>
                    <li>
                        <a class="scroll-link" href="#section-4">We think that...</a>
                    </li>
                </ul>
            </li> -->
        </ul>
 
        <div class="to-top">
            <a class="btn btn-primary btn-customized-3" href="#" role="button">
                <i class="fas fa-arrow-up"></i> Top
            </a>
        </div>
 
        <div class="dark-light-buttons">
            <a class="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
            <a class="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
        </div>
 
    </nav>
    <!-- End sidebar -->
 
    <!-- Dark overlay -->
    <div class="overlay"></div>
    <!-- Content -->
    <div class="content">
 
        <!-- open sidebar menu -->
        
 
        <!-- ... -->
 
        <!-- here is the page's content (not shown here) -->
 
        <!-- ... -->
 
    </div>
    <!-- End content -->
 
</div>
<!-- End wrapper -->
</div>
</template>

<script>
import jQuery from 'jquery'

import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle,  mdbDropdownItem, mdbIcon,  } from 'mdbvue';
export default {
    props: ['title',],
    name: 'Header',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      //mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbIcon
      //mdbInput
    },
    mounted () {
      
      jQuery(document).ready(function() {
        
          jQuery('.dismiss, .overlay').on('click', function() {
              jQuery('.sidebar').removeClass('active');
              jQuery('.overlay').removeClass('active');
          });
      
          jQuery('.open-menu').on('click', function(e) {
              e.preventDefault();
              jQuery('.sidebar').addClass('active');
              jQuery('.overlay').addClass('active');
              // close opened sub-menus
              jQuery('.collapse.show').toggleClass('show');
              jQuery('a[aria-expanded=true]').attr('aria-expanded', 'false');
          });
      
          /* other code */
      
      });
    }

}
</script>

<style>
.md-icon.md-theme-default.md-icon-font.md-white {
        color: white;
    }
.md-title {
    color: white !important
}
.md-color {
    color: white !important;
    background: #004bae !important;
    background-color: #004bae !important;
}

/***** Wrapper *****/
 
.wrapper {
    display: block;
}
 
/***** Sidebar *****/
 
.sidebar {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -255px;
    z-index: 999;
    background: #333;
    color: #fff;
    transition: all .3s;
    box-shadow: 3px 3px 3px rgba(51, 51, 51, 0.5);
    text-align: left;
}
 
.sidebar.active {
    left: 0;
}
 
/***** Content *****/
 
.content {
    width: 100%;
    transition: all 0.3s;
}
/***** Dark overlay *****/
 
.overlay {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(51, 51, 51, 0.7);
    z-index: 998;
    opacity: 0;
    transition: all .5s ease-in-out;
}
 
.overlay.active {
    display: block;
    opacity: 1;
}

 
.open-menu.btn-customized,
.open-menu.btn-customized:hover, 
.open-menu.btn-customized:active, 
.open-menu.btn-customized:focus, 
.open-menu.btn-customized:active:focus, 
.open-menu.btn-customized.active:focus,
.open-menu.btn-customized.btn.btn-primary:not(:disabled):not(.disabled):active,
.open-menu.btn-customized.btn.btn-primary:not(:disabled):not(.disabled):active:focus {
    box-shadow: 3px 3px 3px rgba(51, 51, 51, 0.2);
}
 
/* Style for all buttons with the class btn-customized */
 
a.btn-customized {
    margin-left: 5px;
    margin-right: 5px;
    padding: .75rem 1.5rem;
    background: #f35b3f;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
    box-shadow: none;
}
 
a.btn-customized:hover, 
a.btn-customized:active, 
a.btn-customized:focus, 
a.btn-customized:active:focus, 
a.btn-customized.active:focus,
a.btn-customized.btn.btn-primary:not(:disabled):not(.disabled):active,
a.btn-customized.btn.btn-primary:not(:disabled):not(.disabled):active:focus {
    outline: 0;
    background: #cd533d; /* for browsers that don't recognize rgba */
    background: rgba(243, 91, 63, 0.7);
    border: 0;
    color: #fff;
    box-shadow: none;
}
.dismiss {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all .3s;
    background: #444;
    border-radius: 4px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
}
 
.dismiss:hover,
.dismiss:focus {
    background: #555;
    color: #fff;
}
sidebar .logo {
    padding: 40px 20px;
    border-bottom: 1px solid #444;
    transition: all .3s;
}
 
.sidebar .logo a {
    display: inline-block;
    width: 172px;
    height: 34px;
    
    border: 0;
    text-indent: -999999px;
}
.sidebar ul.menu-elements {
    padding: 10px 0;
    border-bottom: 1px solid #444;
    transition: all .3s;
}
 
.sidebar ul li a {
    display: block;
    padding: 10px 20px;
    border: 0;
    color: #fff;
}
 
.sidebar ul li a:hover,
.sidebar ul li a:focus,
.sidebar ul li.active > a:hover,
.sidebar ul li.active > a:focus {
    outline: 0;
    background: #555;
    color: #fff;
}
 
.sidebar ul li a i {
    margin-right: 5px;
}
 
.sidebar ul li.active > a,
a[aria-expanded="true"] {
    background: #444;
    color: #fff;
}
 
.sidebar ul ul a {
    background: #444;
    padding-left: 30px;
    font-size: 14px;
}
 
.sidebar ul ul li.active > a {
    background: #555;
}
 
.sidebar a[data-toggle="collapse"] {
    position: relative;
}
 
.sidebar .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
.sidebar .to-top {
    padding: 20px;
    text-align: center;
}
 
a.btn-customized-3 {
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: .75rem 1.5rem;
    background: #444;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
    box-shadow: none;
}
 
a.btn-customized-3:hover, 
a.btn-customized-3:active, 
a.btn-customized-3:focus, 
a.btn-customized-3:active:focus, 
a.btn-customized-3.active:focus,
a.btn-customized-3.btn.btn-primary:not(:disabled):not(.disabled):active,
a.btn-customized-3.btn.btn-primary:not(:disabled):not(.disabled):active:focus {
    outline: 0;
    background: #555;
    border: 0;
    color: #fff;
    box-shadow: none;
}
 
a.btn-customized-3 i {
    margin-right: 5px;
}
.sidebar .dark-light-buttons {
    padding: 10px 20px 30px 20px;
    text-align: center;
}
 
a.btn-customized-4 {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 0 3px;
    padding: 0;
    background: #444;
    border: 0;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
    box-shadow: none;
    text-indent: -999999px;
}
 
a.btn-customized-4.btn-customized-dark {
    background: #222;
}
 
a.btn-customized-4.btn-customized-light {
    background: #fff;
}
 
a.btn-customized-4.btn-customized-dark:hover, 
a.btn-customized-4.btn-customized-dark:active, 
a.btn-customized-4.btn-customized-dark:focus, 
a.btn-customized-4.btn-customized-dark:active:focus, 
a.btn-customized-4.btn-customized-dark.active:focus,
a.btn-customized-4.btn-customized-dark.btn.btn-primary:not(:disabled):not(.disabled):active,
a.btn-customized-4.btn-customized-dark.btn.btn-primary:not(:disabled):not(.disabled):active:focus {
    outline: 0;
    background: #555;
    border: 0;
    color: #fff;
    box-shadow: none;
}
 
a.btn-customized-4.btn-customized-light:hover, 
a.btn-customized-4.btn-customized-light:active, 
a.btn-customized-4.btn-customized-light:focus, 
a.btn-customized-4.btn-customized-light:active:focus, 
a.btn-customized-4.btn-customized-light.active:focus,
a.btn-customized-4.btn-customized-light.btn.btn-primary:not(:disabled):not(.disabled):active,
a.btn-customized-4.btn-customized-light.btn.btn-primary:not(:disabled):not(.disabled):active:focus {
    outline: 0;
    background: #555;
    border: 0;
    color: #fff;
    box-shadow: none;
}
</style>