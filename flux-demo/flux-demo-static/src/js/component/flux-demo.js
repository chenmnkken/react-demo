import Dropdown from './dropdown';
import Content from './content';
import fluxDemoActions from '../action/flux-demo';

class FluxDemo extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    static defaultProps = {
        dropdownBtn: 'JavaScript library',
        dropdownItems: [
            { text: 'React', url: '/api/react' },
            { text: 'Angular', url: '/api/angular' },
            { text: 'Polymer', url: '/api/polymer' }
        ]
    }

    selectCallback = (name) => {
        const path = `/api/${name.toLowerCase()}`;

        this.setState({
            selected: name
        }, () => {
            fluxDemoActions.fetchIntroduction(name, path);
        });
    }

    render () {
        return (
            <div>
                <h1>This is a Flux demo.</h1>
                <Dropdown
                    selectCallback={this.selectCallback}
                    btnText={this.props.dropdownBtn}
                    items={this.props.dropdownItems} />
                <Content name={this.state.selected} />
            </div>
        )
    }
};

React.render(
    <FluxDemo />,
    document.getElementById('root')
);
