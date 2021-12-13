import { useRouter } from "next/router";
import LinkButton from "../../components/buttons/linkButton";

export default function SearchBreed() {
	const router = useRouter();
	const categoryId = router.query.categoryId;

	return (
		<>
			<h1>{categoryId}</h1>
			<h2 className="cSecondary">Category Cat Search</h2>
			<LinkButton path="/categories" variant="outlined" color="secondary">
				All Categories
			</LinkButton>
		</>
	);
}
