import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { MemoryRouter } from "react-router";
import { TopMenu } from ".";
import { ITopMenuProps } from "./TopMenu";

const DEFAULT_PROPS: ITopMenuProps = {};

storiesOf("@components/organisms/TopMenu", module)
.addParameters({ component: TopMenu })
.addDecorator(story => (
<IntlProvider locale="en">story()</IntlProvider>
))
.add("default", () =>
<TopMenu {...DEFAULT_PROPS} />);