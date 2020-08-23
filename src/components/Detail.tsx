import React from "react";
import { FeeClassification } from "../typings/feeClssification";

type DetailProps = {
  classification: FeeClassification;
  onNumOfPeopleChange: (num: number) => void;
}

class Detail extends React.Component<DetailProps> {
  private count: number = 5;

  /** 人数のoption要素を生成 */
  get numOptions() {
    const options = [];

    for (let i = 0; i < this.count; i++) {
      options.push(
        <option key={i} value={i}>{i}</option>
      )
    }
    return options;
  }

  onNumOfPeopleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const num: number = parseInt(e.target.value, 10);
    this.props.onNumOfPeopleChange(num);
  }

  render() {
    return (
      <li className="classification">
        <div className="name">{this.props.classification.name}</div>
        <div className="description">{this.props.classification.description}</div>
        <div className="unit-price">{this.props.classification.unitPrice}円</div>
        <div className="num-people">
          <select
            onChange={(e) => this.onNumOfPeopleChange(e)}
            value={this.props.classification.numOfPeople}
          >{this.numOptions}</select>
          <span>名</span>
        </div>
      </li>
    )
  }
}

export default Detail;