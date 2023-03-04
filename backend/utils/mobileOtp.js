const axios = require("axios");

exports.sendMobileOtp = async ({ phoneno, otp }) => {
  try {
    var response = await axios.get("https://www.fast2sms.com/dev/bulkV2", {
      params: {
        authorization: process.env.FAST2SMS,
        variables_values: otp,
        route: "otp",
        numbers: phoneno,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
