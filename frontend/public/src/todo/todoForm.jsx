import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButtom from '../template/iconButtom'

import { add, changeDescription, search, clear } from './todoActions'
class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }


    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }
    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control"
                        placeholder='Adicione uma tarefa' value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}></input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButtom style='primary' icon='plus' onClick={() => add(description)}></IconButtom>
                    <IconButtom style='info' icon='search' onClick={() => search(description)}></IconButtom>
                    <IconButtom style='default' icon='close' onClick={this.props.clear}></IconButtom>
                </Grid>

            </div>

        )
    }
}


const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)