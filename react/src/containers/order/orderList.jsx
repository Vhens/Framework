import React, { PureComponent } from 'react';
import { ListView } from 'antd-mobile';
import Card from '../../components/card/card';

export default class orderList extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="order-list">
        <Card>
          <Card.Header>春夜喜雨</Card.Header>
          <Card.Content>
            好雨知时节，当春乃发生。随风潜入夜，润物细无声。野径云俱黑，江船火独明。晓看红湿处，花重锦官城。
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>赞</Card.Footer.Link>
            <Card.Footer.Link>分享</Card.Footer.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>春夜喜雨</Card.Header>
          <Card.Content>
            好雨知时节，当春乃发生。随风潜入夜，润物细无声。野径云俱黑，江船火独明。晓看红湿处，花重锦官城。
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>赞</Card.Footer.Link>
            <Card.Footer.Link>分享</Card.Footer.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>春夜喜雨</Card.Header>
          <Card.Content>
            好雨知时节，当春乃发生。随风潜入夜，润物细无声。野径云俱黑，江船火独明。晓看红湿处，花重锦官城。
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>赞</Card.Footer.Link>
            <Card.Footer.Link>分享</Card.Footer.Link>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
