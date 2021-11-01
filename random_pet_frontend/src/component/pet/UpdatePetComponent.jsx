import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import PetDataService from '../../service/PetDataService'

class UpdatePetComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: this.props.match.params.title,
            caption: this.props.match.params.caption,
            contributor: this.props.match.params.contributor,
            img: this.props.match.params.img
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
                .then(this.props.history.push(`/PetRegistry`))

        }

    render() {
        let {id, title, caption, contributor, img} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update Pet</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, title, caption, contributor, img}}
                        onSubmit={this.handleSubmit}
                        enableReinitialize={true}
                    >
                        {
                            () => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Title</label>
                                        <Field className="form-control" type="text" name="title" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Caption</label>
                                        <Field className="form-control" type="text" name="caption" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Contributor</label>
                                        <Field className="form-control" type="text" name="contributor" />
                                    </fieldset>
                                    <fieldset>
                                        <br/>
                                        <input type="file" name="img" onChange={this.handleFile}/>
                                        <img src="" height="200" alt="Image preview..."></img>
                                    </fieldset><br/>
                                    <input className="btn btn-success" type="submit" value="Submit" name="submit"/>
                                </Form>
                            )
                        } 
                    </Formik><br/><br/>
                </div>
            </div>
        )
    }
}

export default UpdatePetComponent
