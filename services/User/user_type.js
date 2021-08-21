const categoryModel = require ('../../model/admin_user_auth');

class categoryservices {

async getuser (Status,callback) {
    await categoryModel
      .save()
      .then (res => {
        callback (null, res);
      })
      .catch (err => {
        callback (null, err);
      });
  }
}  	

module.exports = categoryservices;