import fluxDemoStore from '../store/flux-demo';

class Content extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentDidMount () {
        fluxDemoStore.on('change', this.refreshContent);
    }

    componentWillUnmount () {
        fluxDemoStore.off('change', this.refreshContent);
    }

    refreshContent = () => {
        const introduction = fluxDemoStore.getIntroduction(this.props.name);

        this.setState({
            introduction
        });
    }

    render () {
        const boxStyle = {
            padding: '20px 0',
            fontSize: '14px'
        };

        return (
            <div style={boxStyle}>
                <p>{this.state.introduction}</p>
            </div>
        );
    }
};

export default Content;
