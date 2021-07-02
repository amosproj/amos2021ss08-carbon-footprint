import logo from 'assets/logo/LogoCarbonteam.png';
import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_2 from 'assets/dummyImages/Logo2.png';

export function getDummyProductData() {
    // WTH are we looking for here? do we need to iterate over projects (api_demo_project, ...) or over final processes?
    const products = [
        {
            Id: '09f64eeb-13b0-4e09-9fb4-50398483ecfd', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Electric Motors#ID:09f64eeb-13b0-4e09-9fb4-50398483ecfd#Scenario:scenario_baseline',
            Description:
                'Categorie:Generation/Product#Model:09f64eeb-13b0-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo
        },
        {
            Id: 'aufwlc93-kldp-4fer-15s7-51245631fega', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Electric Motors#ID:aufwlc93-kldp-4fer-15s7-51245631fega#Scenario:scenario_scemarop 1', //final_process_name?
            Description:
                'Categorie:Generation/Product#Model:09f64eeb-13b0-4e09-9fb4-503984f3ecfd#Location:Germany',
            productImage: logo_1
        },
        {
            Id: '7ghnaoeb-kfue-qp04-slfg-12059492gggg', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Wireless Power Transmittor#ID:7ghnaoeb-kfue-qp04-slfg-12059492begp#Scenario:scenario_secondOption',
            Description:
                'Categorie:Transmission/Product#Model:09f64eeb-12f0-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo_2
        },
        {
            Id: '7ghnaoeb-kfue-qp04-slfg-12059492begp', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Wireless Power Transmittor#ID:7ghnaoeb-kfue-qp04-slfg-12059492begp#Scenario:scenario_baseline',
            Description:
                'Categorie:Transmission/Product#Model:09f64eeb-12f0-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo_2
        },
        {
            Id: 'whatis00-this-id00-just-d01n9352rnow', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Gas Turbine#ID:whatis00-this-id00-just-d01n9352rnow#Scenario:scenario_baseline',
            Description:
                'Categorie:Generation/Product#Model:09f64eeb-12f0-4e09-9fb4-50395583ecfd#Location:Germany',
            productImage: logo
        },
        {
            Id: 'aufglc25-kldd-4ger-16s2-51002631fell', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Alround Product#ID:aufglc25-kldd-4ger-16s2-51002631fell#Scenario:scenario_baseline',
            Description:
                'Categorie:Generation/Product#Model:09f64eeb-1234-4e09-9fb4-50398483ecfd#Location:France',
            productImage: logo_1
        },
        {
            Id: 'aufglc25-kldd-4ger-16s2-5100Julian00', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Super Product#ID:aufglc25-kldd-4ger-16s2-5100Julian00#Scenario:scenario_baseline',
            Description:
                'Categorie:Generation/Product#Model:09f64eeb-1234-4321-9fb4-50398483ecfd#Location:Germany',
            productImage: logo_1
        },
        {
            Id: 'aufglc25-kldd-4ger-16s2-5100100sai00', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Super Product#ID:aufglc25-kldd-4ger-16s2-5100100sai00#Scenario:scenario_1',
            Description:
                'Categorie:Generation/Product#Model:09f64eeb-1234-4321-9fb4-50398483ecfd#Location:India',
            productImage: logo_1
        },
        {
            Id: 'aufglc25-kldd-4ger-16s2-5100MartinWl', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Super Service#ID:aufglc25-kldd-4ger-16s2-5100MartinWl#Scenario:scenario_baseline',
            Description:
                'Categorie:Generation/Service#Model:09f64eeb-1234-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo
        },
        {
            Id: 'aufglc25-kldd-4ger-16s2-510MartinD1l', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Super Service#ID:aufglc25-kldd-4ger-16s2-510MartinD1l#Scenario:scenario_1',
            Description:
                'Categorie:Generation/Service#Model:09f64eeb-1234-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo
        },
        {
            Id: 'aufglc25-kldd-4ger-16s2-510026Irem01', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Super Solution#ID:aufglc25-kldd-4ger-16s2-510026Irem01#Scenario:scenario_baseline',
            Description:
                'Categorie:Generation/Solution#Model:09f64eeb-1234-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo_1
        },
        {
            Id: 'hello0th-ere0-4ger-16s2-51002631Mani', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Super Solution#ID:hello0th-ere0-4ger-16s2-51002631Mani#Scenario:scenario_1',
            Description:
                'Categorie:Transmission/Solution#Model:09f64eeb-1234-4e09-9fb4-50398483ecfd#Location:India',
            productImage: logo_1
        },
        {
            Id: 'hello0th-ere0-4ger-16s2-51002Parham1',
            Name: 'THE Solution#ID:hello0th-ere0-4ger-16s2-51002Parham1#Scenario:scenario_baseline',
            Description:
                'Categorie:Transmission/Solution#Model:09f64eeb-1234-4e09-9fb4-50355483ecfd#Location:Iran',
            productImage: logo_1
        }
    ];
    return products;
}

/**
 * should get all the Models for one Product
 * @param productID the id of the Project to get the models for
 * @returns
 */
//export async function getModels(productID) {
export function getModels(productName, productID) {
    switch (productID) {
        case '09f64eeb-13b0-4e09-9fb4-50398483ecfd':
            return [{ modelID: 1, productID: productID, modelName: 'Electric Motor Type 25b' }];
        case 'aufwlc93-kldp-4fer-15s7-51245631fega':
            return [];
        case '7ghnaoeb-kfue-qp04-slfg-12059492begp':
            return [
                { modelID: 6, productID: productID, modelName: 'Transmitter DIN42a' },
                { modelID: 7, productID: productID, modelName: 'Transmitter DIN42b' },
                { modelID: 8, productID: productID, modelName: 'Transmitter DIN42c' },
                { modelID: 9, productID: productID, modelName: 'Transmitter DIN42d' }
            ];
        case 'whatis00-this-id00-just-d01n9352rnow':
            return [
                { modelID: 10, productID: productID, modelName: 'Gas Turbine Type 1' },
                { modelID: 11, productID: productID, modelName: 'Gas Turbine Type 2' },
                { modelID: 12, productID: productID, modelName: 'Gas Turbine Type 3' },
                { modelID: 13, productID: productID, modelName: 'Gas Turbine Type 4' }
            ];
        case 'aufglc25-kldd-4ger-16s2-51002631fell':
            return [
                { modelID: 14, productID: productID, modelName: 'Allround Product 1' },
                { modelID: 15, productID: productID, modelName: 'Allround Product 2' },
                { modelID: 16, productID: productID, modelName: 'Allround Product 3' },
                { modelID: 17, productID: productID, modelName: 'Allround Product 4' }
            ];
        default:
            return [{ modelID: 42, productID: productID, modelName: productName }];
    }
}
