import React from "react";
import { possibleStatus } from "../helpers/defaultData";

const StatusSelect = ({value, onChange}) => {
    return (
        <select value={value} onChange={onChange} className="status-select">
            <option value="">Select a status</option>
            {possibleStatus.map((status) => (
                <option key={status.id} value={status.id}>
                    {status.label}
                </option>
            ))}
        </select>
    );
}

export default StatusSelect;