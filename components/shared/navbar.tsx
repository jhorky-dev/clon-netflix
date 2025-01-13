import { NavbarDesktop } from './navbar/navbarDesktop'
import { NavbarMobile } from './navbar/navbarMobile'

export function Navbar() {
  return (
    <nav>
        <div className='hidden mx-auto md:block'>
            <NavbarDesktop />
        </div>
        <div className='md:hidden'>
            <NavbarMobile />
        </div>
    </nav>
  )
}
