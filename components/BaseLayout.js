export default function BaseLayout({ children }) {
    return <>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
    </>
}