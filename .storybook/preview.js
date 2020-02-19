import React from "react";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

addDecorator(withInfo);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
