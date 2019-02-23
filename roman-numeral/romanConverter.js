class RomanConverter extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          numberInput: "",
          romanOutput: "",
          acceptableNum: true
      };
      this.handleChange = this.handleChange.bind(this);
      this.convertToRoman=this.convertToRoman.bind(this);
    }
    
  
    handleChange(event){

        var flux= parseInt(event.target.value);
        var romanAns= this.convertToRoman(flux);

        if(flux>5000){
            this.setState({
                acceptableNum: false
            })
            
        }

        if (flux<=5000){
            this.setState({
                acceptableNum: true
            })
        }

        if(this.state.acceptableNum==false){
            $("#error-message").html("Number too big!");
            this.setState({
                romanOutput: ''
            })
            return;
        }

        if(this.state.acceptableNum==true){
            $("#error-message").html("");
        }
        

        
        this.setState({
            numberInput: flux,
            romanOutput: romanAns
        });


    }

    convertToRoman(num) {

        let ans = [];
        let rem = num;
    
        if (rem >=1000){
            var temp = Math.floor(rem/1000);
            for (var i =0; i<temp; i++){
                ans.push("M");
            }
            rem = rem - temp*1000;
            console.log(rem);
        }
    
        if (rem >= 900){
            ans.push("CM");
            rem = rem - 900;
            console.log(rem);
        }
    
        if (rem>= 500){
            ans.push("D");
            rem = rem -500;
            console.log(rem);
        }
    
        if (rem >=400){
            ans.push("CD");
            rem = rem -400;
            console.log(rem);
        }
    
        if (rem >= 100){
            var temp = Math.floor(rem/100);
            for (var i =0; i<temp; i++){
                ans.push("C");
            }
            rem = rem - temp*100;
            console.log(rem);
        }
    
        if (rem >=90){
            ans.push("XC");
            rem = rem-90;
        }
    
        if (rem >=50){
            ans.push("L");
            rem = rem-50;
        }
    
        if (rem >=40){
            ans.push("XL");
            rem = rem -40;
        }
    
        if (rem >=10){
            var temp = Math.floor(rem/10);
            for (var i = 0; i<temp; i++){
                ans.push("X");
            }
            rem = rem - temp*10;
        }
    
        if (rem < 10){
            switch (rem){
                case 1: ans.push('I'); break;
                case 2: ans.push('II'); break;
                case 3: ans.push('III'); break;
                case 4: ans.push('IV'); break;
                case 5: ans.push('V'); break;
                case 6: ans.push('VI'); break;
                case 7: ans.push('VII'); break;
                case 8: ans.push('VIII'); break;
                case 9: ans.push('IX'); break;
                case 0: break;
            }
        }
    
    ans = ans.join('');
    console.log('Number: '+num);
    console.log('Roman Numerals: '+ans);
    return ans;
    }
  
    componentDidMount() {
        $("#number-input").on("input",this.handleChange);
         
       }
 
  
    render(){

      return(
  
          <div id ="user-interface" className="column-flex">

                <span id="title">Roman Numeral Generator</span>
                <label>Enter your number: (1-4999)</label>
                <input id="number-input"></input>
                <span id="error-message"></span>
                <label>Roman Numerals:</label>
                <div id="roman-output">{this.state.romanOutput}</div>
                
                <span id="bottom-text">Coded by Danny Alig</span>
                
          </div>
               
      );
    }
  
  }
  
  ReactDOM.render(<RomanConverter />, document.getElementById("RomanApp"));




