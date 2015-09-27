class Dropdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visibile: false,
            btnText: this.props.btnText
        };
    }

    onBtnClick = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    onItemClick = (event) => {
        const target = event.target;
        const url = target.dataset.url;
        const text = target.textContent;

        this.setState({
            visible: false,
            btnText: text
        });

        if (this.props.selectCallback) {
            this.props.selectCallback(text);
        }

        event.preventDefault();
    }

    render () {
        const displayValue = this.state.visible ? 'block' : 'none';

        return (
            <div className="dropdown">
                <button onClick={this.onBtnClick} className="btn btn-default">{this.state.btnText}</button>
                <ul className="dropdown-menu" style={{display: displayValue}}>
                    {
                        this.props.items.map((item) => (
                            <li key={`item-${item.text}`}>
                                <a href="#"
                                    data-url={item.url}
                                    onClick={this.onItemClick}>{item.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
};

export default Dropdown;
