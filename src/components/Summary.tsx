import React from "react";

type SummaryProps = {
  numOfPeople: number;
  totalAmount: number;
}

class Summary extends React.Component<SummaryProps> {
  render() {
    return (
      <section className="summary">
        <div className="party">
          <span className="party">{this.props.numOfPeople}</span>
          <span>名様</span>
        </div>
        <div className="total-amount">
          <span>合計</span>
          <span className="total-amount">{this.props.totalAmount}</span>
          <span>円</span>
        </div>
      </section>
    )
  }
}

export default Summary;