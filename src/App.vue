<template>
  <div class="app">
    <div class="body">
      <div class="body_header">
        <h2 class="text_head">Английский &ndash; Русский Словарь</h2>

      </div>
    </div>
    <DictForm @addWord="addWord"></DictForm>
    <DictResult :dictionary="dictionary"></DictResult>
    <dict-test :dictionary="dictionary"></dict-test>
  </div>
</template>
<script>
import DictForm from "@/components/DictionaryForm.vue";
import DictResult from "@/components/DictionaryResult.vue";
import DictTest from "@/components/DictionaryTest.vue";
/*
*
*
* * */



export default {
  name: "App",
  components: {DictTest, DictResult, DictForm},
  data(){
    return{
      dictionary: [],
    }
  },
  methods:{
    async addWord(word){
      this.dictionary.push(word);
    }
  },
  async created() {
    const response = await fetch('/data/dictionary.csv');
    const csvData = await response.text();

    const lines = csvData.split('\n');
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(',');
      if (currentLine.length === headers.length) {
        const word = {
          en: currentLine[0].trim(),
          ru: currentLine[1].trim(),
        };
        console.log(word);
        this.dictionary.push(word);
      }
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body_header
{
  padding: 50px;
  background-color: #288288;
}
.body{

}
.text_head
{
  width: 100%;
  font-family: Arial;
  font-style: italic;
  font-size: 40px;
  text-shadow: 1px 1px 2px;
  color: #FFB526;
}
.translate_block
{
  flex-direction: column;
  background-color: #052113;
  color: #052113;
}
</style>