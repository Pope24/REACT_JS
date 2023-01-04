import './Container.css';
function Container() {
    const avatar = require('./assets/avatar.jpg');
    return ( 
        <div id="cv__myself">
        <div className="container">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="avatar">
                  <img src={avatar}/>
                </div>
                <div className="introduction">
                  <div className="name">Lê Văn Chính</div>
                  <div className="position">Software Engineering</div>
                  <div className="icon__started">
                    <img
                      src="https://www.topcv.vn/packages/cvo/templates/basic_4/assets/images/_.png"
                      alt=""
                    />
                    <p>
                      Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu
                      biết về thị trường để trở thành một nhân viên bán hàng
                      chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ
                      đó giúp Công ty tăng số lượng khách hàng và mở rộng tập
                      khách hàng.
                    </p>
                  </div>
                  <div className="experience__job">
                    <div className="title">Kinh nghiệm làm việc</div>
                    <div className="intro__job">
                      <div className="time__work">03/2015 - Hiện tại</div>
                      <div className="intro__job--position">Nhân viên bán hàng</div>
                      <div className="company__job">Công ty TOPCV</div>
                      <p className="describe">
                        - Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook,
                        các forum,...<br />- Giới thiệu, tư vấn sản phẩm, giải
                        đáp các vấn đề thắc mắc của khách hàng qua điện thoại và
                        email.<br />- Lập báo cáo sản lượng bán ra hàng ngày.
                      </p>
                    </div>
                    <div className="intro__job">
                      <div className="time__work">04/2017 - 08/2018</div>
                      <div className="intro__job--position">Lễ tân khách sạn</div>
                      <div className="company__job">Công ty TOPCV</div>
                      <p className="describe">
                        - Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook,
                        các forum,...<br />- Giới thiệu, tư vấn sản phẩm, giải
                        đáp các vấn đề thắc mắc của khách hàng qua điện thoại và
                        email.<br />- Lập báo cáo sản lượng bán ra hàng ngày.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col order-5">
                <div className="information">
                  <div className="title">Ngày sinh</div>
                  <p className="title__detail">24/02/2003</p>
                  <div className="title">Điện thoại</div>
                  <p className="title__detail">(024) 4345 6789</p>
                  <div className="title">Email</div>
                  <p className="title__detail">chinhlvde170423@fpt.edu.vn</p>
                  <div className="title">Website</div>
                  <p className="title__detail">chinhCV.com.vn</p>
                  <div className="title">Địa chỉ</div>
                  <p className="title__detail">Lê Văn Hưu, Ngũ Hành Sơn, Đà Nẵng</p>
                  <div className="title">Giới tính</div>
                  <p className="title__detail">Nam</p>
                </div>
                <div className="modified">
                  <div className="title__modified">Học tập</div>
                  <div className="time__achived">
                    ĐẠI HỌC FPT Da Nang | 10/2021 - 05/2025
                  </div>
                  <div className="detail__modified">
                    <p>Tốt nghiệp loại Giỏi, điểm trung bình 8.6.</p>
                  </div>
                </div>
                <div className="modified">
                  <div className="title__modified">Các kỹ năng</div>
                  <div className="time__achived">Tin học văn phòng:</div>
                  <div className="detail__modified">
                    <p>
                      - Sử dụng thành thạo các công cụ Word, Excel, Power Point.
                    </p>
                  </div>
                  <div className="time__achived">Tiếng Anh:</div>
                  <div className="detail__modified">
                    <p>- Khả năng giao tiếp Tiếng Anh trôi chảy.</p>
                  </div>
                </div>
                <div className="modified">
                  <div className="title__modified">Chứng chỉ</div>
                  <div className="time__achived">TIẾNG ANH | 03/2022 - 07/2022</div>
                  <div className="detail__modified">
                    <p>
                      Chứng chỉ Toiec Tiếng Anh 700+ được cấp tại Ielts Fighter.
                    </p>
                  </div>
                </div>
                <div className="modified">
                  <div className="title__modified">Hoạt động</div>
                  <div className="time__achived">
                    Nhóm tình nguyện ENV | 10/2021 - 12/2021
                  </div>
                  <div className="detail__modified">
                    <p>
                      Tập hợp các món quà và phân phát tới người vô gia cư.<br />
                      - Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp
                      họ có những suy nghĩ lạc quan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Container;