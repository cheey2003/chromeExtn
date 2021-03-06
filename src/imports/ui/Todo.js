import React from 'react';

import AddTodo from './AddTodo';
import SeeTodo from './SeeTodo';




export default class extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentStep:1,
            todoSaved:''
        };
    }

    saveTodo(item){
        console.log(item);
        this.setState({todoSaved:item}); //call refs here instead of having 2 setStates
        this.toggleStep();
        //this.setState({currentStep:2})
    }

    toggleStep(){
        console.log("We ran toggleStep here");
        if (this.state.currentStep === 1){
        this.setState({currentStep:2});
        }
        else if(this.state.currentStep === 2){
        this.setState({currentStep:1});
        }
    }

    loadSteps(){
        switch(this.state.currentStep){
            case 1: return <AddTodo addedTodo={(item)=>this.saveTodo(item)}/>
            case 2: return <SeeTodo todoSaved={this.state.todoSaved} doneTodo={()=>this.toggleStep()}/>
        }
    }

    
    render(){
        return(
             <div>
    
        {this.loadSteps()}
            </div>

    
        ); 
    }
};

//Use switch router to render different components