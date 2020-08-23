import React from "react";

type SummaryProps = {
  numOfPeople: number;
  totalAmount: number;
}

class Summary extends React.Component<SummaryProps> {
  get isOverTenThousand(): boolean {
    return this.props.totalAmount > 10000;
  }

  render() {
    return (
      <>
        <section className={["summary", this.isOverTenThousand ? "warn" : "safety"].join(" ")}>
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
        {this.isOverTenThousand && (
          <p>10000円を超えていますが、問題ないでしょうか？</p>
        )}
      </>
    )
  }
}

export default Summary;