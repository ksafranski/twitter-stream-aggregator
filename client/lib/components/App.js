import React from 'react'
import TitleBar from './TitleBar'
import Stream from './Stream'
import { Grid, Row, Col, Panel, FormGroup, FormControl } from 'react-bootstrap'
import General from './General'
import Emojis from './Emojis'
import Hashtags from './Hashtags'
import Links from './Links'

export default class App extends React.Component {
  constructor (props, ctx) {
    super(props)

    this.state = {
      currentPanel: 'general'
    }
  }

  selectStat (e) {
    this.setState({
      currentPanel: e.target.value
    })
  }

  render () {
    return (
      <div>
        <TitleBar />
        <Grid>
          <Row>
            <Col md={3}>
              <Panel>
                <h2><i className='fa fa-list' />Stats Selector</h2>
                <FormGroup>
                  <FormControl componentClass='select' placeholder='select' onChange={this.selectStat.bind(this)}>
                    <option value='general'>General</option>
                    <option value='emojis'>Emojis</option>
                    <option value='hashtags'>Hashtags</option>
                    <option value='links'>Links</option>
                  </FormControl>
                </FormGroup>
              </Panel>
              <Panel>
                {this.state.currentPanel === 'general' && (
                <General />
                )}
                {this.state.currentPanel === 'emojis' && (
                <Emojis />
                )}
                {this.state.currentPanel === 'hashtags' && (
                <Hashtags />
                )}
                {this.state.currentPanel === 'links' && (
                <Links />
                )}
              </Panel>
            </Col>
            <Col md={9}>
              <Panel>
                <h2><i className='fa fa-cog fa-spin' />Live Stream</h2>
                <Stream />
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
