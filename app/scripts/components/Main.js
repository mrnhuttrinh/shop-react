// import React, {Component} from 'react'
// import { connect, bindActionCreators } from 'react-redux'
// import {increase, decrease} from '../actions/count'

// class Main extends Component{
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         var number = this.props.number;
//         return (
//             <div id="main" role="main">
//                 <div id="ribbon">
//                     <span className="ribbon-button-alignment"> 
//                         <span id="refresh" className="btn btn-ribbon" data-action="resetWidgets" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i className='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
//                             <i className="fa fa-refresh"></i>
//                         </span> 
//                     </span>
//                     <ol className="breadcrumb">
//                         <li>Home</li><li>Dashboard</li>
//                     </ol>
//                 </div>
//                 <div id="content">
//                     <div>
//                         Some state changes:
//                         {number}
//                         <button onClick={() => this.props.increase(1)}>Increase</button>
//                         <button onClick={() => this.props.decrease(1)}>Decrease</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         number: state.default.number
//     }
// }

// export default connect(
//     mapStateToProps,
//     {
//         increase,
//         decrease
//     }
// )(Main)
// 
import React, {Component} from 'react'
import { connect, bindActionCreators } from 'react-redux'
import {increase, decrease} from '../actions/count'

class Main extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        var number = this.props.number;
        return (
            <div id="main" role="main">
                <div id="ribbon">
                    <span className="ribbon-button-alignment"> 
                        <span id="refresh" className="btn btn-ribbon" data-action="resetWidgets" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i className='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
                            <i className="fa fa-refresh"></i>
                        </span> 
                    </span>
                    <ol className="breadcrumb">
                        <li>Home</li><li>Dashboard</li>
                    </ol>
                </div>
                <div id="content">
                    <ul className="listdeal_two" id="data-flashsale">
                        <li>
                            <div className="img">
                                <a href="/cong-nghe-phu-kien/phu-kien-cong-nghe/phu-kien-phan-mem/hang-cong-nghe-xa-kho_pp102037.html?cmpid=102037&cmps=home_page&cmpm=list_flash_sale&cmpc=1">
                                    <img alt="Hàng công nghệ xả kho" className="deal" height="231" src="http://resources2.cungmua.com/Product/102000/Long/cm_102037.jpg" width="490">
                                    </img>
                                </a>
                                <p className="icon_new">
                                    New
                                </p>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 28 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/cong-nghe-phu-kien/phu-kien-cong-nghe/phu-kien-phan-mem/hang-cong-nghe-xa-kho_pp102037.html?cmpid=102037&cmps=home_page&cmpm=list_flash_sale&cmpc=1">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/cong-nghe-phu-kien/phu-kien-cong-nghe/phu-kien-phan-mem/hang-cong-nghe-xa-kho_pp102037.html?cmpid=102037&cmps=home_page&cmpm=list_flash_sale&cmpc=1">
                                    Hàng công nghệ xả kho
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        61
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                59.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <p className="num_people">
                                            <span className="ic_cm icon-num-people">
                                                f
                                            </span>
                                            <span className="text_num_people">
                                                >100
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <a href="/do-choi-be-yeu/do-choi/do-choi-cho-be-lon/bst-do-choi-lego-cao-cap-gia-soc-nhap-khau-my-cho-be_pp102092.html?cmpid=102092&cmps=home_page&cmpm=list_flash_sale&cmpc=2">
                                    <img alt="BST đồ chơi Lego cao cấp giá sốc -  nhập khẩu Mỹ cho bé" className="deal" height="231" src="http://resources2.cungmua.com/Product/102000/Long/cm_102092.jpg" width="490">
                                    </img>
                                </a>
                                <p className="icon_new">
                                    New
                                </p>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 19 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/do-choi-be-yeu/do-choi/do-choi-cho-be-lon/bst-do-choi-lego-cao-cap-gia-soc-nhap-khau-my-cho-be_pp102092.html?cmpid=102092&cmps=home_page&cmpm=list_flash_sale&cmpc=2">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/do-choi-be-yeu/do-choi/do-choi-cho-be-lon/bst-do-choi-lego-cao-cap-gia-soc-nhap-khau-my-cho-be_pp102092.html?cmpid=102092&cmps=home_page&cmpm=list_flash_sale&cmpc=2">
                                    BST đồ chơi Lego cao cấp giá sốc -  nhập khẩu Mỹ cho bé
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        75
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                319.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <span className="btn_flash_group">
                                            Số lượng có hạn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <a href="/thoi-trang-nu/phu-kien-thoi-trang-nu/dong-ho-nu/dong-ho-mk-guess-ck-nhap-khau-my-giam-shock_pp102649.html?cmpid=102649&cmps=home_page&cmpm=list_flash_sale&cmpc=3">
                                    <img alt="Đồng hồ MK - Guess - CK Nhập khẩu Mỹ (giảm shock)" className="deal" height="231" src="http://resources2.cungmua.com/Product/102000/Long/cm_102649.jpg" width="490">
                                    </img>
                                </a>
                                <p className="icon_new">
                                    New
                                </p>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 23 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/thoi-trang-nu/phu-kien-thoi-trang-nu/dong-ho-nu/dong-ho-mk-guess-ck-nhap-khau-my-giam-shock_pp102649.html?cmpid=102649&cmps=home_page&cmpm=list_flash_sale&cmpc=3">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/thoi-trang-nu/phu-kien-thoi-trang-nu/dong-ho-nu/dong-ho-mk-guess-ck-nhap-khau-my-giam-shock_pp102649.html?cmpid=102649&cmps=home_page&cmpm=list_flash_sale&cmpc=3">
                                    Đồng hồ MK - Guess - CK Nhập khẩu Mỹ (giảm shock)
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        92
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                1.738.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <span className="btn_flash_group">
                                            Số lượng có hạn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <a href="/do-choi-be-yeu/thoi-trang-tre-em/be-trai/fashion-kid-bst-do-tre-em-mua-he-thuong-hieu-vta-kids_pp101914.html?cmpid=101914&cmps=home_page&cmpm=list_flash_sale&cmpc=4">
                                    <img alt="Fashion Kid - BST Đồ trẻ em mùa hè - Thương hiệu VTA KIDS" className="deal" height="231" src="http://resources2.cungmua.com/Product/101000/Long/cm_101914.jpg" width="490">
                                    </img>
                                </a>
                                <p className="icon_new">
                                    New
                                </p>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 10 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/do-choi-be-yeu/thoi-trang-tre-em/be-trai/fashion-kid-bst-do-tre-em-mua-he-thuong-hieu-vta-kids_pp101914.html?cmpid=101914&cmps=home_page&cmpm=list_flash_sale&cmpc=4">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/do-choi-be-yeu/thoi-trang-tre-em/be-trai/fashion-kid-bst-do-tre-em-mua-he-thuong-hieu-vta-kids_pp101914.html?cmpid=101914&cmps=home_page&cmpm=list_flash_sale&cmpc=4">
                                    Fashion Kid - BST Đồ trẻ em mùa hè - Thương hiệu VTA KIDS
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        69
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                79.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <span className="btn_flash_group">
                                            Số lượng có hạn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <a href="/thoi-trang-nam/phu-kien-thoi-trang-nam/mat-kinh-nam/mat-kinh-nhap-khau-tu-usa-sale-off-75_pp102038.html?cmpid=102038&cmps=home_page&cmpm=list_flash_sale&cmpc=5">
                                    <img alt="Mắt kính nhập khẩu từ USA - Sale off 75%" className="deal" height="231" src="http://resources2.cungmua.com/Product/102000/Long/cm_102038.jpg" width="490">
                                    </img>
                                </a>
                                <p className="icon_new">
                                    New
                                </p>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 38 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/thoi-trang-nam/phu-kien-thoi-trang-nam/mat-kinh-nam/mat-kinh-nhap-khau-tu-usa-sale-off-75_pp102038.html?cmpid=102038&cmps=home_page&cmpm=list_flash_sale&cmpc=5">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/thoi-trang-nam/phu-kien-thoi-trang-nam/mat-kinh-nam/mat-kinh-nhap-khau-tu-usa-sale-off-75_pp102038.html?cmpid=102038&cmps=home_page&cmpm=list_flash_sale&cmpc=5">
                                    Mắt kính nhập khẩu từ USA - Sale off 75%
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        70
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                399.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <span className="btn_flash_group">
                                            Số lượng có hạn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <a href="/my-pham-suc-khoe/my-pham-nuoc-hoa/trang-diem/the-gioi-nuoc-hoa-huong-thom-lan-toa_pp101922.html?cmpid=101922&cmps=home_page&cmpm=list_flash_sale&cmpc=6">
                                    <img alt="Thế giới nước hoa - Hương thơm lan tỏa" className="deal" height="231" src="http://resources2.cungmua.com/Product/101000/Long/cm_101922.jpg" width="490">
                                    </img>
                                </a>
                                <p className="icon_new">
                                    New
                                </p>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 15 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/my-pham-suc-khoe/my-pham-nuoc-hoa/trang-diem/the-gioi-nuoc-hoa-huong-thom-lan-toa_pp101922.html?cmpid=101922&cmps=home_page&cmpm=list_flash_sale&cmpc=6">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/my-pham-suc-khoe/my-pham-nuoc-hoa/trang-diem/the-gioi-nuoc-hoa-huong-thom-lan-toa_pp101922.html?cmpid=101922&cmps=home_page&cmpm=list_flash_sale&cmpc=6">
                                    Thế giới nước hoa - Hương thơm lan tỏa
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        38
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                199.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <span className="btn_flash_group">
                                            Số lượng có hạn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <a href="/nha-cua-gia-dung/nha-cua-doi-song/chan-ga-goi-nem/bst-drap-cotton-thang-loi-ao-goi-lot-gon-16m-x-2m-kem-me_pp102030.html?cmpid=102030&cmps=home_page&cmpm=list_flash_sale&cmpc=7">
                                    <img alt="BST  Drap Cotton Thắng Lợi áo gối lót gòn 1,6m x 2m kèm mề" className="deal" height="231" src="http://resources2.cungmua.com/Product/102000/Long/cm_102030.jpg" width="490">
                                    </img>
                                </a>
                                <p className="icon_new">
                                    New
                                </p>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 15 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/nha-cua-gia-dung/nha-cua-doi-song/chan-ga-goi-nem/bst-drap-cotton-thang-loi-ao-goi-lot-gon-16m-x-2m-kem-me_pp102030.html?cmpid=102030&cmps=home_page&cmpm=list_flash_sale&cmpc=7">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/nha-cua-gia-dung/nha-cua-doi-song/chan-ga-goi-nem/bst-drap-cotton-thang-loi-ao-goi-lot-gon-16m-x-2m-kem-me_pp102030.html?cmpid=102030&cmps=home_page&cmpm=list_flash_sale&cmpc=7">
                                    BST  Drap Cotton Thắng Lợi áo gối lót gòn 1,6m x 2m kèm mề
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        46
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                599.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <span className="btn_flash_group">
                                            Số lượng có hạn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <a href="/thoi-trang-nu/dam-vay/dam-xoe/bst-dam-hoa-dieu-da-cho-co-nang-cong-so_pp100894.html?cmpid=100894&cmps=home_page&cmpm=list_flash_sale&cmpc=8">
                                    <img alt="BST đầm hoa điệu đà cho cô nàng công sở" className="deal" height="231" src="http://resources2.cungmua.com/Product/100000/Long/cm_100894.jpg" width="490">
                                    </img>
                                </a>
                                <p className="flash_hover_T">
                                </p>
                                <div className="listdeal_hover_B">
                                    <span className="num_product">
                                        Có 19 sản phẩm
                                    </span>
                                    <a className="btn_view" href="/thoi-trang-nu/dam-vay/dam-xoe/bst-dam-hoa-dieu-da-cho-co-nang-cong-so_pp100894.html?cmpid=100894&cmps=home_page&cmpm=list_flash_sale&cmpc=8">
                                        XEM NGAY
                                    </a>
                                </div>
                            </div>
                            <div className="listdeal_info">
                                <a className="list_name" href="/thoi-trang-nu/dam-vay/dam-xoe/bst-dam-hoa-dieu-da-cho-co-nang-cong-so_pp100894.html?cmpid=100894&cmps=home_page&cmpm=list_flash_sale&cmpc=8">
                                    BST đầm hoa điệu đà cho cô nàng công sở
                                </a>
                                <div className="listdeal_group">
                                    <p className="listdeal_info_L num_down">
                                        52
                                        <span className="percent">
                                            %
                                        </span>
                                    </p>
                                    <p className="listdeal_info_Ce">
                                        <span className="trueprice1">
                                            Chỉ từ
                                        </span>
                                        <br>
                                            <span className="price">
                                                95.000đ
                                            </span>
                                        </br>
                                    </p>
                                    <p className="listdeal_info_Ce1">
                                        <span className="ic_cm icon-clock">
                                            g
                                        </span>
                                        <span className="countdown">
                                            02:28:28
                                        </span>
                                    </p>
                                    <div className="listdeal_info_R">
                                        <span className="btn_flash_group">
                                            Số lượng có hạn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        number: state.default.number
    }
}

export default connect(
    mapStateToProps,
    {
        increase,
        decrease
    }
)(Main)