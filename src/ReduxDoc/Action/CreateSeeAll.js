import { SEE_ALL } from "../Constants/Constant";
const CreateSeeAll = (payload) => {
    return {
        type: SEE_ALL,
        payload: payload

    }
};

export default CreateSeeAll;