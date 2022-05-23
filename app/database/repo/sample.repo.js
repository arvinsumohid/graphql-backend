/**
 * const Sample = require('@app/models/Sample.model');
 *
 *
 * return {
 *  repoFieldName: async ({ id }) => {
 *    if (!hasAdminRole)
 *      return new Error(`Access denied to "${fieldName}" field.`);
 *
 *   try {
 *      const sample = await Sample.find({ _id: id });
 *
 *     return sample;
 *    } catch (err) {
 *     throw new Error(err);
 *    }
 *  },
 * repoFieldNameMutation: async ({ id, input }) => {
 *  const { _id } = context.user;
 *  const { input1, input2 } = input;
 *
 *  if (!hasAdminRole)
 *    return new Error(`Access denied to "${fieldName}" field.`);
 *
 *    if (!input1 || input1 === '') {
 *      const error = new Error('The field input1 cannot be blank.');
 *      error.code = 400;
 *      return error;
 *    }
 *
 *    if (!input2 || input2 === '') {
 *      const error = new Error('The field input2 cannot be blank.');
 *      error.code = 400;
 *      return error;
 *    }
 *
 *    const sample = new Sample({
 *      mutationId: id,
 *      input1,
 *      input2,
 *      user: _id,
 *    });
 *
 *    try {
 *      await sample.save();
 *
 *      return sample;
 *    } catch (error) {
 *      error.code = 400;
 *      throw error;
 *    }
 *  },
 * };
 */
module.exports = (context, fieldName) => {
  const fieldsThatRequireAuth = ['repoFieldNames'];

  if (fieldsThatRequireAuth.includes(fieldName) && !context.isAuth) {
    const error = new Error('You are not authenticated!');
    error.data = [context.error];
    error.code = 401;
    throw error;
  }

  //   const hasAdminRole = true;

  return {};
};
