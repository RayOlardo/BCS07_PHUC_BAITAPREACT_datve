import React, { Component, Fragment } from "react";
import "./BookingTickets.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";
import arrDanhSachGhe from "./Data/danhSachGhe.json"; 
import { connect } from "react-redux";
class BookingTickets extends Component {
  renderHangGhe = () => {
    return arrDanhSachGhe.map((item,index) => {
      return ( <div key={index}>
          <HangGhe item={item} soHangGhe={index === 0}/>
      </div>
      )
    })
  }
  render() {
    // console.log(this.props)
    return (
      <div >
        <div className="booking__content">
          <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)'}}>
          <div  className="container-fluid">
            <div className="row">
              <div className="col-8  text-center">
                <h2 className="fs-1 text-warning fw-bold">Đặt vé xem phim tại Cyber</h2>
                  <p className="text-light" style={{fontSize: '25px'}}> Màn hình</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} className="mt-2">
                  <div className="screen"></div>

                </div>
             <div>
             {this.renderHangGhe()}
             </div>
              </div>
              <div className="col-4">
              <h2 className=" text-warning fw-bold mt-2  text-center" style={{fontSize: '30px'}}>Danh sách ghế bạn chọn</h2>
                  <ThongTinDatGhe/>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

// Bước gọi state tới từ redux về
const mapStateToProps = (state) => {
  // hàm này giúp lấy dữ liệu từ redux về
  // state đóng vai trò là tham số đại diện cho reducer để chấm tới thuộc tính giúp lấy dữ liệu từ store của redux
  return {

  }
}

// Bước setup connect Component với redux
export default connect(mapStateToProps)(BookingTickets)