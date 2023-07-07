import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/bookingActions";


class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        <span className="text-light ms-4" style={{ fontSize: "30px" }}>
          ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span className="text-light ms-4" style={{ fontSize: "30px" }}>
          ghế đang đặt
        </span>
        <br />
        <button className="gheChuaChon"></button>
        <span className="text-light ms-4" style={{ fontSize: "30px" }}>
          ghế chưa đặt
        </span>

        <div className="mt-5">
          <table className="table" style={{ border: "4!important" }}>
            <thead>
              <tr style={{ fontSize: "25px", fontWeight: "bold" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.listGheDangDat.listGheDangDat.map((item, index) => {
                return (
                  <tr className="text-success" key={index}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.huyGhe(item.soGhe)
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
    huyGhe: (soGhe) => {
      dispatch(huyGheAction(soGhe));
    }
  }
 }
export default connect(mapStateToProps,mapDispatchToProps)(ThongTinDatGhe);
