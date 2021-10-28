import React, {Component} from 'react'
import PetDataService from '../../service/PetDataService'

class AddPet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            caption: '',
            contributor: '',
            img: '',
            jack: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let pet = {
            id: this.state.id,
            title: this.state.title,
            caption: this.state.caption,
            contributor: this.state.contributor
//             img: this.state.img
        }
        PetDataService.createPet(pet)
            .then(this.props.history.push(`/PetRegistry`))

        this.state.jack.forEach((elm) => {

        })

    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Pet</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled/>
                        </div>
                        <div>
                            <label>Title:</label>
                            <input className="form-control" type="text" name="title" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Caption:</label>
                            <input className="form-control" type="text" name="caption" onChange={this.handleChange}/>
                        </div>       
                        <div>
                            <label>Contributor:</label>
                            <input className="form-control" type="text" name="contributor" onChange={this.handleChange}/>
                        </div>      
{/*                         <div> */}
{/*                             <label>Image:</label> */}
{/*                             <input className="form-control" type="text" name="img" onChange={this.handleChange}/> */}
{/*                         </div><br/><br/> */}
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}

export default AddPet
