import React, { Component } from 'react'

export default class AppClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Finish Series",
                    isComplete: false,
                  },
                  {
                    id: 2,
                    title: "Watch Movie",
                    isComplete: false,
                  },
                  {
                    id: 1,
                    title: "Take over world",
                    isComplete: true,
                  },
            ]
        }
    }
    render() {
       
        return (
            <div className="container w-2/5 lg:w-1/3 bg-white p-5 mx-auto border mt-5">
            <div className="todo-app">
              <h2 className="text-2xl font-bold">Todo app testing</h2>
              <form action="#">
                <input
                  type="text"
                  className="w-full border shadow mt-5 p-3"
                  placeholder="What do you need to do?"
                />
              </form>
      
              <div className="todo-tasks flex flex-col py-5">
               {this.state.todos.map((todo, index) => (
                <div className="item py-1">
                  <input type="checkbox" className="m-1" name="" id="" />
                  <span>{todo.title}</span>
                  <button className="float-right">X</button>
                </div>
               ))}
              </div>
      
              <hr />
      
              <div className="check-all flex justify-between  my-5">
                <button className="border shadow p-1 text-sm">Check all</button>
                <span className="text-sm">3 items remaining</span>
              </div>
      
              <hr />
      
              <div className="check-all flex justify-between  my-5">
                <div className="options">
                  <button className="border shadow p-1 text-xs">All</button>
                  <button className="p-1 text-xs">Active</button>
                  <button className="p-1 text-xs">completed</button>
                </div>
                <button className="text-sm border p-1">Clear completed</button>
              </div>
            </div>
          </div>
        )
    }
}
