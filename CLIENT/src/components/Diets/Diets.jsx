import React from "react";

export default class Diets extends React.Component {
  handleClick = event => {
    this.props.onChange(
      this.props.actives.includes(event.target.id)
      ? this.props.actives.filter(aux => aux !== event.target.id)
      : [...this.props.actives, event.target.id]
    );
  }

  render() {
    let diets = this.props.diets.map(el =>
      <div key={el}>
        <input type="checkbox" id={el} name={el} checked={this.props.actives.includes(el)} onChange={this.handleClick} />
        <label htmlFor={el}>{el}</label>
      </div>
    )

return (
      <fieldset>
          <legend>Choose diet's recipe:</legend>
          {diets}
      </fieldset>
    );
  }
}