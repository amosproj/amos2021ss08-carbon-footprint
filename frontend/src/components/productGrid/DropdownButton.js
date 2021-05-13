import React, { useContext, useState } from "react";
import { getModels } from "interface/simaProInterface";
import Select from "react-select";
import { PrivateSectionContext } from "resources/PrivateSectionContext";

const SelectModelVariable = (props) => {
  const productID = props.productID;
  const productName = props.productName;
  const [selectedProducts, setSelectedProducts] = useContext(
    PrivateSectionContext
  );
  const variables = getModels(productID);
  const [selected, setSelected] = useState("Select a model");

  return (
    <Select
      options={variables}
      onChange={(props) => {
        console.log(props);
        variables.map((item) => (
          <a
            onClick={(props) => {
              const newSelectedProducts = [
                {
                  productID: productID,
                  productName: productName,
                  modelID: item.modelID,
                  modelName: item.modelName
                }
              ];
              setSelected(item.modelName);
              setSelectedProducts(newSelectedProducts);
            }}
            className="w3-bar-item w3-button"
            key={item.modelID}
          >
            {item.modelName}
          </a>
        ));
      }}
    />
  );
};

export default SelectModelVariable;
