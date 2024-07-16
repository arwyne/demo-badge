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
import { SBUserProfile, UserListItem, WidgetApi } from "widget-sdk";

/**
 * React Component
 */
export interface DemoBadgeProps {
  message: string;
  widgetApi: WidgetApi;
}

export const DemoBadge = ({
  message,
  widgetApi,
}: DemoBadgeProps): ReactElement => {
  const [user, setUser] = useState<SBUserProfile | UserListItem[]>();

  useEffect(() => {
    widgetApi.getUserInformation().then((info) => {
      setUser(info);
    });
  }, []);

  return (
    <>
      {user ? (
        <div>
          <p style={{ marginBottom: 10 }}>All user attributes:</p>
          <ul>
            {Object.entries(user).map(([key, value]) => (
              <li>{`${key}: ${value}`}</li>
            ))}
          </ul>
          <p>{message}</p>
        </div>
      ) : null}
    </>
  );
};
