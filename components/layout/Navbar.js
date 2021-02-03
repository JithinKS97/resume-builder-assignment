import Link from 'next/link'

export default () => {
    return (
        <>
            <style>{style}</style>
            <div className=".navbar-container ">
                <Link href="/">
                    Resume builder
                </Link>
                <span>{"   |   "}</span>
                <Link href="/list">
                    List resumes
                </Link>
            </div>
        </>
    )
}

const style = `
    .navbar-container {
       display:flex;
       flex-direction:row;
    }
`