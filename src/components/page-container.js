import { PureComponent } from 'react';
import classNames from 'classnames';

export default class PageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasMounted: false,
    };
  }

  componentDidMount() {
    this.setState({
      hasMounted: true,
    });
  }

  render() {
    const { children } = this.props;
    const { hasMounted } = this.state;
    return (
      <main
        id="home-page"
        className={classNames(
          {
            opaque: !hasMounted,
          },
          'container',
        )}>
        {children}
      </main>
    );
  }
}
