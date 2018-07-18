/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  check: async (request, response) => {
    let user = await User.findOne({ id: request.params.user_id }).populate(
      "comment"
    );
    response.json(user || {});
  }
};
