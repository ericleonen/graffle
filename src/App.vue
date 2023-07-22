<script setup>
import { onMounted, ref } from 'vue'
import TopBar from './assets/components/TopBar.vue';
import UserSection from './assets/components/UserSection.vue';
import GraphSection from './assets/components/GraphSection.vue';
import { genPoints, absRiemannDiff } from './assets/graphing/func';
import { Expression } from "./assets/math/parse2";
import Dialogue from './assets/components/Dialogue.vue';
import { epsilon } from './assets/graphing/func';
import GameOverModal from './assets/components/GameOverModal.vue';
import GuessesModal from './assets/components/GuessesModal.vue';
import HelpModal from './assets/components/HelpModal.vue';
import { randPick } from './assets/graphing/confetti';
import { answers } from './assets/math/answers';

const origEquationStr = ref(randPick(answers));
const origEquation = ref(new Expression(Expression.stringToArr(origEquationStr.value)));
const userPoints = ref([]);
const origPoints = ref(genPoints(x => origEquation.value.eval(x)));
const guessCount = ref(0);

const shake = ref(false);
const openDialogue = ref(false);
const dialogueMessage = ref('');
const gameOver = ref(false);
const gameOverModalOpen = ref(false);

const guesses = ref([]);
const guessesModalOpen = ref(false);

const helpModalOpen = ref(false);

const makeGuess = (expressionArr) => {
  if (openDialogue.value || gameOver.value) return;

  const expression = new Expression(expressionArr);

  if (!expression.check()) {
    handleError(expression.errorMessage);
    return;
  }

  userPoints.value = genPoints(x => expression.eval(x));
  
  if (userPoints.value.length === 0) {
    handleError('Domain error');
    return;
  }

  const diff = absRiemannDiff(userPoints.value, origPoints.value);

  if (typeof diff === 'string') {
    handleError(diff);
    return;
  }

  guessCount.value++;
  if (Math.abs(diff) < epsilon) {
    dialogueMessage.value = 'Well done!';
    openDialogue.value = true;

    setTimeout(() => {
      openDialogue.value = false;
      gameOver.value = true;
      gameOverModalOpen.value = true;
    }, 1000);

    guesses.value.push({
      expression: Expression.toString(expression.origExpression),
      diff: 0,
      count: guessCount.value
    });
  }
  else {
    const roundedDiff = Math.round(diff * 1000) / 1000;

    guesses.value.push({
      expression: Expression.toString(expression.origExpression),
      diff: roundedDiff,
      count: guessCount.value
    });

    let dialogueStarter = 
      roundedDiff <= 10 ? 'So close, ' :
      roundedDiff <= 50 ? 'Almost there, ' :
      roundedDiff <= 200 ? 'Nice guess, ' :
      roundedDiff <= 500 ? 'Interesting, ' :
      '';

    dialogueMessage.value = dialogueStarter + 'f(x) is off by ' +  roundedDiff;
    openDialogue.value = true;

    setTimeout(() => {
      openDialogue.value = false;
    }, 1000);

    if (guessCount.value === 5) {
      setTimeout(() => {
        gameOver.value = true;
        gameOverModalOpen.value = true;
        guessCount.value = -1;
      }, 1500);  
    }
  }
}

const handleError = (message) => {
  dialogueMessage.value = message;

  shake.value = true;
  openDialogue.value = true;

  setTimeout(() => {
    shake.value = false;
    openDialogue.value = false;
  }, 990);
};

onMounted(() => {
  setTimeout(() => {
    helpModalOpen.value = true;
  }, 200);
});

</script>

<template>
  <main>
    <HelpModal 
      :open="helpModalOpen"
      @close="() => helpModalOpen = false"
    />
    <GuessesModal
      :open="guessesModalOpen"
      :guesses="guesses"
      @close="() => guessesModalOpen = false"
    />
    <GameOverModal 
      :open="gameOverModalOpen" 
      :guesses="guesses"
      @close="() => gameOverModalOpen = false"
      :win="guessCount > 0"
      :answer="origEquationStr"
    />
    <TopBar @openHelpModal="() => helpModalOpen = true"/>
    <Dialogue :open="openDialogue" :message="dialogueMessage"/>
    <GraphSection 
      :userPoints="userPoints"
      :origPoints="origPoints"
    />
    <UserSection 
      @submit="makeGuess"
      :shake="shake"
      :gameOver="gameOver"
      @openGameOverModal="() => gameOverModalOpen = true"
      @openGuessesModal="() => guessesModalOpen = true"
    />
    <p class="guesses-left">{{ guessCount >= 0 && guessCount < 5 ? 5 - guessCount : 'No' }} guess{{ guessCount === 4 ? '' : 'es' }} left</p>
  </main>
</template>

<style scoped>
.guesses-left {
  font-size: small;
  color: var(--gray);
  margin-top: var(--base-v-margin);
}
main {
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .guesses-left {
    font-size: x-small;
  }
}

</style>
