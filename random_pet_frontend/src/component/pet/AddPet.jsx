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
        this.handleFile = this.handleFile.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFile(event){
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
        // convert image file to base64 string
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }

        file.arrayBuffer().then((arrayBuffer) => {
            let blob = new Blob([new Uint8Array(arrayBuffer)], {type: file.type });
            console.log(blob);
            console.log(new Uint8Array(arrayBuffer))
        });

    }

    handleSubmit() {
        let pet = {
            id: this.state.id,
            title: this.state.title,
            caption: this.state.caption,
            contributor: this.state.contributor,
//             img: blob
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
{/*                         <div className="form-group"> */}
{/*                             <label>ID:</label> */}
{/*                             <input className="form-control" type="text" value={this.state.id} disabled/> */}
{/*                         </div> */}
{/*                         <div> */}
{/*                             <label>Title:</label> */}
{/*                             <input className="form-control" type="text" name="title" onChange={this.handleChange}/> */}
{/*                         </div> */}
{/*                         <div> */}
{/*                             <label>Caption:</label> */}
{/*                             <input className="form-control" type="text" name="caption" onChange={this.handleChange}/> */}
{/*                         </div>        */}
{/*                         <div> */}
{/*                             <label>Contributor:</label> */}
{/*                             <input className="form-control" type="text" name="contributor" onChange={this.handleChange}/> */}
{/*                         </div> */}
                        <div>
                             <input type="file" name="img" onChange={this.handleFile}/>
                             <img src="" height="200" alt="Image preview..."></img>
                        </div>
                             <input className="btn btn-success" type="submit" value="Submit" name="submit"/>
{/*                         <button className="btn btn-success" type="submit">Submit</button><br/><br/> */}
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}

export default AddPet
