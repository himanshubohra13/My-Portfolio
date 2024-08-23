import Link from 'next/link';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {TbBrandLeetcode} from 'react-icons/tb'

const socials=[
    {icons:<FaGithub/>, path:''},
    {icons:<FaLinkedin/>, path:''},
    {icons:<TbBrandLeetcode/>, path:''}
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>   
        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icons}</Link>
        })}
    </div>
  )
}

export default Social