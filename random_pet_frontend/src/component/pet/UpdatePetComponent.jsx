import React, { Component } from 'react'
import PetDataService from '../../service/PetDataService'
import FooterComponent from '../header_footer/FooterComponent';

class UpdatePetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            caption: '',
            contributor: '',
            img: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    componentDidMount(){
        PetDataService.retrievePet(this.props.match.params.id)
            .then(
                response => {
                    this.setState({
                        id: response.data.id,
                        title: response.data.title,
                        caption: response.data.caption,
                        contributor: response.data.contributor,
                        img: response.data.img
                    })
                }
            )
    }

    handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
    }

    handleFile(event){
        const preview = document.querySelector('img')
        const file = document.querySelector('input[type=file]').files[0]
        const reader = new FileReader()

        reader.addEventListener("load", function () {
            preview.src = reader.result
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    handleSubmit() {
        const preview = document.querySelector('img')
        let image_source = preview.src.substring(
        preview.src.indexOf(",") + 1,
        preview.src.length)

        let pet = {
            id: this.state.id,
            title: this.state.title,
            caption: this.state.caption,
            contributor: this.state.contributor,
            img: image_source
        }
        PetDataService.updatePet(pet)
            .then(this.props.history.push(`/petRegistry`))
    }


    render() {

        console.log("render")

        return(
            <div>
                <div className="jumbotron" style={{height:"50px", backgroundColor: "gray"}}>
                    <h3 style={{textAlign: "center"}}>Update Pet</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Caption</label>
                            <input className="form-control" type="text" name="caption" value={this.state.caption} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Contributor</label>
                            <input className="form-control" type="text" name="contributor" value={this.state.contributor} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <br/>
                            <input type="file" name="img" onChange={this.handleFile}/>
                            <img src={"data:image/png;base64," + this.state.img} height="200" alt="preview..."></img>
                        </div><br/>
                        <input className="btn btn-success" type="submit" value="Submit" name="submit"/>
                    </form>
                <br/><br/>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default UpdatePetComponent
