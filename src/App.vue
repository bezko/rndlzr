<template>    
        <div id="rndlzr">
            <div id="digits">
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
      digit2: null
    }
  },
  methods:{
    generate()
    {
      axios.post('/digits').then((response) => {
            let pair = response.data
            this.digits.push(pair);
            this.digit1 = pair[0];
            this.digit2 = pair[1];
        })
    },
    clearList()
    {
      axios.delete('/digits').then((response) => {
            this.digits = []
            this.digit1 = null;
            this.digit2 = null;
        })
    }
  },
  created() 
  {   
    axios.get('/digits').then((response) => {
            this.digits = response.data;
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

</style>