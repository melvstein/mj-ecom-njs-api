export default function Home() {
	const appName = process.env.NEXT_PUBLIC_APP_NAME as string;
	return (
		<div className="container mx-auto py-4">
			<h1>{ appName }</h1>
			<details className="mt-4 space-y-4">
				<summary>Product API</summary>
				<details className="px-4">
					<summary>/api/products</summary>
					<div className="px-4">
						<p>HTTP Method: POST</p>
						<p>- get all products</p>
					</div>
					<fieldset className="border border-gray-300 p-4 rounded-lg">
						<legend className="text-lg px-2">Request params</legend>
						<div className="flex items-start justify-center flex-col">
							<p>- apiKey <code>required</code> - API key of the app</p>
							<p>- sku <code>optional</code> - Unique id of the product</p>
						</div>
					</fieldset>
				</details>
				<details className="px-4">
					<summary>/api/product/addToCart</summary>
					<div className="px-4">
						<p>- HTTP Method: POST</p>
						<p>- Add to cart</p>
					</div>
				</details>
			</details>
		</div>
	);
}
