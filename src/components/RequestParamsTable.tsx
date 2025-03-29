import React from 'react';

type TRequestParam = {
    name: string;
    requirement: string;
    type: string;
    description: string;
    properties?: TRequestParam[];
};

type TRequestParams = TRequestParam[];

const RequestParamsTable = ({ requestParams }: { requestParams: TRequestParams }) => {
    const renderParams = (params: TRequestParams, parentParam?: string) => {
        return params.map((param, index) => (
            <React.Fragment key={`${param.name}-${index}`}>
                <tr>
                    <td className="px-4 py-2 border border-gray-400">
                        {parentParam && `${parentParam}.`}{param.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-400 text-center">{param.requirement}</td>
                    <td className="px-4 py-2 border border-gray-400 text-center">{param.type}</td>
                    <td className="px-4 py-2 border border-gray-400">{param.description}</td>
                </tr>
                {param.properties && renderParams(param.properties, param.name)}
            </React.Fragment>
        ));
    };

    return (
        <table className="border-collapse border border-gray-400 w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2 border border-gray-400">Parameter Name</th>
                    <th className="px-4 py-2 border border-gray-400">Requirement</th>
                    <th className="px-4 py-2 border border-gray-400">Type</th>
                    <th className="px-4 py-2 border border-gray-400">Description</th>
                </tr>
            </thead>
            <tbody>{renderParams(requestParams)}</tbody>
        </table>
    );
};

export default RequestParamsTable;
