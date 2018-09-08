import React, { Component } from 'react';
import { connect } from 'react-redux';

class LinkManager extends Component {
  handleSubmit = () => {
  };

  render() {
    return (
      <div className="LinkManager">
        <section>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='label' />
            <input type='url' name='url' />
            <input type='submit' value='Add' />
          </form>

          <section>
            {this.props.links.map(link => (
              <div>
                <a href={link.url}>{link.label}</a>
              </div>
            ))}
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  links: state.links,
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(LinkManager);
