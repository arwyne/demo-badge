/*!
 * Copyright 2024, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement, useEffect, useState } from "react";
import { SBUserProfile, WidgetApi } from "widget-sdk";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { getBadgeInfo } from "./helper";

/**
 * React Component
 */
export interface DemoBadgeProps {
  message: string;
  widgetApi: WidgetApi;
}

type ExtendSBUserProfile = SBUserProfile & {
  badge?: string;
};

interface StyledBadgeProps {
  color: string | null;
}

export const DemoBadge = ({ widgetApi }: DemoBadgeProps): ReactElement => {
  const [user, setUser] = useState<ExtendSBUserProfile>();

  useEffect(() => {
    widgetApi.getUserInformation().then((info) => {
      setUser(info);
    });
  }, []);

  const badgeColor = user?.badge ? getBadgeInfo(user?.badge) : null;

  return (
    <>
      <StyledBadge
        icon={faEnvelope}
        size="xl"
        className="highlight"
        color={badgeColor}
      />
    </>
  );
};

const StyledBadge = styled(FontAwesomeIcon)<
  StyledBadgeProps | FontAwesomeIconProps
>`
  color: ${({ color }) => color};
`;
