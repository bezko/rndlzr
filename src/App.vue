<template>    
        <div id="rndlzr">
            <div id="digits" :class="{ shake: paspareil, zoom: pareil }">
              <div id="digiti1" class="digit">{{ digit1 }}</div>
              <div id="digiti2" class="digit">{{ digit2 }}</div>
            </div>
            <div id="controls">
                <div id="buttons">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary btn-lg" id="btn-go" @click="generate">?</button>
                    <button type="button" class="btn btn-danger  btn-lg" id="btn-go" @click="clearList">X</button>
                  </div>
                </div>
                <div id="digitlist"> 
                  <ul>
                    <li v-for="pair in digits">
                      {{ pair[0]}} , {{ pair[1] }}
                    </li>
                  </ul>
                </div>
                
          </div>
        </div>
</template>

<script>

const axios = require("axios");

export default {

  data() {

    return {
      digits :[],
      digit1: null,
      digit2: null,
      pareil: false,
      paspareil: false,
      timeout_id : null
    }
  },
  methods:{
    generate()
    {
      axios.post('/digits').then((response) => {
            let pair = response.data;
            this.digits.push(pair);
            this.digit1 = pair[0];
            this.digit2 = pair[1];
            this.anim();
        })
    },
    clearList()
    {
      axios.delete('/digits').then((response) => {
            this.digits = [];
            this.digit1 = null;
            this.digit2 = null;
        })
    },
    anim()
    {
        if ( this.timeout_id > 0)
        {
          clearTimeout(this.timeout_id)
          this.pareil = false;
          this.paspareil = false;
          this.timeout_id = null;
        }

        if (this.digit1 === this.digit2)
        {
          this.pareil = true
          this.timeout_id = setTimeout(() => {
            this.pareil = false
            this.timeout_id =null;
          }, 400)
        }
        else
        {
          this.paspareil = true
          this.timeout_id = setTimeout(() => {
            this.paspareil = false
            this.timeout_id =null;
          }, 400)
        }
    }
  },
  created() 
  {   
    axios.get('/digits').then((response) => {
            this.digits = response.data;
            if (this.digits.length>0)
            {
              let pair = this.digits.slice(-1)[0];
              this.digit1 = pair[0];
              this.digit2 = pair[1];
              this.anim();
            }
        })
  }
  
 
}
</script>

<style scoped>
#rndlzr 
{
 
}
#digits
{
    float:left;
    width: 75%;
    padding:15px;
    text-align: center;
    
}
#digits .digit
{
      font-size: 180px;
      float: left;
      width: 50%;
      padding: 15x;
}

#controls
{
    float:left;
    width: 25%;
    padding:15px;
    text-align: center;
}
#buttons
{
    padding:15px;
}

#digitlist
{
  padding:15px;
}


.shake {
  animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(4px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(8px, 0, 0);
  }
}


.zoom
{
  animation: zoom 0.4s ease infinite;
}

@keyframes zoom{
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}



</style>