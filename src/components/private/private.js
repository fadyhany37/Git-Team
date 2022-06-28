import React from 'react';
import {Route,Redirect} from 'react-router-dom'



const Private = (props) => {
   if(props.isLogged==true){
    return <Route path={props.path} component={props.component}/>
   }else{

    return <Redirect to="/"/>
   }
}

export default Private;
