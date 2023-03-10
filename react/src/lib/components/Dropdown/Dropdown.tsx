/**
 * Copyright (c) 2021- Equinor ASA
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { default as ReactSelect } from "react-select";
//import makeAnimated from "react-select/animated";
import { components } from "react-select";

import {
    getPropsWithMissingValuesSetToDefault,
    Optionals,
} from "./DefaultPropsHelpers";


const propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string.isRequired,
    /**
     * The label of the dropdown
     */
    label: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    isMulti: PropTypes.bool,
    closeMenuOnSelect: PropTypes.bool,
    hideSelectedOptions: PropTypes.bool,
    allowSelectAll: PropTypes.bool,
    isClearable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called whenever any of the properties change
     */
    setProps: PropTypes.func
};

const defaultProps: Optionals<InferProps<typeof propTypes>> = {
    label: "",
    value: [],
    options: [],
    isMulti: true,
    closeMenuOnSelect: false,
    hideSelectedOptions: true,
    allowSelectAll: true,
    isClearable: true,
    isDisabled: false,
    style: {},
    setProps: (): void => {
        return;
    },
};

/**
 * Multi selection dropdown selector
 * Extension of the react selector
 */

const Option = (props: any) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const allOption = {
    label: "Select all",
    value: "*"
};

const ValueContainer = ({ children, ...props }: any) => {
    const toBeRendered = children;

    return (
        <components.ValueContainer {...props}>
            {toBeRendered}
        </components.ValueContainer>
    );
};

const MultiValue = (props: any) => {
    const labelToBeDisplayed = `${props.data.label}, `;

    return (
        <components.MultiValue {...props}>
            <span>{labelToBeDisplayed}</span>
        </components.MultiValue>
    );
};

//const animatedComponents = makeAnimated();

export const Dropdown: React.FC<InferProps<typeof propTypes>> = (props: InferProps<typeof propTypes>) => {
    const {
        id,
        label,
        style,
        value,
        options,
        isMulti,
        closeMenuOnSelect,
        hideSelectedOptions,
        allowSelectAll,
        isClearable,
        isDisabled,
        setProps,
    } = getPropsWithMissingValuesSetToDefault(props, defaultProps);

    const options_input = options.every((option) => typeof option === "object")
        ? options
        : options.map((option) => ({ label: option, value: option }));

    const handleChange = (selected: any, event: any) => {
        let result = selected;

        if (selected !== null && selected.length > 0) {
            if (selected[selected.length - 1].value === allOption.value) {
                result = options;
                result = result.filter((item) => item.label !== "Select all");
            }
        }

        setProps({
            value: selected === null ? [] : result
        });
    };

    return (
        <div id={id} style={style}>
            <ReactSelect
                options={
                    options_input.length === value.length ||
                        !allowSelectAll ||
                        !isMulti
                        ? options_input
                        : [allOption, ...options_input]
                }
                isMulti={isMulti}
                closeMenuOnSelect={closeMenuOnSelect}
                hideSelectedOptions={hideSelectedOptions}
                components={{
                    Option,
                    MultiValue,
                    ValueContainer
                    //animatedComponents
                }}
                onChange={handleChange}
                allowSelectAll={allowSelectAll}
                value={value}
                isClearable={isClearable}
                isDisabled={isDisabled}
            />
        </div>
    );
};

Dropdown.defaultProps = defaultProps;
Dropdown.prototype = propTypes;
