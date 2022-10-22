<script setup lang="ts">
import TheOptions from './components/TheOptions.vue';
import TheField from './components/TheField.vue';
import { useRoundStore } from './stores/roundStore';
import TheResult from './components/TheResult.vue';
import { onMounted, ref } from 'vue';
import { assetsPath } from './urls.config';

const roundStore = useRoundStore();

const backgroundImage = ref('');
onMounted(() => {
  backgroundImage.value = `url('${assetsPath + 'IMG_6622.JPG'}')`;
});


</script>

<template>
  <div class="app" :style="{backgroundImage}">
  <header>
    Memo-minecraft
  </header>
  <div 
        class="result"
        v-if="!roundStore.round.started && roundStore.round.errors > -1"
      >
      {{roundStore.round.errorsStr}}
  </div>
  <main>
    <div class="wrapper">

      <TheOptions />
      <!-- <button 
        :disabled="roundStore.round.started" 
        type="button" 
        @click="roundStore.round.start"
      >
      Play
      </button> -->
      <div class="minecraft-btn" @click="roundStore.round.start">Play</div>
      <TheField />
    </div>
  </main>
  </div>
</template>

<style scoped>



.app {
  /* background-image: url('src/assets/images/IMG_6622.JPG'); */
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.result {
  /* margin-top: 20px; */
  font-size: 11px;
  color: white;
  /* color: green; */
  /* filter: invert(100%); */
  font-family: "Minecrafter Alt";
  letter-spacing: 0.5;
  /* background-color: white; */
  /* background-color: rgba(255, 255, 255, 0.5); */
  /* padding: 10px 10px 0px 10px; */
  position: absolute;
  /* top: 500px; */
  bottom: 10vh;
  left: 3vw;
  font-family: 'Minecraftia', sans-serif;
                                                
}

button:hover:enabled {
  /* background-color: rgba(45, 155, 142, 0.9); */
  cursor: pointer;
}

button:disabled {
  /* color: gray; */
  /* background-color: rgba(100, 233, 217, 0.3); */
  visibility: hidden;

}
.wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  font-size: 18px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  line-height: 1.5;
  text-align: center;
  padding-top: 20px;
}

button {
  /* background-color: rgba(100, 233, 217, 0); */
  background-color: gray;
  width: 275px;
  border-style: none;
  color: white;
  font-weight: 200;
  padding: 3px 20px;
  font-size: 14px;
  box-shadow: -2px -2px white ;
  margin-bottom: 20px;
  border: 1px solid black;
  /* font-family: "MINECRAFT PE"; */
  font-family: 'Minecraftia', sans-serif;

}

@media screen and (min-width: 320px) {
  header {
    font-size: calc(18px + 14 * ((100vw - 320px) / 680));
  }
  button {
    font-size: calc(14px + 6 * ((100vw - 320px) / 680));
  }

  .result {
    font-size: calc(11px + 5 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  header {
    font-size: 32px;
  }
  button {
    font-size: 20xp;
  }
  .result {
    font-size: 16px;
  }
}


.mc-button {
	/* height: var(--btn-size);
	width: calc(var(--btn-size) * 10); */
	cursor: pointer;
	overflow: hidden;
	white-space: nowrap;
	user-select: none;

	background: #999 url('https://i.ibb.co/rb2TWXL/bgbtn.png') center / cover;
	image-rendering: pixelated;
	border: 2px solid #000;
	
}
	/* Mouse over */
	.mc-button:hover .title {
		background-color: rgba(100, 100, 255, .45);
		text-shadow: 2px 2px #202013CC;
		color: #FFFFA0;
	}
	.mc-mutton:active .title {
		box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;
	}
	/* Button title */
	.title {
		width: 100%; height: 100%;
		padding-bottom: .3em;
		/* @include flex-center-hv; */
		
		color: #DDD;
		text-shadow: 2px 2px #000A;
		box-shadow: inset -2px -4px #0006, inset 2px 2px #FFF7;
	}


.minecraft-btn {
  cursor: pointer;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAPCAAAAACe4j/AAAAEuElEQVRIx1WWS5Ibuw5EtddrdRRJJE4iSKrb4c2/AUuy30iK+jEBHCTwAICMCgAKiGhKVQUwKzJHQo4mQGBy7AIvk1E2AQKhFt6bUGD1gILy0DkD4dmzACkGyzCScgFgQmLZr4LpQpC56QB2wgSYE8i1fd6xd1yPHIAKwAs14Undx2LIHK0X6vdFbzTa6CNBLQE8Y5rapn7oAl3KSDKC6cLfL6sLnIVG7ffnyUgvQ6rwLjUZdIVqWz0iEXXCZ+TJsV8feUdoPHDk+a/IeAbq0ldLT59jtHweHwmKS6gFSUYCqKcVsPami1pEnqolkCMBiAS87FXTICp03geYUr8TV8un3KuyC0BfTUzihOCdwjUya1bkT9VWe+AaFOoJzHdtERXRe/eulyEDhC6pjYwr+JQuIDU9/0wQBnJEAkd+9i6IRTJrV7YWnGfwLA6ESphkBoCu88M0YH1CTTOiRUpDdwpGkkP5yL9phhwn+QVxDarAXq513y9bLKgxBGR/CjDyMl4ECd6lO82CaMLbEHGHp1R8ePDERj392ssaCOigNjJ+dXXl6OLUFfVx6dA1BFJLlHpkUHPam095C3QJLIjn6OLIOB3xe0JS85Zd+govg1/z/UhtG3RdVW98yxNp5I0Vtf/U+6y/dJ/yHtSK4q7G9ARscC3/Df/kXTwiT3d6ovjEISLJIVEvBwWeCXlALZTbpy85xqWuf3sNiBBUmYjI+BqN6aNQqDWpipSYf3W1nOV/WALoykjIiCPreSn97UigsjZdPA5s3AmCDIxaVO0Fa1fV/qkaiijPPz/bEeRyLSBDI8K8j37TO8aH7vmOqUUQ1DboYhvqd+FlFGEo+2T75MbLGnjvPeu7Pl521Ap14dcR3h7p75qv4xieqnNDoyCPLt/yKkf5gOUXl+6S3d9Syq/982fz+fhpsm28C5EhJcxsWWQke6KoPMA7tqm7kKcrn6FLhWcoqCNCxDPyQ8wEKR73nIlEX8GpARSJX7/rzeNtWPD/Dl2IwtOYMwV7osGsHYJanzeU7KqIZVCTcrT0IEbyD4d1e1dkBtW2qLhLXK7a1ogDqsjI1DR4PY7nHEqfF9tn8HUJL+eQ/lGOXdwI1++57CqgmDaReM9CZYLAk4D4ymqti4KZI9Htz9OnrcuOhCQEqJfXaxHPAFG/l/ee1GFJPXmPryYUiUGPutnRGXkagmnjHk5RNpm7xxiclm6CjJEQ4+MD4xPmuT9Ef4b3YT3B51a7d4Np76PF0cavuC+SoaH6PlilipEakoJBJETWT3k7Hf+1REPj2fIx95t5ct6u9S5v3KM2fv2Ve29ax9yC98zT2IZot61MHyYtdPF92nguZ29xfcVxSu9Nj5Gl8G3wcVoW8n1Q/f6BHFEAyy5R2aRIdYH8XfV4453vHKcnqarXPD6mdrD0rlVV5xBPF2xuJM5Oo0SdaaqGMjJva7ii6bYv74IzPMo5pGebpu72ghypwTR+WWDuhQOkFijGyAzF3GXh11lEH0hkPINZivpTqLEtVm2j1hVcn/S0//q0es5dbyxOErxKivQ+bHotvzcT3/XztPf20XqG6fJZMePT2X6ts+nlm9LoSYHMiHuJjGXniB7v2fo/5qT4nuxYg6AAAAAASUVORK5CYII=);
	font-family: 'Minecraftia';
  border-color: #AAA #565656 #565656 #AAA;
  text-shadow: 3px 3px #4C4C4C;
  outline: 2px solid #000;
  color: white;
  width: 275px;
  text-align: center;
  margin-bottom: 20px;
  border-width: 2px;
  border-bottom-width: 4px;
  border-style: solid;
  padding: 2px;
}
  
.minecraft-btn:hover {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAPCAMAAACMV5AuAAAAVFBMVEVtd7ZteLZverdwerdwe7hxfLhyfbl0frl1f7p2gLt4grx6hLx7hb18hr5+iL+AisCBi8GCjMGEjsKGkMOHkcSIksSKk8WLlMWLlcaMlcaNlsePmMdwBHmVAAAEjElEQVRIx1WW27YbKw5F3Ul2GYTWFAJX+pyd///PfgDsTg0/mSqQ1k08AEAeDkAA7kXyDAeyu2QCWREgCGSvAAbIE/D9U2m8Ji4Drw0CEhP7EMiqBFxmDMBEkHvd5AziDsjoCKQXddUl1nuZgMZrf0PMdj1kgNY+Ay+CJPg8kj1rR3X/GS9kxaoJVFaB6QkxIX5TBX65mpAZGQH3HaoCFMj6/GxuYgDyTsyup1hfxwxVN+F08ANGANyf8jqAPaBpranJvhxV+VV08JGPVScmcL8W4EIuAFWFHMZrUkUfNC3WtIsEaFogMWJRl839MES61w1cjMUsI1fb7GKaoENMOdFNykzXPz2mlwekkXjV4ioO9b15rZWZd4AaCL9cxdSutl8buIOUkd8JTgAy01IKoFoFPhAZr65SbDHgxFIGKi5IpLaKdlafAHxaVWDt2SSZ24LQhEx6aLGyj7RtELDLiA7EiD72ehBiQJo5oPq1nOQMYGAIYoY2AwIrImaA+25P8vZRa0KgqrjnQIaACiom/1G9Sla3GUHVLl/mMl/mxeUPGT0T5seAeeAQtF9WV2F7cX4niJ4DYmBd12oh7jymyRkBuq6M81mQuExHVv313beo9VH3ojfM2zZ8AkTG8X7EeDs6OZw+mrY7E5l/gqQJmZx+YySQAi1/dqQZy0as4FL1d7nrcfd1kjWTX1ZIYESTUCnuPZE7+anrqcxlz3diUX2HowHCf15S3AvxrnhRxeMwtQACGYGKZ7wGjNl7vH73MHdP8s/vSXM0FiRqMnPowfbjRsfe6n7nZ/FGIyfgF6+A/t1XTrcWB3Q42AxkMOfMfuJotRPgqGqFMfB8KO6eN+BEpO8F2eLZ18YO0GUdmEDcXMcNey+XuOfvP5P35guSVxAzWRYUpIoSuZiJrJ/p4zPouw0pwX+6XwpIcyNWEcJ/uf5Svuyx+ncTfhmotEhIBPe/8f961F/jI5aQfSs3WFOwChnZZxPk+HQjZu/WBuDFVwobZnoLISBOdkmNLFPE9iadiImsgTcdTDKA8dj1qBT518Xcg6+6L0Yl/nqCLeH+b46InkCSETTBzEQBRoPEwS9lKVUkpEx426M3oIMHYQLhK/B6jHvgXw6if4+YM4mlJdWDpLw4MhHgjwBZgIt+ZJdAVENOEkiv6mY4yy5nFPjnQmGfGVy0IqP+cmbsWF7Se/rT+5ZBzHPdKfajHW2ouWldPJaoTDJ3GUYTNMV/IyaiPYqQuX0VPXK+ra3Mc8c5Wlkp4D/e5S5htjXU3HnPPJsBXraRM/rSpOMX99zMoVradRl9AMxJdVPIYgf8Rhu0DvLM739A5rmjJ51QcW9SFXjcvR85oYOhSKTsd65pqdKWIV59ZO/7kKTDJLbvYw9XVRIyTXKJdfm4rOjE18yT8IHM/euZa0Z0fLvBSIh7h925QLoXR80WNfnqOHHP7Qk5aj+dTLX4E3hhIkafoGd15/IDT/lPTVSVr233dy6OkJtiLm0yBu+byeE2Yc59pVrDdKyPjxgD4h6r6vcFwpYNHMxVBaE2ApmfyTTjf5jQnWRymG7iAAAAAElFTkSuQmCC);
  border-color: #BDC6FF #59639A #59639A #BDC6FF;
  color: yellow;
}




</style>
