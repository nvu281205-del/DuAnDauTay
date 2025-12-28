import book from "../assets/book.svg"
import phone from "../assets/phone.svg"
import sale from "../assets/sale.svg"
import "./Header.css"

export default function Header(){
    return(
   <>
    <header>
        <div className="headerfirst">
        <div className="left"> 
              <button >&#8249;</button>
            <button>&#8250;</button> 
            <span>Mã giảm giá</span>
        </div>
        <div className="nav">
            <div className="title">
                <img src={book}/>
                <span cl>Hướng dẫn mua hàng</span>
            </div>
            <div href="" className="title">
                <img src={sale}/>
                <span>Ưu đãi khách hàng</span>
            </div>
            <div href="" className="title">
                <img src={phone}/>
                <span>Thông tin liên hệ</span>
            </div>
        </div>
        </div>
   </header>   
   </>
    )
   
}