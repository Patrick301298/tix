import React from "react";
import "./style.scss";

import LyHai from "../../assets/Image/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png";
import Like from "../../assets/Image/like.png";
import Comment from "../../assets/Image/comment.png";
import Mortal from "../../assets/Image/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png";
import Promissing from "../../assets/Image/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png";
import BTDQ from "../../assets/Image/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png";
import QC from "../../assets/Image/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg";

const HomeNews = () => {
  return (
    <div className="row grayBack" id="idnewsblock">
      <div className="col-xs-12 block mainMaxWidth" id="homeNews">
        <div className="wrapSlick banner-ads" id="sliderAdsNews"></div>
        <ul className="nav nav-tabs navCenter">
          <li className="active">
            <a href="#dienanh">Điện Ảnh 24h</a>
            <div className="wing wingLeft"></div>
            <div className="wing wingRight"></div>
          </li>
          <li>
            <a href="#Review">Review</a>
            <div className="wing wingLeft"></div>
            <div className="wing wingRight"></div>
          </li>
          <li>
            <a href="#KhuyenMai">Khuyễn Mãi</a>
            <div className="wing wingLeft"></div>
            <div className="wing wingRight"></div>
          </li>
        </ul>
        <div className="tab-content">
          <div id="showingNews" className="tab-pane fade in active">
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat">
                  <img src={LyHai} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat">
                <p className="newsTitle">
                  Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật
                  Mặt: 48H đậm chất
                </p>
              </a>
              <p className="newsDescription">
                Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
                đuổi gay cấn thót tim fans hâm mộ
              </p>
              <div className="blockIconFacebook">
                <div className="wrapIcon like">
                  <img src={Like} alt="" className="iconFacebook postLike" />
                  <p className="amount like">0</p>
                </div>
                <div className="wrapIcon comment">
                  <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat">
                    <img
                      src={Comment}
                      alt=""
                      className="iconFacebook postCmt"
                    />
                    <p className="amount comment">0</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam">
                  <img src={Mortal} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam">
                <p className="newsTitle">
                  [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN
                  ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM
                </p>
              </a>
              <p className="newsDescription">
                Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood
                cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu
                thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.
              </p>
              <div className="blockIconFacebook">
                <div className="wrapIcon like">
                  <img src={Like} alt="" className="iconFacebook postLike" />
                  <p className="amount like">2</p>
                </div>
                <div className="wrapIcon comment">
                  <a href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam">
                    <img
                      src={Comment}
                      alt=""
                      className="iconFacebook postCmt"
                    />
                    <p className="amount comment">0</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi">
                  <img src={Promissing} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi">
                <p className="newsTitle">
                  PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                  màn trả thù đàn ông để đời
                </p>
              </a>
              <p className="newsDescription">
                Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục
                nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của
                cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa
                Hẹn).
              </p>
              <div className="blockIconFacebook">
                <div className="wrapIcon like">
                  <img src={Like} alt="" className="iconFacebook postLike" />
                  <p className="amount like">1</p>
                </div>
                <div className="wrapIcon comment">
                  <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi">
                    <img
                      src={Comment}
                      alt=""
                      className="iconFacebook postCmt"
                    />
                    <p className="amount comment">0</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em">
                  <img src={BTDQ} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em">
                <p className="newsTitle">
                  VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                  QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                </p>
              </a>
              <p className="newsDescription">
                Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng
                lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác
                phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho
                hội chị em phải mê mẩn vào tháng tới.
              </p>
              <div className="blockIconFacebook">
                <div className="wrapIcon like">
                  <img src={Like} alt="" className="iconFacebook postLike" />
                  <p className="amount like">2</p>
                </div>
                <div className="wrapIcon comment">
                  <a href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em">
                    <img
                      src={Comment}
                      alt=""
                      className="iconFacebook postCmt"
                    />
                    <p className="amount comment">0</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                  <img src={QC} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                <p className="newsTitle">
                  Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                </p>
              </a>
            </div>
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                  <img src={QC} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                <p className="newsTitle">
                  Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                </p>
              </a>
            </div>
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                  <img src={QC} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                <p className="newsTitle">
                  Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                </p>
              </a>
            </div>
            <div className="col-news col-xs-12 news ng-scope">
              <div className="thumbnailGeneral bigThumbnail newsThumbnail">
                <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                  <img src={QC} alt="" />
                </a>
              </div>
              <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                <p className="newsTitle">
                  Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                </p>
              </a>
            </div>
            <div className="wrapButtonSeeMoreNews">
              <button className="btnViewMore">Xem Thêm</button>
            </div>
          </div>
          <div className="tab-pane fade" id="showingReview"></div>
          <div className="tab-pane fade" id="showingPromotion"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
