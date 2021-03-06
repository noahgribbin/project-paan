// 'use strict';
//
// import React from 'react';
// import { render } from 'react-dom';
// import PropTypes from 'prop-types';
// import tabletop from '../assets/tabletop.png'
//
// export class DmHome extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this);
//     this.dmOnClick = this.dmOnClick.bind(this);
//     this.characterOnClick = this.characterOnClick.bind(this);
//   }
//
//   dmOnClick(e) {
//     const data = {
//       id: store.getState().profileReducer.profileID,
//       token: store.getState().userReducer.token
//     }
//     store.dispatch(getAllDms(data))
//     .then(() => {
//       history.push('./dm')
//     })
//   }
//
//   characterOnClick(e) {
//     const data = {
//       id: store.getState().profileReducer.profileID,
//       token: store.getState().userReducer.token
//     }
//     store.dispatch(getAllCharacters(data))
//     .then(() => {
//       history.push('./player')
//     })
//   }
//
//   render() {
//     return (
//       <section className="hero-section" >
//         <div className="hero-container">
//             <div className="hero-text-container">
//               <p className="hero-text">Start a campaign</p>
//               <p className="hero-text">or build a</p>
//               <p className="hero-text">character and</p>
//               <p className="hero-text">play today!</p>
//             </div>
//           <div className="button-holder">
//             <button className="blue"
//                     onClick={this.dmOnClick}>
//                     Dungeon Master
//             </button>
//             <button className="orange"
//                     onClick={this.characterOnClick}>
//                       Player
//             </button>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }
//
// DmHome.propTypes = {
//   dmOnSubmit: React.PropTypes.func
// }
