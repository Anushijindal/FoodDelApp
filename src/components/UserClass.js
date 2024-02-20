import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1,
            userInfo:{
                login:"dummy",
                id:"dummy",
            }
        }
    };
  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/Anushijindal");
    const json=await data.json();
    console.log(json);
    this.setState({
        userInfo:json,
    });
};
    render(){
        const {name, location, contact}=this.props;
        return (
        <div className="user-name1">
        {/* <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Click Button</button>
        <h1>Count:{this.state.count}</h1>
        <h1>Count:{this.state.count2}</h1> */}
        <h2>Name:{this.state.userInfo.login}</h2>
        <h3>Locaton:{this.state.userInfo.id}</h3>
        <h3>Contact:{contact}</h3>
        </div>
        );
    };
};
export default UserClass;
