import React, { useState } from 'react'
import './Payment.css'
import Loading from '../../components/loading/Loading'
import DialogInform from '../../components/dialog/DialogInform'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    const [isOpendialog, setOpenDialog] = useState(false)

    const hideLoading = () => {
        setLoading(false)
    }

    const haldeCloseDialog = () => {
        setOpenDialog(false)
        navigate('/home')

    }

    const handlePayment = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpenDialog(true)
        }, 2000)
    }

    return (
        <section className='payment-container'>
            <DialogInform isOpen={isOpendialog} onClose={haldeCloseDialog}/>
            <Loading isLoading={isLoading} hideLoading={hideLoading}/>
            <h3 style={{textAlign: 'center'}}>Checkout Form</h3>
            <div className="row">
                <div className="col-75">
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-50">
                                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                                    <label for="phone"><i className="fa fa-phone"></i> Phone number</label>
                                    <input type="text" id="phoneNumber" name="phoneNumber" placeholder="037xxxxxxx" />
                                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label for="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="New York" />

                                    <div className="row">
                                        <div className="col-50">
                                            <label for="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div className="col-50">
                                            <label for="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Cash
                            </label>
                            <input type="button" value="Thanh toán" className="btn" onClick={handlePayment}/>
                        </form>
                    </div>
                </div>
               
            </div>

        </section>
    )
}

export default Payment
