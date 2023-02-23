<template>    
        <div id="rndlzr">
            <div id="digits">
              <div id="digiti1" class="digit">1</div>
              <div id="digiti2" class="digit">2</div>
            </div>
            <div id="controls">
                <div id="buttons">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary btn-lg" id="btn-go">?</button>
                    <button type="button" class="btn btn-danger  btn-lg" id="btn-go">X</button>
                  </div>
                </div>
                <div id="digitlist"> 
                  <ul>
                    <li>420,69</li>
                    <li>55,123</li>
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
   
    }
  },


  computed: {
   
  },

 

  created() 
  {   
    
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