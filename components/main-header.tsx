import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
	return (
		<header id={"main-header"}>
			<div id="logo">
				<Link href="/">DevShowcase</Link>
			</div>
			<nav id="nav-link">
				<ul>
					<li>
						<NavLink href="/about">About</NavLink>
					</li>
					<li>
						<NavLink href="/blog">Blog</NavLink>
					</li>
					<li>
						<NavLink href="/showcase">Showcase</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
