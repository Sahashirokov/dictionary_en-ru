<template>
  <div class="body_center">
    <ul class="list_translate">
      <li v-for="(word, index) in dictionary" :key="index">
        <div class="list"> <strong>{{word.en}}</strong> &ndash; {{word.ru}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DictResult",
  props:{
    dictionary:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>
.body_center{
  box-sizing: border-box;
  width: 40%;
  position: fixed;
  margin-left: 30%;
  background-color: #65D484;
  height: 100%;
}
.list_translate
{
  box-sizing: border-box;
  margin-left: 45%;
  list-style-type:  none;
}
.list{
  font-size: 16px;
  font-family: Arial;
  font-style: Italic;
}
</style>