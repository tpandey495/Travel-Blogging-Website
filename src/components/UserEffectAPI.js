import React from 'react';
import './UserEffectAPI.css';
var finalURL='https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCd4bDhA66nR3d78wef255Pg&key=AIzaSyB5iWURFaBb-j4abPBG91bfXbAYDDT2oHM';



//https://www.youtube.com/watch?v=YDGbnvhDass&ab_channel=TheTravelers

class useEffectAPI extends   React.Component{

    constructor(props){
    super(props);

  this.state={
    resultyt:[]
    };
this.clicked=this.clicked.bind(this);
}     

clicked(){
fetch(finalURL)
.then((response) => response.json())
.then((responseJson) => {

const resultyt=responseJson.items.map(obj=>"https://www.youtube.com/embed?v="+obj.id.videoId);
this.setState({resultyt});

})

.catch((error) => {
console.error(error);
});


}        

render(){
   // console.log(this.state.resultyt);
return(
 
<div>
<button onClick={this.clicked} className="rapid">Get youtube videos</button>

{
this.state.resultyt.map((link,i)=>{
console.log(link);
var frame=<div key={i}  className="col-9 col-sm-4 col-sm-4">
<iframe  title="these are my videos on youtube" with="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe>
</div>
return frame;
})  
}

{this.frame}

</div>


);
}
}




export default useEffectAPI;