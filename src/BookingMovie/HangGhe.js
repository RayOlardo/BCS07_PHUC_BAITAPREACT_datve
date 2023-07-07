import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookingTickets.css";
// import {} from '../redux/configStore'
import arrDanhSachGhe from "./Data/danhSachGhe.json"; 
import { DAT_GHE } from "./../redux/types/bookingTypes";
import { datGheAction } from "./../redux/actions/bookingActions";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.item.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      // if(index === 0){
      //   disable = true
      //   return (
      //     <span disabled={disable} className='rowNumber'>
      //       {ghe.soGhe}
      //     </span>

      //   )
      // }

      // Trạng thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }
      
      // Xét trạng thái đang đặt
      // console.log(this.props.listGheDangDat)
      console.log(Array.isArray(this.props.listGheDangDat.listGheDangDat));
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.listGheDangDat.listGheDangDat.findIndex(
        gheDangDat => gheDangDat.soGhe == ghe.soGhe
      );
      console.log(indexGheDangDat)
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            // alert(123);
            this.props.datGhe(ghe)
          }}
          disabled={disable}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  // const { hang } = this.props.item;
  renderHangGhe = () => {
    if (this.props.soHangGhe) {
      return "";
    } else {
      return (
        <div>
          {this.props.item.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="text-light text-start ms-5 mt-4 fw-bold ">
          {this.renderHangGhe()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // lấy dữ liệu từ store redux
  return {
    listGheDangDat: state.tickets,
  };
};
const mapDispatchToProps=(dispatch) => { 
  return{
    datGhe: (ghe) => {
     
      dispatch(datGheAction(ghe));
    }
  }
 }


export default connect(mapStateToProps,mapDispatchToProps)(HangGhe);
