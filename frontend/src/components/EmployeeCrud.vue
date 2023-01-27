<template>
  <div>
    <h2>Registro de empleados</h2>
    <form @submit.prevent="save">
      <div class="form-group">
        <label>Identificador</label>
        <input type="text" v-model="employees.UserId" class="form-control" placeholder="Identificador del usuario">

      </div>
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" v-model="employees.UserName" class="form-control" placeholder="Nombre">

      </div>

      <div class="form-group">
        <label>Fecha</label>
        <input type="text" v-model="employees.Date" class="form-control" placeholder="Fecha">

      </div>

      <div class="form-group">
        <label>Hora entrada</label>
        <input type="text" v-model="employees.PunchIn" class="form-control" placeholder="Entrada">

      </div>

      <div class="form-group">
        <label>Hora salida</label>
        <input type="text" v-model="employees.PunchOut" class="form-control" placeholder="Salida">

      </div>

      <button type="submit" class="btn btn-primary">Save</button>
    </form>

    <h2>employees View</h2>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User Id</th>
          <th scope="col">User Name</th>
          <th scope="col">Date</th>
          <th scope="col">PunchIn</th>
          <th scope="col">PunchOut</th>
          <th scope="col">Option</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="employees in result" v-bind:key="employees._id">

          <td>{{ employees._id }}</td>
          <td>{{ employees.UserId }}</td>
          <td>{{ employees.UserName }}</td>
          <td>{{ employees.Date }}</td>
          <td>{{ employees.PunchIn }}</td>
          <td>{{ employees.PunchOut }}</td>
          <td>
            <button type="button" class="btn btn-warning" @click="edit(employees)">Edit</button>
            <button type="button" class="btn btn-danger" @click="remove(employees)">Delete</button>
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)


export default {
  name: 'EmployeeCrud',
  data () {
    return {
      result: {},
      employees: {
        _id: '',
        UserId: '',
        UserName: '',
        Date: '',
        PunchIn: '',
        PunchOut: ''

      }
    }
  },
  created () {
    this.EmployeeLoad()
  },
  mounted () {
    console.log("mounted() called.......");
  },

  methods: {
    EmployeeLoad() {
      var page = "http://localhost:8000/user/getAll";
      axios.get(page)
        .then(
          ({ data }) => {
            console.log(data);
            this.result = data.data;
          }
        );
    },






    save() {
      if (this.employees._id == '') {
        this.saveData();
      }
      else {
        this.updateData();
      }

    },
    saveData() {
      axios.post("http://localhost:8000/user/create", this.employees)
        .then(
          ({ data }) => {
            alert("saveddddd");
            this.EmployeeLoad();
          }
        )

    },
    edit(employees) {
      this.employees = employees;

    },
    updateData() {
      var editrecords = 'http://localhost:8000/user/update/' + this.employees._id;
      axios.patch(editrecords, this.employees)
        .then(
          ({ data }) => {
            this.employees.UserId = '';
            this.employees.UserName = '',
              this.employees.Date = '',
              this.employees.PunchIn = '',
              this.employees.PunchOut = ''
            this.id = ''
            alert("Updated!!!");
            this.EmployeeLoad();
          }
        );

    },

    remove (employees) {
      var url = `http://localhost:8000/user/delete/${employees._id}`;
      axios.delete(url)
      alert("Deleteddd")
      this.EmployeeLoad ()
    }
  }
}

</script>