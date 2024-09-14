import Link from "next/link";

export default function BlogPage() {
	return (
		<main>
			<p>
				<Link href="/blog/post-1">Blog 1</Link>
			</p>
			<p>
				<Link href="/blog/post-2">Blog 2</Link>
			</p>
		</main>
	);
}
