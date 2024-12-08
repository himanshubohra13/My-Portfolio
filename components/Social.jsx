import Link from 'next/link';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {TbBrandLeetcode} from 'react-icons/tb'

const socials=[
    {icons:<FaGithub/>, path:'https://github.com/himanshubohra13'},
    {icons:<FaLinkedin/>, path:'https://www.linkedin.com/in/himanshu-bohra-563869156/'},
    {icons:<TbBrandLeetcode/>, path:'https://leetcode.com/u/himanshubohra206/'}
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