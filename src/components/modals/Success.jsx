import React from "react";
import ReactDOM from "react-dom";
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { MdError } from "react-icons/md";
import "../../style/success.css";


const Backdrop = () => {
    return <div className="backdrop" />
}

const SuccessOverlay = ({ mailAlert, setMailAlert }) => {

    return (
        <div className="success-header" >
            {mailAlert.isSuccessful && <FaCheckCircle style={{ fontSize: "105px", color: mailAlert.bgColor, marginTop: "-2rem" }} />}
            {!mailAlert.isSuccessful && <MdError style={{ fontSize: "105px", color: mailAlert.bgColor, marginTop: "-2rem" }} />}
            <div className="content">
                <h2 style={{ color: mailAlert.color }}>{mailAlert.title}</h2>
                <p> {mailAlert.message} </p>
            </div>
            <button style={{backgroundColor: mailAlert.bgColor}} onClick={() => setMailAlert({ isVisible: false, isSuccessful: false, title: "", message: "", color: "", bgColor: "" })}>Okay!</button>
        </div>
    )
}

const Success = ({ mailAlert, setMailAlert }) => {

    return (
        <React.Fragment>
            <Backdrop />
            {ReactDOM.createPortal(
                <SuccessOverlay setMailAlert={setMailAlert} mailAlert={mailAlert} />,
                document.getElementById('success-modal-root'))}
        </React.Fragment>
    )
}

export default Success;
// export {Backdrop}