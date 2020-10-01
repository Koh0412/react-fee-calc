import React from "react";
import Summary from "./Summary";
import Detail from "./Detail";
import { FeeClassification } from "../typings/feeClssification";
import { feeClassData } from "../data/feeClassification.data";

type FeeCalcuratorState = {
  feeClassifications: FeeClassification[];
}

class FeeCalcurator extends React.Component<{}, FeeCalcuratorState> {

  constructor(props: {}) {
    super(props);
    this.state = { feeClassifications: feeClassData };
  }

  /** 明細要素 */
  get detail() {
    const detail = this.state.feeClassifications.map((classification, idx) => {
      return (
        <Detail
          key={idx.toLocaleString()}
          classification={classification}
          onNumOfPeopleChange={(num) => this.handleNumOfPeopleChange(idx, num)}
        />
      )
    });

    return detail;
  }

  get numOfPeople() {
    return this.state.feeClassifications.map(fc => fc.numOfPeople).reduce((p, c) => p + c);
  }

  get totalAmount() {
    return this.state.feeClassifications.map(fc => fc.totalPrice).reduce((p, c) => p + c);
  }

  /**
   * 人数変更時のハンドリング
   * @param idx
   * @param num
   */
  handleNumOfPeopleChange(idx: number, num: number) {
    const current = this.state.feeClassifications[idx];
    const newTotalPrice = current.unitPrice * num;

    // 人数と合計額以外は既存の値をコピー
    const newFeeClassification: FeeClassification = {
      ...current,
      numOfPeople: num,
      totalPrice: newTotalPrice,
    };

    // 新たな配列を生成
    const feeClassifications = this.state.feeClassifications.slice();
    feeClassifications[idx] = newFeeClassification;

    this.setState({feeClassifications: feeClassifications});
  }

  render() {
    return (
      <>
        <div>
          <ul className="detail-board">
            {this.detail}
          </ul>
        </div>
        <Summary numOfPeople={this.numOfPeople} totalAmount={this.totalAmount} />
      </>
    )
  }
}

export default FeeCalcurator;
