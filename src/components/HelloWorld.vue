<template>
<div>
  <mdb-datatable
    :data="data"
    striped
    bordered
  />
  <button @click="adNew" >CLICK</button>
</div>
</template>
<script>
  import { mdbDatatable } from 'mdbvue';
  export default {
    name: 'DatatablePage',
    components: {
      mdbDatatable
    },
    data() {
      return {
        data: {
          columns: [
            {
              label: 'Name',
              field: 'name',
              sort: 'asc'
            },
            {
              label: 'Position',
              field: 'position',
              sort: 'asc'
            },
            {
              label: 'Office',
              field: 'office',
              sort: 'asc'
            },
            {
              label: 'Age',
              field: 'age',
              sort: 'asc'
            },
            {
              label: 'Start date',
              field: 'date',
              sort: 'asc'
            },
            {
              label: 'Salary',
              field: 'salary',
              sort: 'asc',
              format: value => '£' + value
            },
            {
              label: 'Name',
              field: 'name',
              sort: 'asc'
            },
            {
              label: 'Position',
              field: 'position',
              sort: 'asc'
            },
            {
              label: 'Office',
              field: 'office',
              sort: 'asc'
            },
            {
              label: 'Age',
              field: 'age',
              sort: 'asc'
            },
            {
              label: 'Start date',
              field: 'date',
              sort: 'asc'
            },
            {
              label: 'Salary',
              field: 'salary',
              sort: 'asc',
              format: value => '£' + value
            },
            {
              label: 'Name',
              field: 'name',
              sort: 'asc'
            },
            {
              label: 'Position',
              field: 'position',
              sort: 'asc'
            },
            {
              label: 'Office',
              field: 'office',
              sort: 'asc'
            },
            {
              label: 'Age',
              field: 'age',
              sort: 'asc'
            },
            {
              label: 'Start date',
              field: 'date',
              sort: 'asc'
            },
            {
              label: 'Salary',
              field: 'salary',
              sort: 'asc',
              format: value => '£' + value
            }
          ],
          rows: [
            {
              name: 'Tiger Nixon',
              position: 'System Architect',
              office: 'Edinburgh',
              age: '61',
              date: '2011/04/25',
              salary: '320'
            },
            {
              name: 'Garrett Winters',
              position: 'Accountant',
              office: 'Tokyo',
              age: '63',
              date: '2011/07/25',
              salary: '170'
            },
            {
              name: 'Ashton Cox',
              position: 'Junior Technical Author',
              office: 'San Francisco',
              age: '66',
              date: '2009/01/12',
              salary: '86'
            },
            {
              name: 'Cedric Kelly',
              position: 'Senior Javascript Developer',
              office: 'Edinburgh',
              age: '22',
              date: '2012/03/29',
              salary: '433'
            },
            
          ]
        }
      }
    },
    methods: {
      adNew() {
        this.data.rows.push({
              name: 'Tiger Nixon',
              position: 'System Architect',
              office: 'Edinburgh',
              age: '61',
              date: '2011/04/25',
              salary: '320'
            })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>
