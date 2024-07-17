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

export const DemoBadge = ({
  widgetApi,
  message,
}: DemoBadgeProps): ReactElement => {
  const [user, setUser] = useState<ExtendSBUserProfile>();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    widgetApi.getUserInformation().then((info) => {
      setUser(info);
    });
  }, []);

  const badgeColor = user?.badge ? getBadgeInfo(user?.badge) : "gray";

  return (
    <>
      <span
        style={{
          display: "inline-block",
          backgroundColor: badgeColor,
          transform: `scale(${isHovered ? 1.2 : 1})`,
          transition: "transform .2s",
          padding: "5px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="test"
      >
        {message}
      </span>

      <i className="fas fa-camera"></i>
    </>
  );
};
