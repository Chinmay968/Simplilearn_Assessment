import Navbar from "./Navbar";


export default function PayNow(){
    return(
        <div>
            <Navbar/>
        <br/>
        <h3 align="center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDokc7QWmqQlE9VI4WyAN3BqBrWJbjKmwHA&usqp=CAU" height="300px"/>
        </h3>
        <br/>
        <h3 align="center">Thank you for shopping with us !!</h3>
        <br/>
        <h5 align="center"> Your order will be dilivered in 2-3 days.</h5>
        <br/>
        <br/>
        <br/>
        <h5 align="center">
        <a href="/" class="btn btn-primary btn-sm float-right"><span className="pay-btn">Continue Shopping</span></a>
        </h5>
    </div>
    )
}