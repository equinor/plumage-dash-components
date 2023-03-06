/**
 * Copyright (c) 2021- Equinor ASA
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint no-magic-numbers: 0 */
import React from "react";
import { Select } from "../lib/index"

const App: React.FC = () => {

    return (<Select id="someid" options={[
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 }]} />);
};

export default App;
