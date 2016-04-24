/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Footer.scss';
// import Link from '../Link';
//
// function Footer() {
//   return (
//     <div className={s.root}>
//       <div className={s.container}>
//         <span className={s.text}>© Your Company</span>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/">Home</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/privacy">Privacy</Link>
//         <span className={s.spacer}>·</span>
//         <Link className={s.link} to="/not-found">Not Found</Link>
//       </div>
//     </div>
//   );
// }
//
// export default withStyles(s)(Footer);

import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import {i18n} from '../../utils/i18n';
// import styles from '../../css/footer.css';
import {Row, Col, Image} from 'react-bootstrap';
var dateFormat = require('dateformat');

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div className={s.footerBg}>
        <div className='container'>
          <Row>
            <Col md={4}>
              <div className={s.footerInfo}>
                <p>
                  <img src={require('./footerIco.png')} />
                  <span>
                    {i18n.t('footer.server_time')}：{dateFormat(this.state.date, 'yyyy-mm-dd hh:MM:ss', true)}
                  </span>
                </p>
                <em>{i18n.t('footer.copyright')}</em>
              </div>
            </Col>
            <Col md={4} mdOffset={4} smHidden xsHidden>
              <div className='pull-right'>
                <Image
                  className={s.logoImg}
                  src={require('./footerLogo.png')}
                  responsive
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}


export default withStyles(s)(Footer);
