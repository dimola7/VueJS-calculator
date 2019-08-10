new Vue({
  el: "#app",
    data(){
    return{
      previous: null,
      current:"",
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear(){
      this.current="";
    },
    sign(){
      this.current = this.current.charAt(0) === '-' ?
     this.current.slice(1) : `-${this.current}`;
    },
    percent(){
      this.current = `${parseFloat(this.current) / 100}`
    },
    append(number){
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false;
      }
      this.current =`${this.current}${number}`;
      
    },
    dot(){
      if(this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide(){
      this.operator = (b,a) => a / b;
      this.setPrevious();
    },
    times(){
      this.operator = (a,b) => a * b;
      this.setPrevious();
    },
    minus(){
      this.operator = (b,a) => a - b;
      this.setPrevious();
    },
    plus(){
      this.operator = (a,b) => a + b;
      this.setPrevious();
    },
    equal(){
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous= null;
    }
  }
})


