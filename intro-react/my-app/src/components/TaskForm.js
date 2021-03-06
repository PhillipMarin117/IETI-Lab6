
import React from "react";
import '../components/styles/TaskNew.css'

class TaskForm extends React.Component{

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    
    render(){
        const {onChange, form} = this.props
        return(
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Title" 
                                name="title"
                                onChange={onChange}
                                value={form.title}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="text" 
                            className="form-control" 
                                placeholder="description" 
                                name="description"
                                onChange={onChange}
                                value={form.description}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="date" 
                                className="form-control" 
                                placeholder="DueDate" 
                                name="DueDate"
                                onChange={onChange}
                                value={form.DueDate}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="AssignedTo" 
                                name="AssignedTo"
                                onChange={onChange}
                                value={form.AssignedTo}
                            />
                        </div>

                        <div className="form-group">                        
                            <select 
                                id="inputState" 
                                className="form-control"
                                placeholder="Status" 
                                name="Status"
                                onChange={onChange}
                                //value={form.Status}
                            >
                                    <option selected>Choose Status...</option>
                                    <option value={'To Do'}>To Do</option>
                                    <option value={'In Progress'}>In Progress</option>
                                    <option value={'Done'}>Done</option>
                                    <option value={'Revision'}>Revision</option>
                            </select>
                            
                        </div>
                        <form>
                            <div class="row">
                                <div className="col">
                                    <select 
                                        //id="inputleftColor" 
                                        className="form-control"
                                        placeholder="leftColor" 
                                        name="leftColor"
                                        onChange={onChange}
                                        //value={form.leftColor}
                                    >
                                            <option selected>Choose Left Color</option>
                                            <option value={'#237A57'}>#237A57</option>
                                            <option value={'#FFAFBD'}>#FFAFBD</option>
                                            <option value={'#00c3ff'}>#00c3ff</option>
                                            <option value={'#1cefff'}>#1cefff</option>
                                            <option value={'#EC6EAD'}>#EC6EAD</option>
                                            <option value={'#ee0979'}>#ee0979</option>
                                            <option value={form.leftColor}>Para m??s colores ir a uigradiants.com</option>

                                    </select>
                                </div>

                                <div className="col">
                                    <select 
                                        //id="inputRightColor" 
                                        className="form-control"
                                        placeholder="rightColor" 
                                        name="rightColor"
                                        onChange={onChange}
                                        //value={form.rightColor}
                                    >
                                            <option selected>Choose Right Color</option>
                                            <option value={'#636FA4'}>#636FA4</option>
                                            <option value={'#45B649'}>#45B649</option>
                                            <option value={'#65C7F7'}>#65C7F7</option>
                                            <option value={'#4ca2cd'}>#4ca2cd</option>
                                            <option value={'#ff6a00'}>#ff6a00</option>
                                            <option value={'#A770EF'}>#A770EF</option>
                                            <option value={form.rightColor}>Para m??s colores ir a uigradiants.com</option>
                                    </select>

                                </div>
                            </div>
                        </form>
                
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </form>
                </div> 
        )
    }
}

export default TaskForm