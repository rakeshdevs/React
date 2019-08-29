import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles'
import TitleBar from '../../components/Widgets/TitleBar'
import flow from 'lodash/flow'
import FormsTable from './FormsTable'
import {push} from "react-router-redux";
import Fetch from '../../components/Fetch'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Canvas from '../../components/Widgets/Canvas'

class Forms extends Component {

    state = {
        query: ''
    }

    handleLoad = (refresh) => (params) => {
        refresh({payload: params})
    }

    handleView = (form) => {
        const {handleViewForm} = this.props;
        handleViewForm(form);
    }

    onQueryChanged = (e) => {
        this.setState({query: e.target.value})
    }

    onSearchClicked = (refresh) => () => {
        refresh({})
    }

    render() {
        const {handleAddForm, classes} = this.props;
        const {query} = this.state;

        return (
            <div>
                <TitleBar key="title" title='Forms'/>
                <Fetch
                    method='get'
                    loadOnFirstRender
                    path={`api/forms/list?query=${query}`}
                    type='forms'
                    storeData
                    render={({loading, payload, refresh}) => (
                        <React.Fragment>
                            <Canvas size="large" elevation={4} gutter className={classes.searchContainer}>
                                <TextField className={classes.searchField} value={query} onChange={this.onQueryChanged} label='Search Query' />
                                <Button color="primary" onClick={this.onSearchClicked(refresh)} raised>Search</Button>
                            </Canvas>
                            <FormsTable
                                        loading={loading}
                                        page={payload && payload.page}
                                        limit={payload && payload.limit}
                                        order={payload && payload.order}
                                        total={payload && payload.total}
                                        items={payload && payload.items}
                                        onLoad={this.handleLoad(refresh)}
                                        onAddForm={handleAddForm}
                                        onView={this.handleView}

                            />
                        </React.Fragment>
                    )}
                />
            </div>
        );

    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddForm: (formType) => {
            dispatch(push(`/forms/${formType}`))
        },
        handleViewForm: (form) => {
            dispatch(push(`/forms/${form.type.toLowerCase() === 'enna' ? 'enaa' : form.type.toLowerCase()}/${form.id}`))
        }
    }
}

export default flow([
    withStyles((theme) => ({
        searchField: {
            maxWidth: 350,
            width: '100%',
            marginRight: 8
        },
        searchContainer: {
            '& > *': {
                margin: 8
            }
        }
    })),
    connect(mapStateToProps, mapDispatchToProps)
])(Forms);
