<template>
  <mdb-container>
		<mdb-row>
			<mdb-col sm="6" style="margin: auto; margin-top: 5rem">
        <mdb-card>
          <mdb-card-body>
            <form>
              <p class="h4 text-center py-4">Parque Arauco Comunidad</p>
              <div class="grey-text">
                <mdb-input label="Nombre de usuario" icon="user" group type="text" validate error="wrong" success="right" style="margin-top:3rem"/>
                <mdb-input label="Contraseña" icon="lock" group type="password" validate style="margin-top:3rem"  />
              </div>
              <div class="text-center py-4 mt-3">
                <mdb-btn color="cyan" type="submit" @click="onClick">Ingresar</mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
 </mdb-container>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    props: ['stateForm'],
    components: {
      mdbInput,
      mdbBtn,
      mdbCard,
      mdbCardBody,
      mdbContainer, 
      mdbRow, 
      mdbCol,
    },
    data: () => ({
      boolean: true,
      password: null,
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        gender: {
          required
        },
        email: {
          required,
          email
        }
      }
    },
    mounted () {
    },
    methods: {
      onClick () {
        this.$router.push({name: 'home'})
      },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="css">
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .md-form .prefix {
    left: 0 !important;
  }
  
</style>