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
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let pet = {
            id: this.state.id,
            title: values.title,
            caption: values.caption,
            contributor: values.contributor,
            img: values.img
        }
            PetDataService.updatePet(pet)
            .then(() => this.props.history.push('/PetRegistry'))
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
                        onSubmit={this.onSubmit}
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
                                        <label>Image</label>
                                        <Field className="form-control" type="text" name="img" />
                                    </fieldset><br/>
                                    <button className="btn btn-success" type="submit">Save</button>
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
