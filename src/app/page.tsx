import mjEcommerceApi from "./api/MjEcommerceApi";
import RequestParamsTable from "../components/RequestParamsTable";

export default function Home() {
	const appName = process.env.NEXT_PUBLIC_APP_NAME as string;

	return (
		<div className="container mx-auto py-4">
			<h1>{ appName }</h1>
			{mjEcommerceApi.map((ecommerceApi, ecommerceApiIndex) => {
				return (
					<details key={ecommerceApiIndex}>
						<summary>{ecommerceApi.apiName}</summary>

						<fieldset>
							<legend>{ecommerceApi.apiPath}</legend>
							{ecommerceApi.apis.map((api, apiIndex) => {
								return (
									<details key={apiIndex}>
										<summary>{api.httpMethod} {api.path}</summary>
										<div className="px-4">
											<p>Description: {api.description}</p>
											<p>Request Params</p>
											{Object.entries(api.requestParams).map(([key, value]) => {
												return (
													<div key={key}>
														{Array.isArray(value) && value.length > 0 && (
															<fieldset>
																<legend className="capitalize">{key}</legend>
																<RequestParamsTable requestParams={value} />
															</fieldset>
														)}
													</div>
												)
											})}
										</div>
									</details>
								)
							})}
						</fieldset>
					</details>
				)
			})}
		</div>
	);
}
