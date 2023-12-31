import { ReactNode } from "react"

type sectionProps={
    title?:string
    children:ReactNode
}

const Section = ({title="Start your day with CODE" ,children}:sectionProps) => {
  return (
    <section>
        <h1>{title}</h1>
        <p>{children}</p>
    </section>
  )
}

export default Section