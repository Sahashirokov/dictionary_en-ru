<template>
  <div class="body_test">
    <button class="btn" @click="startTest" v-show="!testStarted">Начать тест</button>
    <div v-if="testStarted">
      <h3 v-if="showWordAndInput" id="text">{{ currentWord.en }}</h3>
      <input v-if="showWordAndInput" v-model="userTranslation" type="text" />
      <button v-if="showWordAndInput" @click="checkTranslation" class="btn">Проверить</button>
      <p class="text" v-if="showResult">{{ result }}</p>
      <p class="text" v-if="showCorrectAnswer">Правильно:{{ currentWord.ru}}</p>
      <button v-if="showNextButton" @click="nextWord" class="btn">Продолжить</button>
    </div>
    <div v-if="testCompleted">
      <h3 class="text">Тест пройден</h3>
      <p class="text">Кол-во правильных слов {{ correctAnswers }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DictTest",
  props: {
    dictionary: {
      type: Array,
      required: true,
    },
  },
  data(){
    return{
      testStarted: false,
      testCompleted: false,
      currentWord: null,
      userTranslation: '',
      result: '',
      showResult: false,
      showCorrectAnswer: false,
      showNextButton: false,
      correctAnswers: 0,
      currentIndex: 0,
      showWordAndInput: true,
    }
  },
  methods:{
    startTest() {
      this.testStarted = true;
      this.getNextWord();
    },
    getNextWord() {
      this.showWordAndInput=true;
      if (this.currentIndex < this.dictionary.length) {
        this.currentWord = this.dictionary[this.currentIndex];
        this.currentIndex++;
      } else {
        this.testCompleted = true;
        this.showWordAndInput=false;
        this.showNextButton = false;
      }
      this.userTranslation = '';
      this.result = '';
      this.showResult = false;
      this.showCorrectAnswer = false;
      this.showNextButton = false;
    },
    checkTranslation() {
      this.showWordAndInput=false;
      if (this.userTranslation.toLowerCase() === this.currentWord.ru.toLowerCase()) {
        this.result = 'Правильно!';
        this.correctAnswers++;
      } else {
        this.result = 'Неправильно!';
      }
      this.showResult = true;
      this.showCorrectAnswer = true;
      this.showNextButton = true;
    },
    nextWord() {
      this.getNextWord();
    },
  }
}
</script>

<style scoped>
.body_test
{
  width: 30%;
  box-sizing: border-box;
  position: fixed;
  margin-left: 70%;
  background-color: #F8BB8F;
  height: 100%;
}
.btn{
  font-size: calc(5px + 1vw);
  font-style: italic;
  border: 1px solid cornflowerblue;
  background: rgba(252, 163, 163, 69%);
  color: teal;
  box-sizing: border-box;
  width: 40%;
  padding: 19px;
  border-radius: 12px;
  box-sizing: border-box;
  margin-left: 27%;
  margin-top: 25%;
}
.text
{
  color: teal;
  margin-left: 35%;
  margin-top: 25%;
  font-size: 18px;
  font-family: Arial;
  font-style: Italic;
}
input
{
  margin-left: 25%;
  width: 45%;
  border: 1px solid cornflowerblue;
  padding: 25px;
  height: 100px;
  margin-top: 45px;
  border-radius: 12px;
  text-align:center;
  font-size: 16px;
  font-style: italic;
}
h3{
  color: teal;
  margin-left: 42%;
  margin-top: 25%;
  font-size: 18px;
  font-family: Arial;
  font-style: Italic;
}
</style>