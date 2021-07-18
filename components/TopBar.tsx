import Link from 'next/link'

export const TopBar = () => {
  return (
    <header>
      <Link href='/'>Ishaan Bharal</Link>
      <Link href='/resume'>Resume</Link>
      <Link href='/projects'>Projects</Link>
      <Link href='/gallery'>Gallery</Link>
      <Link href='/blog'>Blog</Link>
    </header>
  )
}
