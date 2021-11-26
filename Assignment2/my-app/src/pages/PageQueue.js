import Call from "../components/Call";
import Queue from "../components/Queue";
import { useState, useEffect } from "react";

export default function PageQueue() {
  const [call, setCall] = useState(null);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    handleShow(call);
    setTimer(
      setTimeout(() => {
        setShow(false);
      }, 5000)
    );
    return () => {
      clearTimeout(timer);
      setShow(true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [call]);

  const handleShow = (data) => {
    if (data === undefined || data === null) {
      setShow(false);
    }
  };

  const sendDataToParent = (x) => {
    setCall(x);
  };

  return (
    <>
      <div class="row">
        <div class="col-md-7">
          <Queue parentToChild={call} sendDataToParent={sendDataToParent} />
        </div>
        <div class="col-md-5">{show ? <Call data={call} /> : <></>}</div>
      </div>
    </>
  );
}
