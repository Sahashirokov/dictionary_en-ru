<template>
  <div class="body-form">
    <form @submit.prevent="addWord">
      <div class="input_en">
        <input class="input" v-model="newWord.en"  type="text" placeholder="Введите Английское значение" required>
      </div>
      <div class="input_ru">
        <input class="input" v-model="newWord.ru" placeholder="Введите Русское значение" type="text" required>
      </div>
      <div class="btn">
        <button   class="addWord"  type="submit" >Добавить в словарь</button>
      </div>

    </form>
  </div>

</template>

<script>
export default {
  name: "DictForm",
  data(){
    return{
      newWord: {
        en:'',
        ru:'',
      },
    }
  },
  methods:{
    async  addWord(){
      const response = await fetch('http://localhost:8080/addWord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.newWord),
      });
      const word = {
        en:this.newWord.en,
        ru:this.newWord.ru
      }
      this.$emit('addWord',word);
      console.log(this.newWord);
      this.newWord.en = '';
      this.newWord.ru = '';
    }
  }
}
</script>

<style scoped>

.input{
  width: 65%;
  border: 1px solid cornflowerblue;
  padding: 25px;
  height: 200px;
  margin-top: 45px;
  border-radius: 12px;
  text-align:center;
  font-size: 16px;
  font-style: italic;
}
.input_en{
  margin-top: 85px;
  margin-left: 120px;
}
.input_ru{
  margin-left: 120px;
}
.body-form{
  width: 30%;
  height: 100%;
  background-color: #AFF4D3;
  box-sizing: border-box;
  position: fixed;
  vertical-align: center;
}
.addWord{
  font-size: calc(5px + 1vw);
  font-style: italic;
  border: 1px solid cornflowerblue;
  background: rgba(252, 163, 163, 69%);
  color: teal;
  box-sizing: border-box;
  width: 50%;
  padding: 19px;
  border-radius: 12px;
}
.btn
{
  margin-top: 80px;
  margin-left: 160px;
}
</style>