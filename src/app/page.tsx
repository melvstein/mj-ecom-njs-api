import mjEcommerceApi from "./api/MjEcommerceApi";
import RequestParamsTable from "./components/RequestParamsTable";

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

			<details className="mt-4 space-y-4">
				<summary>Product API</summary>
				<details className="px-4">
					<summary>/api/product/add</summary>
					<fieldset className="border border-gray-300 p-4 rounded-lg">
						<legend className="text-lg px-2">{ "{{apiUrl}}" }/api/product/add</legend>
						<div className="px-4">
							<p>HTTP Method: POST</p>
							<p>Description: Add new product.</p>
						</div>
						<fieldset className="border border-gray-300 p-4 rounded-lg">
							<legend className="text-lg px-2">Request parameters</legend>
							<table>
								<thead>
									<tr>
										<td className="px-4 py-2 font-semibold">Name</td>
										<td className="px-4 py-2 font-semibold">Rules</td>
										<td className="px-4 py-2 font-semibold">Description</td>
									</tr>
								</thead>
								<tbody>
									{addProductApiParams.map((param, index) => {
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
						</fieldset>
					</fieldset>
				</details>
				<details className="px-4">
					<summary>/api/product/update</summary>
					<fieldset className="border border-gray-300 p-4 rounded-lg">
						<legend className="text-lg px-2">{ "{{apiUrl}}" }/api/product/update</legend>
						<div className="px-4">
							<p>HTTP Method: POST</p>
							<p>Description: Update product details.</p>
						</div>
						<fieldset className="border border-gray-300 p-4 rounded-lg">
							<legend className="text-lg px-2">Request parameters</legend>
							<table>
								<thead>
									<tr>
										<td className="px-4 py-2 font-semibold">Name</td>
										<td className="px-4 py-2 font-semibold">Rules</td>
										<td className="px-4 py-2 font-semibold">Description</td>
									</tr>
								</thead>
								<tbody>
									{updateProductApiParams.map((param, index) => {
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
						</fieldset>
					</fieldset>
				</details>
				<details className="px-4">
					<summary>/api/product/delete</summary>
					<fieldset className="border border-gray-300 p-4 rounded-lg">
						<legend className="text-lg px-2">{ "{{apiUrl}}" }/api/product/delete</legend>
						<div className="px-4">
							<p>HTTP Method: POST</p>
							<p>Description: Update product details.</p>
						</div>
						<fieldset className="border border-gray-300 p-4 rounded-lg">
							<legend className="text-lg px-2">Request parameters</legend>
							<table>
								<thead>
									<tr>
										<td className="px-4 py-2 font-semibold">Name</td>
										<td className="px-4 py-2 font-semibold">Rules</td>
										<td className="px-4 py-2 font-semibold">Description</td>
									</tr>
								</thead>
								<tbody>
									{deleteProductApiParams.map((param, index) => {
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
						</fieldset>
					</fieldset>
				</details>
				<details className="px-4">
					<summary>/api/product/addToCart</summary>
					<fieldset className="border border-gray-300 p-4 rounded-lg">
						<legend className="text-lg px-2">{ "{{apiUrl}}" }/api/addToCart</legend>
						<div className="px-4">
							<p>HTTP Method: POST</p>
							<p>Description: Add to cart.</p>
						</div>
						<fieldset className="border border-gray-300 p-4 rounded-lg">
							<legend className="text-lg px-2">Request parameters</legend>
							<table>
								<thead>
									<tr>
										<td className="px-4 py-2 font-semibold">Name</td>
										<td className="px-4 py-2 font-semibold">Rules</td>
										<td className="px-4 py-2 font-semibold">Description</td>
									</tr>
								</thead>
								<tbody>
									{addToCartApiParams.map((param, index) => {
										return (
											<tr key={index}>
												<td className="px-4 py-2">{ param.name }</td>
												<td className="px-4 py-2">{ param.rules }</td>
												<td className="px-4 py-2">{ param.description }</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</fieldset>
					</fieldset>
				</details>
				<details className="px-4">
					<summary>/api/product/cartItems</summary>
					<fieldset className="border border-gray-300 p-4 rounded-lg">
						<legend className="text-lg px-2">{ "{{apiUrl}}" }/api/cartItems</legend>
						<div className="px-4">
							<p>HTTP Method: POST</p>
							<p>Description: Get cart items.</p>
						</div>
						<fieldset className="border border-gray-300 p-4 rounded-lg">
							<legend className="text-lg px-2">Request parameters</legend>
							<table>
								<thead>
									<tr>
										<td className="px-4 py-2 font-semibold">Name</td>
										<td className="px-4 py-2 font-semibold">Rules</td>
										<td className="px-4 py-2 font-semibold">Description</td>
									</tr>
								</thead>
								<tbody>
									{getCartItemsApiParams.map((param, index) => {
										return (
											<tr key={index}>
												<td className="px-4 py-2">{ param.name }</td>
												<td className="px-4 py-2">{ param.rules }</td>
												<td className="px-4 py-2">{ param.description }</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</fieldset>
					</fieldset>
				</details>
				<details className="px-4">
					<summary>/api/product/updateCartItemQuantity</summary>
					<fieldset className="border border-gray-300 p-4 rounded-lg">
						<legend className="text-lg px-2">{ "{{apiUrl}}" }/api/updateCartItemQuantity</legend>
						<div className="px-4">
							<p>HTTP Method: POST</p>
							<p>Description: Update cart item quantity.</p>
						</div>
						<fieldset className="border border-gray-300 p-4 rounded-lg">
							<legend className="text-lg px-2">Request parameters</legend>
							<table>
								<thead>
									<tr>
										<td className="px-4 py-2 font-semibold">Name</td>
										<td className="px-4 py-2 font-semibold">Rules</td>
										<td className="px-4 py-2 font-semibold">Description</td>
									</tr>
								</thead>
								<tbody>
									{updateCartItemQuantityApiParams.map((param, index) => {
										return (
											<tr key={index}>
												<td className="px-4 py-2">{ param.name }</td>
												<td className="px-4 py-2">{ param.rules }</td>
												<td className="px-4 py-2">{ param.description }</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</fieldset>
					</fieldset>
				</details>
			</details>
		</div>
	);
}
