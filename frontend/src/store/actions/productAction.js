import { getCategorizedProducts } from "interface/simaProInterface";
import { processingProducts } from "store/slices/productSlice";

export const loadProjects = (selectedCategory) => async (dispatch) => {
    try {
        await getCategorizedProducts(selectedCategory).then((products) => {
        dispatch(
            processingProducts(JSON.parse(JSON.stringify(products)))
        );
      })
    } catch (error) {
        console.warn("loading projects didnt work", error)
    }
};
