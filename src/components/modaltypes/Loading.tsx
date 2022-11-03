import React from "react";
import { Spin } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

const Example = styled.div`
  text-align: center;
  // color: blue;
  border-radius: 4px;
`;

const Loading: React.FC = () => (
  <>
    <Example>
      <Spin size="large" />
    </Example>
    {/* Loading....... */}
  </>
);

export default Loading;
