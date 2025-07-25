import Link from 'next/link'
export const Nav = ({ title, links }) => {

  return (
    <nav className="navbar navbar-expand navbar-light bg-gray-200">
      <div className="container">
        <Link href="/">
          {/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <a className="navbar-brand px-2">
            <span className="bh display-6">{title}</span>
          </a>
        </Link>
        <div
          className={"navbar-collapse"}
        >
          <div className="navbar-nav display-6">
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

export const HireNav = ({ title, links }) => {

  return (
    <nav className="navbar navbar-expand navbar-light bg-gray-200">
      <div className="container">
        <Link href="/hire">
          {/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <a className="navbar-brand px-2">
            <span className="bh display-6">{title}</span>
          </a>
        </Link>
        <div
          className={"navbar-collapse"}
        >
          <div className="navbar-nav display-6">
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
