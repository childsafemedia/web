import Link from 'next/link';

export default function Layout(props) {
    return (
        <div>
            <header>
                <Link href="/"><a>ChildSafeMedia&trade;</a></Link>
                <ul className="menu">
                    <li><Link href="/media"><a>Media Reviews</a></Link></li>
                </ul>
            </header>
            <main>
                {props.children}
            </main>
            <style global jsx>{
                `body {
                    padding: 0;
                    margin: 0;
                    font-family: Verdana;
                }
                
                header {
                    box-sizing: border-box;
                    background-color: navy;
                    width: 100%;
                    height: 80px;
                    color: white;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 24px;
                    padding-right: 24px;
                }

                header a {
                    color: #eee;
                    text-decoration: none;
                }

                header a:hover {
                    color: white;
                    text-decoration: underline;
                }

                .menu {
                    list-style-type: none;
                    display: inline;
                }

                main {
                    padding-top: 80px;
                    width: 100%;
                    min-height: 100vh;
                    box-sizing: border-box;
                }
                `
            }
            </style>
        </div>
    );
}