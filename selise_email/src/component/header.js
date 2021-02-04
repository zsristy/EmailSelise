import React from 'react';

const MyHeader=()=>{
  return(
    <nav>
        <div className="nav-wrapper center black">
        <div className="col-11">
        <ul id="nav-mobile" className="right hide-on-med-and-down" style={{marginRight:30}}>
            
                <li><i className="material-icons left">edit</i></li>
            <li><i className="material-icons left">email</i></li>
            <li><i className="material-icons left">folder</i></li>
            <li><i className="material-icons left">delete</i></li>           
            <li><div className="ui category search right">
            
            <div className="ui left icon input">
            <i className="search icon "></i>
            <input className="prompt" type="text" />
            
            </div>
        </div></li> 
        </ul>
        </div>
    </div>
    
    </nav>
  )
}


export default MyHeader;