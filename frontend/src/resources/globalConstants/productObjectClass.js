/**
 * a productObject, that holds all data of one product
 */
export default class productObject {
    productID = '';
    productName = '';
    categories = [];
    productImage = '';
    type = '';
    scenarioType = '';
    scenarioList = []; // A list of products starting with itself as the baseline Scenario

    /**
     * Creates a new productObject
     *
     * @param {String} productID
     * @param {String} productName
     * @param {[String]} categories
     * @param {String} productImage
     * @param {String} type
     * @param {String} scenarioType
     * @param {[productObject]} scenarioList
     */
    constructor(
        productID,
        productName,
        categories,
        productImage,
        type,
        scenarioType,
        scenarioList
    ) {
        this.productID = productID;
        this.productName = productName;
        this.categories = categories;
        this.productImage = productImage;
        this.type = type;
        this.scenarioType = scenarioType;
        this.scenarioList = scenarioList;
    }
}
