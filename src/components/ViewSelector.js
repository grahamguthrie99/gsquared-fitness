import React from "react";
import PropTypes from "prop-types";
import { SecondaryButton } from "./Buttons";
import styled from "styled-components";

const SelectorWrapper = styled.div`
  padding-top: 125px;
`;

const SelectorMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const ViewWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;
const ImageWrapper = styled.div`
  display: flex;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const ViewSelector = ({
  selection,
  setSelection,
  viewOptions,
  views,
  image,
}) => {
  return (
    <SelectorWrapper>
      <SelectorMenu>
        {selection > -1 ? (
          <SecondaryButton onClick={() => setSelection(-1)}>
            Back
          </SecondaryButton>
        ) : (
          <>
            {viewOptions.map((input, index) => (
              <SecondaryButton key={index} onClick={() => setSelection(index)}>
                {input}
              </SecondaryButton>
            ))}
          </>
        )}
      </SelectorMenu>
      {selection > -1 ? (
        <ViewWrapper>{views[selection]}</ViewWrapper>
      ) : (
        <ImageWrapper>
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </ImageWrapper>
      )}
    </SelectorWrapper>
  );
};

ViewSelector.propTypes = {
  selection: PropTypes.number,
  setSelection: PropTypes.func,
  viewOptions: PropTypes.array,
  views: PropTypes.array,
  image: PropTypes.string,
};
