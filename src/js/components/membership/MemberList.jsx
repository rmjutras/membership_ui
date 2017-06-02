import React, { Component } from 'react'
import { membershipApi } from '../../services/membership'
import FieldGroup from '../common/FieldGroup'
import {
  HTTP_GET,
  HTTP_POST,
  logError
} from '../../util/util'
import {
  Button,
  Col,
  Form
} from 'react-bootstrap'

export default class MemberList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      members: [],
      newMember: {first_name: '', last_name: '', email_address: ''},
      inSubmission: false
    }
  }

  componentDidMount () {
    this.getMemberList()
  }

  updateNewMember (formKey, value) {
    if (this.state.inSubmission) {
      return
    }
    let newMember = this.state.newMember
    newMember[formKey] = value
    this.setState({newMember: newMember})
  }

  render () {
    const members = []
    this.state.members.forEach((member, index) => {
      members.push(
        <div>{`${member.name}: ${member.email}`}</div>
      )
    })
    return (
      <div>
        <h2> Membership List </h2>
        {members}
        <h2>Add Member</h2>
        <Col sm={4}>
        <Form horizontal onSubmit={(e) => this.submitMember(e)}>
          <FieldGroup
            formKey="first_name"
            type="text"
            label="First Name"
            value={this.state.newMember.first_name}
            onFormValueChange={(formKey, value) => this.updateNewMember(formKey, value)}
            required
          />
          <FieldGroup
            formKey="last_name"
            type="text"
            label="Last Name"
            value={this.state.newMember.last_name}
            onFormValueChange={(formKey, value) => this.updateNewMember(formKey, value)}
            required
          />
          <FieldGroup
            formKey="email_address"
            type="text"
            label="Email"
            value={this.state.newMember.email_address}
            onFormValueChange={(formKey, value) => this.updateNewMember(formKey, value)}
            required
          />
          <Button type="submit" onClick={(e) => this.submitMember(e)}>Add Member</Button>
        </Form>
        </Col>
      </div>
    )
  }

  async getMemberList () {
    try {
      const results = await membershipApi(HTTP_GET, `/members`)
      this.setState({members: results})
    } catch (err) {
      return logError('Error loading test', err)
    }
  }

  async submitMember (e) {
    e.preventDefault()
    if (this.state.inSubmission) {
      return
    }
    this.setState({inSubmission: true})
    try {
      await membershipApi(HTTP_POST, `/member`, this.state.newMember)
      this.getMemberList()
    } catch (err) {
      return logError('Error loading test', err)
    } finally {
      this.setState({inSubmission: false})
    }
  }
}
