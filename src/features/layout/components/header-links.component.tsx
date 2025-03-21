import classes from "@/features/layout/headers/default.header.module.css";

const links: { title: string; url: string }[] = [
    {title: "Problemset", url: "#"},
    {title: "Contests", url: "#"},
];


export function HeaderLinks() {
    return (<>{links.map((link) => (
        <a key={link.title} href={link.url} className={classes.link}>
            {link.title}
        </a>
    ))}</>)
}