<template>
  <div class="container ">
    <br />
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 align="center">ข้อมูลพืชพรรณ</h1>
    <br />
    <br/>
      <div class= " col-sm-4  bg-dark">
        <div class="show" style="width:100rem; hight: 100rem;" mt-3></div>
        <div :key="key" v-for="(contact, key) in contacts">
            <br/>
          <br />
          <img
            class="card-img-top"
            src="https://plykong27.files.wordpress.com/2014/09/e0b8aae0b8b2e0b8a1e0b8a3e0b989e0b8ade0b8a2e0b8a2e0b8ade0b894.jpg"
            alt="card image cap"
          />
          <br />
          <div class="card-body">
            <b-card bg-variant="success" text-variant="white" title="" sm-4>
              <b-card-text>
                <p>ชื่อ : {{ contact.name }}</p>
                <p>ชื่อวิทยาศาสตร์ : {{ contact.style }}</p>
                <p>ประเภท : {{ contact.category }}</p>
                <p>บริเวณที่พบ : {{ contact.Zone }}</p>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import firestore from '@/database/firebase';

const database = firestore.database();
const contactRef = database.ref('/contacts');
export default {
  name: 'AddData',
  data() {
    return {
      contacts: {},
      name: '',
      style: '',
      category: '',
      zone: '',
      myFile: '',
    };
  },

  mounted() {
    contactRef.on('value', (snapshot) => {
      this.contacts = snapshot.val();
    });
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 px;
}

h1 {
  margin: 10px;
  font-weight: 100;
  text-align: center;
  color: back;
}
.card-img-top {
  max-width: 1000px;
  margin-left: 1%;
  margin-right: 1%;
}
.card-body {
  align-items: center;
}

</style>
