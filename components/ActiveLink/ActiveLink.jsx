import Link from 'next/link'
import React from 'react'



const ActiveLink = ({text, href, target, styles}) => {


  return (
    <Link target={target ? target : ''} className={styles} href={href}>{text}</Link>
  )
}

export default ActiveLink