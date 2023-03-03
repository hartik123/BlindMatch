
exports.checkCred = (val) => {
    let emailRegex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
    let mobileRegex = new RegExp("^[0-9]{10}$");
  
    if (emailRegex.test(val)) {
      return 'email';
    } else if (mobileRegex.test(val)) {
      return 'mobile';
    } else {
      return 'invalid';
    }
}