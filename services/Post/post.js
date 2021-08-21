const postModel = require ('../../model/category');

class postservices {
  async addnewpost (post_status,callback) {
    let postdata = new postModel(req.body)
    await postdata
      .save ()
      .then (res => {
        callback (null, res);
      })
      .catch (err => {
        callback (err, null);
      });
  }

  async updatepost (id, body, callback) {
    console.log ('your post', body);
    await postModel
      .findOneAndUpdate (id, body, {new: true})
      .then (res => {
        console.log ('updating process', res);
        callback (null, res);
      })
      .catch (err => {
        callback (err, null);
      });
  }

  async deletepost (id, body, callback) {
    console.log ('your post', id, body);

    await postModel
      .findOneAndRemove (id, body)
      .then (res => {
        console.log ('deleting process', res);
        callback (null, res);
      })
      .catch (err => {
        callback (err, null);
      });
  }
}
module.exports = postservices;

