import React from 'react'



class SearchBar extends React.Component{

 state={term:'type something here'};

onInputClick(){

    this.setState({term:''})
    console.log("term value cleared. ready for search")
}
onSearchSubmit = (event)=>{
 event.preventDefault();

 //callback to app
 this.props.onSubmit(this.state.term);

}
   
    render (){
        return  <div className="ui segment">
            <form className="ui form"
                  onSubmit={this.onSearchSubmit}
            >
                <div className="field">
                    <label>
                        Image Search
                    </label>
                    <input type="text"

                           value={this.state.term}
                           onClick={event => this.onInputClick()}
                           onChange={(e)=>this.setState({term:e.target.value})}/>
                </div>
            </form>
        </div>
    }
}


export default SearchBar;