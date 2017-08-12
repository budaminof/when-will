import { LOGIN } from './types';

export default function (values, callback) {
    // const request = axios.post(`/api/todos`, values)
    //                         .then(() => {
    //                             callback();
    //                         });
    const request = values;

    return {type: CREATE_TODO, payload: request};
};
