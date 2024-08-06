import Link from 'next/link'
export const Nav = ({ title, links }) => {

  return (
    <nav className="navbar navbar-expand navbar-light bg-secondary">
      <div className="container">
        <Link href="/">
          {/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <a className="navbar-brand px-2">
            <span className="">{title}</span>
          </a>
        </Link>
        <div
          className={"navbar-collapse"}
        >
          <div className="navbar-nav">
            {links.map((value, index) => (
              <Link key={index} href={value.link} >
                <a className="nav-link">{value.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
