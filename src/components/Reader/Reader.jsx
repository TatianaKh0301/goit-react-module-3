import { Component } from "react";
import { Controls } from "components/Controls";
import { Progress } from "components/Progress";
import { Publication } from "components/Publication";

const LS_KEY = 'reader_item_index';
export class Reader extends Component {
    state = {
        index: 0,
    }

    changeIndex = value => {
        this.setState(state => ({ index: state.index + value}));
    }

    componentDidMount() {
        const savedIndex=Number(localStorage.getItem(LS_KEY));
        this.setState({index: savedIndex});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            localStorage.setItem(LS_KEY, this.state.index)
        }
    }
    // onPrev = () => {
    //     this.setState(state => ({index: state.index - 1}));
    // };

    // onNext = () => {
    //     this.setState(state => ({index: state.index + 1}));
    // }

    render(){
        const { index } = this.state;
        const { items } = this.props;
        const totalItems = items.length;
        const currentItem = items[index];
        return(
            <div>
                <Controls onChange={this.changeIndex} current={index + 1} total={totalItems}/>
                <Progress current={index + 1} total={totalItems}/>
                <Publication item={currentItem}/>
                
            </div>
        );
    }
}