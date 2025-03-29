import React from 'react'

type TRequestParams = {
    name: string;
    rules: string;
    description: string;
}[];

const RequestParamsTable = ({requestParams}: { requestParams: TRequestParams }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td className="px-4 py-2 font-semibold">Name</td>
                    <td className="px-4 py-2 font-semibold">Rules</td>
                    <td className="px-4 py-2 font-semibold">Description</td>
                </tr>
            </thead>
            <tbody>
                {requestParams.map((param, index) => {
                    return (
                        <tr key={index}>
                            <td className="px-4 py-2">{param.name}</td>
                            <td className="px-4 py-2">{param.rules}</td>
                            <td className="px-4 py-2" >{param.description}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RequestParamsTable;