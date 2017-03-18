import './my-component.css!';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Toggle } from "./toggle";

interface Props {
    input: number;
    title: string;
    subtitle?: string;
    doubleToggle: boolean;
}

interface State {
    isOpen: boolean;
    items: { name: string, id: number }[]
}

export class MyComponent extends React.Component<Props, State> {
    constructor(){
        super();
        this.state = {
            isOpen: true,
            items: []
        }
    }

    toggle() {
        const { items } = this.state;
        this.setState({
            isOpen: !this.state.isOpen,
            items: [{ id: items.length, name: `Item with id ${items.length}` }, ...items]
        });
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate');
    // }

    componentDidUpdate(){
        console.log(this.refs.titleElem);
        console.log('componentDidUpdate');

        React.Children.toArray(this.props.children).forEach(child => {
            console.log(`Child ${(child as any).props.className} -> ${child}`);
        });
    }

    render() {
        const {children, input, title, subtitle} = this.props;
        const {items} = this.state;
        
        const secondToggle = this.props.doubleToggle
                ? <Toggle isOpen={!this.state.isOpen} toggle={this.toggle.bind(this)}></Toggle>
                : <aside>Second toggle placeholder...</aside>;

        return (
            <div className="mycomponent">
                <h1 ref="titleElem">My Component...</h1>
                <h2>Title: {title}</h2>
                <h3>Value: {input}</h3>
                <h4>Sub: {subtitle}</h4>
                <div>
                    <Toggle isOpen={this.state.isOpen} toggle={this.toggle.bind(this)}></Toggle>
                    {secondToggle}
                </div>
                {items.map(item => (
                    <p key={item.id}>ITEM: {item.name}</p>
                ))}
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

(MyComponent as any).defaultProps = {
    subtitle: "Placeholder subtitle..."
}