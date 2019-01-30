import * as React from 'react'
import store from '../store'
import { connect } from 'react-redux';

class Stats extends React.Component {    

    render() {
        const total = this.props.correct+this.props.inCorrect
        return(
            <div>
                <h3>Correct Answers: {this.props.correct} / {total} </h3>
                <h3>Incorrect Answers: {this.props.inCorrect} </h3>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
              
    return {
        correct: state.answerReducer.correct.length,
        inCorrect: state.answerReducer.inCorrect.length,
    }
}
export default connect(mapStateToProps)(Stats)