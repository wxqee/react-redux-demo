import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLink } from "./actions/link-actions";

class LinkManager extends Component {
  form = null;

  handleSubmit = (e) => {
    e.preventDefault();

    const link = {
      label: this.form.label.value,
      url: this.form.url.value,
    };

    this.form.reset();
    this.props.addLink(link);
  };

  render() {
    return (
      <div className="LinkManager">
        <section>
          <form ref={dom => { this.form = dom; }} onSubmit={this.handleSubmit}>
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

const mapDispatchToProps = dispatch => ({
  addLink: link => dispatch(addLink(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkManager);
