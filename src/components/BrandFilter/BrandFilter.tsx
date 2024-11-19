import { useState } from "react";
import styled from "styled-components";
import { shoes } from "../../data/shoes";
import { singularOrPlural } from "../../utils/string";

export default function BrandFilter() {
  const brands = Array.from(new Set(shoes.map((shoe) => shoe.company)));

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleOnClickReset = () => {
    setSelectedBrands([]);
  };

  const handleOnClickAddBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      const filteredBrands = selectedBrands.filter((selectedBrand) => {
        return brand !== selectedBrand;
      });
      setSelectedBrands(filteredBrands);
    } else {
      setSelectedBrands((prevSelectedBrands) => {
        return [...prevSelectedBrands, brand];
      });
    }
  };

  return (
    <BrandFilterStyled>
      {selectedBrands.length > 0 && (
        <span className="reset-button" onClick={handleOnClickReset}>
          Reset filter{singularOrPlural(selectedBrands, 1, "s")}
        </span>
      )}
      <div className="brands-container">
        {brands?.map((brand) => {
          return (
            <div
              className={`brand-name ${
                selectedBrands.includes(brand) ? "active" : null
              }`}
              onClick={() => handleOnClickAddBrand(brand)}
            >
              {brand}
            </div>
          );
        })}
      </div>
    </BrandFilterStyled>
  );
}

const BrandFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .reset-button {
    width: 800px;
    font-size: 0.8rem;
    margin-bottom: 0.35rem;
    cursor: pointer;
    font-weight: 300;
    color: #1e293b;

    &:hover {
      color: red;
    }
  }

  .brands-container {
    display: flex;
    gap: 0.5rem;
    width: 800px;
    flex-wrap: wrap;

    .brand-name {
      flex-shrink: 0;
      display: flex;
      border: 1px solid #f1f5f9;
      padding: 0.75rem;
      width: fit-content;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 300;
      color: #1e293b;
      font-size: 0.8rem;

      &:hover {
        border-color: #cbd5e1;
      }
    }

    .active {
      background-color: #f1f5f9;
    }
  }
`;
