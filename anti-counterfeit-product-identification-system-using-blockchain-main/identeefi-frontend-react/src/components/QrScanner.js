import React from "react";
import { useZxing } from "react-zxing";

const QrScanner = ({ passData }) => {

  const { ref } = useZxing({
    onDecodeResult(result) {
      console.log("SCANNED:", result.getText());

      passData(result.getText());
    },

    onError(error) {
      // optional
      // console.log(error);
    },
  });

  return (
    <div style={{ width: "100%" }}>
      <video
        ref={ref}
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default QrScanner;