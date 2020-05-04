import React  , {useState , useEffect} from 'react';

import './App.css';

// import Dropdown from "react-bootstrap/Dropdown"



const Bar = (e) => {
  const {len , x, y ,nx} =e;
  
  
  return ( 
        <div style={{
          color:"white" , 
          height:`${len}px` , width:"1.5px" , 
          border:"0.9px solid white",
          margin:"1em",
          marginTop:"0em",
          position:"absolute",
          left :`${x}px`,
          bottom:`${y}em`, 
        }}>
        </div>
   ); 
};

// const arr = [ '980' , '834' ,'879' ,'763' ,'3745' ,'437' ,'434' , '73' ,'84' ,'43' ,'454']
const arr =[];
for (let i = 0; i < 300; i++) {
  arr.push(Math.floor(Math.random() * 400));
}

const Bars = (e) => {
  const { x , y , arra} = e;
    
  
        return ( 
          <div>{
            arra.map((item, index)=>
            <Bar len={Math.min(item , 500)} x={5 + index*3} y={1}/>
            
            
            )
          }
          </div>
        );
        
      
    
    
    
};
class  App extends React.Component{

  
  constructor(props){
    super(props);
    this.state = { a : [] , sorting:'0'};
    this.handleChange = this.handleChange.bind(this);
  }

  bubbleSort= (e) =>{

    let temp = this.state.a.slice();
    for (let i = this.state.a.length - 1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        if (temp[i] < temp[j]) {
          // [ this.state.a[i] , this.state.a[j] ] = [ this.state.a[j] , this.state.a[i]];
          // console.log( i, j);
          [temp[i], temp[j]] = [temp[j], temp[i]];

          setTimeout(function () {
            this.setState((state) => {
              return {

                a: state.a.map((item, index) =>
                  index === i ? state.a[j] : index === j ? state.a[i] : item
                )
                // a :temp

              };
            })
          }.bind(this), 300)
          // this.setState( { a : temp});


        }
      }
    }
  }

  selSort= (e) =>{
    
    
    
    // console.log(this.state.a);
    const temp = this.state.a.slice();
    for (let i = 0; i < this.state.a.length; i++ ) {
      let mn = temp[i];
      let ii = i;
      for (var j = i; j < this.state.a.length; j++) {
        
    
        if (temp[j] < mn) {
          mn = temp[j];
          ii = j;
        }
      }
      [ temp[ii] , temp[i] ] = [ temp[i] , temp[ii]]
        // console.log('here',ii, mn);
           setTimeout(function () {
            // console.log(i ,ii , mn);
            this.setState((state) => {
              return {

                a: state.a.map((item, index) =>
                  index === ii ? state.a[i] : index === i ? state.a[ii] : item
                )
                // a :temp

              };
            })
          }.bind(this), 300);
        
          // this.setState( { a : temp});


        }
        
        // console.log(this.state.a);
        // console.log(temp);
      
    }

    insort = (e) => {
      const temp = this.state.a.slice();
      for (let i = 1; i < this.state.a.length; i++) {
        let j = i-1;
        let key = temp[i];
        while ( j >= 0 && temp[j ] > key ){
          temp[j+1] = temp[j];
          setTimeout(
            function() {
              // console.log(i ,ii , mn);
              this.setState(state => {
                return {
                  a: state.a.map((item, index) =>
                    index === j+1 ? state.a[j] : item
                  )
                  // a :temp
                };
              });
            }.bind(this),
            10
          );
          j--;
        }
        temp[j+1] = key;
        setTimeout(
          function() {
            // console.log(i ,ii , mn);
            this.setState(state => {
              return {
                a: state.a.map((item, index) =>
                  index === j+1 ? key : item
                )
                // a :temp
              };
            });
          }.bind(this),
          50
        );
        
        // console.log('here',ii, mn);
        

        // this.setState( { a : temp});
      }

      // console.log(this.state.a);
      // console.log(temp);
    };
  


  
  onLoad = () => {
    this.setState( { a :[]});
    this.setState( { a : arr});
  };

  onClear = () => {
    this.setState( { a : []} );
  }

  onUpdate = (index1 , index2) => {
     this.setState( ( state) => {
       return {
          
            a: state.a.map( (item  , index ) => 
              index === index1 ? state.a[index2] : index === index2 ? state.a[index1] : item  
            )
          
          };
     })
  }
  

  handleChange(e){
    this.setState( { sorting: e.target.value});
    
  }
  
  render(){
    return(
    
          <div 
          style={{backgroundColor:"black" , color:"white" , 
          height:"1000px" , width:"10000px"}}>
          <select value={this.state.sorting} onChange={  this.handleChange } style={{marginLeft:"3em"}}>
            <option  value={'0'}> bubbleSort</option>
            <option value={'1'}> selectionSort</option>
            <option value={'2'}> InsertionSort</option>
          </select>
              <button style={{
                color: "white", backgroundColor: "black",
                margin: "3em"
              }}
              onClick = {() => {
                this.onLoad();
              }}
              >Load</button>
            <button  style={{
              color:"white" , backgroundColor:"black",
              margin:"3em"
              }}
              onClick={()=>{
                // console.log(this.state.sorting);
                if ( this.state.sorting === '0'){
                  this.bubbleSort();
                }
                else if ( this.state.sorting === '1'){
                  this.selSort();
                }
                else if ( this.state.sorting === '2'){
                  this.insort();
                }
                
              }
              }
              >Sort</button>
            <Bars arra={this.state.a} />
      </div>
    );
}
    
  
}

export default App;
