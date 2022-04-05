import React from 'react'


const formWrapper = (WrappedComponent) =>
    class extends React.Component {
        constructor(props) {
            super(props)
            this.state={}
        }

        componentDidMount = () => {
            this.setState((prev) => {
                prev[this.props.field1] = ''
                prev[this.props.field2] = ''
            })
        }

        handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value})
        }

        render() {
            return (
                <div>
                    <WrappedComponent
                        {...this.props}
                        value={this.state}
                        handleChange={this.handleChange}
                    />
                </div>
            )
        }
    }


export default formWrapper;
